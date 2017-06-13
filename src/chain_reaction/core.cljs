(ns chain-reaction.core
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string :as str]
            [chain-reaction.rendercircle :as render]))

(enable-console-print!)

(def M (atom 0))

(def N (atom 0))

(def player-number (atom 0))

(defn players-in-game [player-number]
  (loop [c 1 player-vec []]
    (if (> c player-number)
        player-vec
        (recur (+ c 1) (conj player-vec (str "P" c))))))

(defn next-player [some-vec curr-player]
  (let [curr-index (.indexOf some-vec curr-player)]
     (if (= curr-index (- (count some-vec) 1))
         (some-vec 0)
         (some-vec (+ 1 curr-index)))))

(def flag (atom false))

(defn new-board [m n]
    (vec (repeat m (vec (repeat n {:player "B" :number 0})))))

(def current-players (atom []))

(def all-colours '("Red" "Green" "Blue" "Orange" "Violet" "White" "Brown" "Pink"))

(def player-color (atom {"B" "Black"}))

(defn player-data-dict []
   (loop [pl-li @current-players pl-dict {}]
     (if (empty? pl-li)
          pl-dict
          (recur (rest pl-li) (assoc pl-dict (first pl-li) 
                                          {:number-of-moves 0, :number-of-boxes 0, :sum-of-boxes 0})))))

(def app-state (atom {:text "Welcome to Chain Reaction Game"
                      :board (new-board @M @N)
                      :game-status :in-progress
                      :player-to-move "P1"
                      :player-data (player-data-dict)}))

(defn reset-app-state []
    (reset! current-players (players-in-game @player-number))
    (reset! app-state {:text "Welcome to Chain Reaction Game"
                       :board (new-board @M @N)
                       :game-status :in-progress
                       :player-to-move "P1"
                       :player-data (player-data-dict)}))

(defn update-player-info [player-id]
    (let [flattened-board (flatten (@app-state :board))
          box-count-pl (count (filter #(= player-id (% :player)) flattened-board))
          score-pl (reduce + (map #(% :number) (filter #(= player-id (% :player)) flattened-board)))]
    (swap! app-state assoc-in [:player-data player-id :number-of-boxes] box-count-pl)
    (swap! app-state assoc-in [:player-data player-id :sum-of-boxes] score-pl)))

(defn update-all-player-info []
  (doall (map update-player-info @current-players)))

(defn win? []
  (if (= 1 (count @current-players))
      (swap! app-state assoc-in [:game-status] (str (first @current-players) "-won"))))

(defn eliminate? [player-id]
    (let [player-info ((@app-state :player-data) player-id)]
        (if (and (> (player-info :number-of-moves) 0) (= (player-info :number-of-boxes) 0))
            (reset! current-players (vec (remove #{player-id} @current-players))))))

(defn any-eliminations? []
  (doall (map eliminate? @current-players)))

(defn max-value [i j]
    (- 3 (count (filter zero? [i j (- (- @M 1) i) (- (- @N 1) j)]))))

(defn valid-index [[i j]]
    (and (>= i 0) (>= j 0) (< i @M) (< j @N)))

(defn neighbours [i j]
    (filter valid-index [[(- i 1) j] [(+ i 1) j] [i (- j 1)] [i (+ j 1)]]))

(defn neighbours-update [i j]
  (loop [neighbour-list (neighbours i j)]
    (if (empty? neighbour-list)
        nil
        (let [neighbour-row (first (first neighbour-list))
              neighbour-column (second (first neighbour-list))]
        (do (swap! app-state assoc-in [:board neighbour-row neighbour-column :player] (@app-state :player-to-move))
            (swap! app-state update-in [:board neighbour-row neighbour-column :number] inc)
            (recur (rest neighbour-list)))))))

(defn split-update [[i j]]
   (if (= (+ 1 (max-value i j)) (get-in @app-state [:board i j :number]))
       (do (swap! app-state assoc-in [:board i j :player] "B")
           (swap! app-state assoc-in [:board i j :number] 0))
       (swap! app-state update-in [:board i j :number] - (+ 1 (max-value i j))))
   (neighbours-update i j))

(defn overall-split-update [li]
    (loop [split-list li]
        (if (empty? split-list)
            nil
            (do (split-update (first split-list))
                (recur (rest split-list))))))

(defn ready-to-split []
    (vec (for [i (range @M)
          j (range @N)
            :when (> (get-in @app-state [:board i j :number]) (max-value i j))]
        [i j])))

(defn play-pause-music []
    (if (.-paused (.getElementById js/document "audio"))
        (.play (.getElementById js/document "audio"))
        (.pause (.getElementById js/document "audio"))))

(defn make-circle [i j n color]
  (cond
    (= n 0) '()
    (= n 1) (render/one-circle i j color)
    (= n 2) (render/two-circles i j color)
    (= n 3) (render/three-circles i j color)))

(defn update-app-state [i j]
  (if (contains? #{"B", (@app-state :player-to-move)} (get-in @app-state [:board i j :player]))
      (do (swap! app-state assoc-in [:board i j :player] (@app-state :player-to-move))
          (swap! app-state update-in [:board i j :number] inc)
          (reset! flag true))))

(defn rectangle [i j]
    [:svg 
      {:on-click (fn [e]
                    (when (and (= :in-progress (@app-state :game-status)) (not @flag))
                          (update-app-state j i)))}
    [:rect 
      {:width 0.88
      :height 0.88
      :fill "Black"
      :x (* 0.9 i)
      :y (* 0.9 j)
      :stroke (@player-color (@app-state :player-to-move))
      :stroke-width 0.015}]
    (make-circle i j (get-in @app-state [:board j i :number]) (@player-color (get-in @app-state [:board j i :player])))])


(defn chain-reaction []
  [:div
   [:h1 (:text @app-state)]
   [:h4
   (case (get-in @app-state [:game-status])
            :in-progress "Game in progress "
            (get-in @app-state [:game-status]))
   [:button {:id "restart-game-button"
             :on-click
             (fn [e]
                (reset-app-state))} "Restart the game"]
    [:button {:id "play-pause-music-button"
              :on-click
              (fn [e]
                 (play-pause-music))} "Play/Pause Music"]]
   [:svg
   {:view-box "0 0 10 12"
   :width 750
   :height 750}
   (for [i (range @M)
         j (range @N)]
      [rectangle j i])]
   [:table 
    [:thead 
        [:tr {:style {:background-color "Indigo" }}
            [:td "Player-Name"]
            [:td "No. of moves"]
            [:td "No. of boxes"]
            [:td "Score"]]]
    [:tbody
        [:tr {:style {:background-color "Red"}}
            [:td "P1"]
            [:td (get-in @app-state [:player-data "P1" :number-of-moves])]
            [:td (get-in @app-state [:player-data "P1" :number-of-boxes])]
            [:td (get-in @app-state [:player-data "P1" :sum-of-boxes])]]
        [:tr {:style {:background-color "Green"}}
            [:td "P2"]
            [:td (get-in @app-state [:player-data "P2" :number-of-moves])]
            [:td (get-in @app-state [:player-data "P2" :number-of-boxes])]
            [:td (get-in @app-state [:player-data "P2" :sum-of-boxes])]]]]])

(defn start-game-handler []
  (let [rows (js/parseInt (str/trim (.-value (.getElementById js/document "rows"))))
        columns (js/parseInt (str/trim (.-value (.getElementById js/document "columns"))))
        players-no (js/parseInt (str/trim (.-value (.getElementById js/document "players"))))]
        (reset! M rows)
        (reset! N columns)
        (reset! player-number players-no)
        (reset! current-players (players-in-game players-no))
        (swap! player-color merge (zipmap (players-in-game players-no) (take players-no all-colours)))
        (reset-app-state)
        (set! (.-display (.-style (.getElementById js/document "start-game-container"))) "none")
        (.play (.getElementById js/document "audio"))))

(.addEventListener (.getElementById js/document "start-game-button") "click" start-game-handler)

(js/setInterval (fn [e]
                  (if @flag
                      (if (and (= :in-progress (@app-state :game-status)) (> (count (ready-to-split)) 0))
                          (do
                            (overall-split-update (ready-to-split))
                            (update-all-player-info)
                            (any-eliminations?)            
                            (win?))
                          (do
                            (reset! flag false)
                            (update-all-player-info)
                            (swap! app-state update-in [:player-data (@app-state :player-to-move) :number-of-moves] inc)
                            (swap! app-state assoc-in [:player-to-move] (next-player @current-players (@app-state :player-to-move))))))) 
                200)

(reagent/render-component [chain-reaction]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
