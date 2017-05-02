(ns chain-reaction.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(def m 8)
(def n 10)

(defn new-board [m n]
    (vec (repeat m (vec (repeat n {:player "B" :number 0})))))

(def player-color {"X" "Red" "Y" "Green" "B" "Grey"})
(def player-to-move (atom "X"))

;; define your app data so that it doesn't get over-written on reload

(def app-state (atom {:text "Welcome to Chain Reaction Game"
                      :board (new-board m n)
                      :game-status :in-progress}))

(defn max-value [i j]
	(- 3 (count (filter zero? [i j (- (- m 1) i) (- (- n 1) j)]))))

(defn update-app-state [i j]
  (if (contains? #{"B" @player-to-move} (get-in @app-state [:board i j :player]))
      (do (swap! app-state assoc-in [:board i j :player] @player-to-move)
          (swap! app-state update-in [:board i j :number] inc)
          (reset! player-to-move ({"X" "Y", "Y" "X"} @player-to-move)))))

(defn rectangle [i j]
    [:svg 
      {:on-click (fn [e]
                    (update-app-state j i))}
    [:rect 
      {:width 0.88
      :height 0.88
      :fill (player-color (get-in @app-state [:board j i :player]))
      :x (+ 0.05 (* 0.9 i))
      :y (+ 0.05 (* 0.9 j))}]
    [:text {:x (+ 0.25 (* 0.9 i))
            :y (+ 0.70 (* 0.9 j))
            :font-size 0.7} (let [text (get-in @app-state [:board j i :number])]
                                 (if (not= 0 text) (str text)))]])


(defn chain-reaction []
  [:div
   [:h1 (:text @app-state)]
   [:h4 
   (case (get-in @app-state [:game-status])
            :in-progress "Game in progress ")]
   [:svg
   {:view-box "0 0 10 12"
   :width 500
   :height 500} 
   (for [i (range (count (:board @app-state)))
         j (range (count (first (:board @app-state))))]
      [rectangle j i])]])

(reagent/render-component [chain-reaction]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
