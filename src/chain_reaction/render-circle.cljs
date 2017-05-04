(ns chain-reaction.render-circle)

(defn one-circle [i j color]
  [:circle
    {:cx (+ 0.44 (* 0.9 i))
     :cy (+ 0.44 (* 0.9 j))
     :r 0.2
     :fill color
     :stroke "black"
     :stroke-width 0.03}])

(defn two-circles [i j color]
  [:svg 
  [:circle
    {:cx (+ 0.64 (* 0.9 i))
     :cy (+ 0.44 (* 0.9 j))
     :r 0.2
     :fill color
     :stroke "black"
     :stroke-width 0.03}]
  [:circle
    {:cx (+ 0.24 (* 0.9 i))
     :cy (+ 0.44 (* 0.9 j))
     :r 0.2
     :fill color
     :stroke "black"
     :stroke-width 0.03}]])

(defn three-circles [i j color]
  [:svg 
  [:circle
    {:cx (+ 0.26 (* 0.9 i))
     :cy (+ 0.24 (* 0.9 j))
     :r 0.2
     :fill color
     :stroke "black"
     :stroke-width 0.03}]
  [:circle
    {:cx (+ 0.26 (* 0.9 i))
     :cy (+ 0.64 (* 0.9 j))
     :r 0.2
     :fill color
     :stroke "black"
     :stroke-width 0.03}]
  [:circle
    {:cx (+ 0.62 (* 0.9 i))
     :cy (+ 0.44 (* 0.9 j))
     :r 0.2
     :fill color
     :stroke "black"
     :stroke-width 0.03}]])