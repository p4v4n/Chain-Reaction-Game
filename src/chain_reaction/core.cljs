(ns chain-reaction.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn new-board [m n]
    (vec (repeat m (vec (repeat n "B")))))



;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Welcome to Chain Reaction Game"
                          :board (new-board 8 10)
                          :game-status :in-progress}))

(defn rectangle
    [i j]
    [:rect 
        {:width 0.88
        :height 0.88
        :fill "grey"
        :x (+ 0.05 (* 0.9 i))
        :y (+ 0.05 (* 0.9 j))}])

(defn chain-reaction []
  [:div
   [:h1 (:text @app-state)]
   [:h4 
   (case (get-in @app-state [:game-status])
            :in-progress "Game in progress ")]
   [:svg
   {:view-box "0 0 8 10"
   :width 500
   :height 500} 
   (for [i (range (count (:board @app-state)))
         j (range (count (first (:board @app-state))))]
      (case (get-in @app-state [:board i j])
        "B" [rectangle j i]))]])

(reagent/render-component [chain-reaction]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
