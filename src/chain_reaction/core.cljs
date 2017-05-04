(ns chain-reaction.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]
            [chain-reaction.render-circle :as render]))

(enable-console-print!)

(def M (atom 8))

(def N (atom 10))

(defn new-board [m n]
    (vec (repeat m (vec (repeat n {:player "B" :number 0})))))

(def player-color {"X" "Red" "Y" "Green" "B" "Black"})
(def player-to-move (atom "X"))
(def player-data (atom {"X" {:number-of-moves 0, :number-of-boxes 0, :sum-of-boxes 0},
                        "Y" {:number-of-moves 0, :number-of-boxes 0, :sum-of-boxes 0}}))
;; define your app data so that it doesn't get over-written on reload

(def app-state (atom {:text "Welcome to Chain Reaction Game"
                      :board (new-board @M @N)
                      :game-status :in-progress}))

(defn reset-app-state
    []
    (reset! app-state {:text "Welcome to Chain Reaction Game"
                       :board (new-board @M @N)
                       :game-status :in-progress})
    (reset! player-to-move "X")
    (reset! player-data {"X" {:number-of-moves 0, :number-of-boxes 0, :sum-of-boxes 0},
                         "Y" {:number-of-moves 0, :number-of-boxes 0, :sum-of-boxes 0}}))

(defn update-player-info []
    (let [flat-board (flatten (@app-state :board))
          nob-x (count (filter #(= "X" (% :player)) flat-board))
          nob-y (count (filter #(= "Y" (% :player)) flat-board))
          sob-x (reduce + (map #(% :number) (filter #(= "X" (% :player)) flat-board)))
          sob-y (reduce + (map #(% :number) (filter #(= "Y" (% :player)) flat-board)))]
    (swap! player-data update-in [@player-to-move :number-of-moves] inc)
    (swap! player-data assoc-in ["X" :number-of-boxes] nob-x)
    (swap! player-data assoc-in ["Y" :number-of-boxes] nob-y)
    (swap! player-data assoc-in ["X" :sum-of-boxes] sob-x)
    (swap! player-data assoc-in ["Y" :sum-of-boxes] sob-y)))

(defn win? []
    (let [opp-player-data (@player-data ({"X" "Y", "Y" "X"} @player-to-move))]
        (if (and (> (opp-player-data :number-of-moves) 0) (= (opp-player-data :number-of-boxes) 0))
            (swap! app-state assoc-in [:game-status] (str @player-to-move "-won")))))

(defn max-value [i j]
    (- 3 (count (filter zero? [i j (- (- @M 1) i) (- (- @N 1) j)]))))

(defn valid-index [[i j]]
    (and (>= i 0) (>= j 0) (< i @M) (< j @N)))

(defn neighbours [i j]
    (filter valid-index [[(- i 1) j] [(+ i 1) j] [i (- j 1)] [i (+ j 1)]]))

(defn neighbours-update [i j]
  (loop [neighbour (neighbours i j)]
    (if (empty? neighbour)
        nil
        (do (swap! app-state assoc-in [:board (first (first neighbour)) (second (first neighbour)) :player] @player-to-move)
            (swap! app-state update-in [:board (first (first neighbour)) (second (first neighbour)) :number] inc)
            (recur (rest neighbour))))))

(defn split-update [[i j]]
  (neighbours-update i j)
   (if (= (+ 1 (max-value i j)) (get-in @app-state [:board i j :number]))
       (do (swap! app-state assoc-in [:board i j :player] "B")
           (swap! app-state assoc-in [:board i j :number] 0))
       (swap! app-state update-in [:board i j :number] - (+ 1 (max-value i j)))))

(defn overall-split-update [split-list]
    (loop [li split-list]
        (if (empty? li)
            nil
            (do (split-update (first li))
                (recur (rest li))))))

(defn ready-to-split
    []
    (for [i (range @M)
          j (range @N)
            :when (> (get-in @app-state [:board i j :number]) (max-value i j))]
        [i j]))

(defn make-circle [i j n color]
  (cond
    (= n 0) '()
    (= n 1) (render/one-circle i j color)
    (= n 2) (render/two-circles i j color)
    (= n 3) (render/three-circles i j color)))

(defn update-app-state [i j]
  (if (contains? #{"B" @player-to-move} (get-in @app-state [:board i j :player]))
      (do (swap! app-state assoc-in [:board i j :player] @player-to-move)
          (swap! app-state update-in [:board i j :number] inc)
          (while (> (count (ready-to-split)) 0) (overall-split-update (ready-to-split)))
          (update-player-info)
          (win?)
          (reset! player-to-move ({"X" "Y", "Y" "X"} @player-to-move)))))

(defn rectangle [i j]
    [:svg 
      {:on-click (fn [e]
                    (when (= :in-progress (@app-state :game-status))
                          (update-app-state j i)))}
    [:rect 
      {:width 0.88
      :height 0.88
      :fill "White"
      :x (* 0.9 i)
      :y (* 0.9 j)
      :stroke (player-color @player-to-move)
      :stroke-width 0.015}]
    (make-circle i j (get-in @app-state [:board j i :number]) (player-color (get-in @app-state [:board j i :player])))])


(defn chain-reaction []
  [:div
   [:h1 (:text @app-state)]
   [:h4
   (case (get-in @app-state [:game-status])
            :in-progress "Game in progress "
            "X-won" "X-won "
            "Y-won" "Y-won ")
   [:button {:on-click
             (fn [e]
                (reset-app-state))} "Restart the game"]]
   [:svg
   {:view-box "0 0 10 12"
   :width 800
   :height 800}
   (for [i (range @M)
         j (range @N)]
      [rectangle j i])]])

(defn start-game-handler []
  (let [rows (js/parseInt (str/trim (.-value (.getElementById js/document "rows"))))
        columns (js/parseInt (str/trim (.-value (.getElementById js/document "columns"))))
        players (js/parseInt (str/trim (.-value (.getElementById js/document "players"))))]
        (reset! M rows)
        (reset! N columns)
        (set! (.-display (.-style (.getElementById js/document "start-game-container"))) "none")
        (.play (.getElementById js/document "audio"))))

(.addEventListener (.getElementById js/document "start-game-button") "click" start-game-handler)


(reagent/render-component [chain-reaction]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
