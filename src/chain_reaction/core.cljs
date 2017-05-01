(ns chain-reaction.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn new-board [m n]
    (vec (repeat m (vec (repeat n "B")))))



;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Welcome to Chain Reaction Game"
                          :board (new-board 9 9)
                          :game-status :in-progress}))

(defn rectangle
    [i j]
    [:rect 
        {:width 0.28
        :height 0.28
        :fill "grey"
        :x (+ 0.05 (* 0.3 i))
        :y (+ 0.05 (* 0.3 j))}])

(defn hello-world []
  [:h1 (:text @app-state)])

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
