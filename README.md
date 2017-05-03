# Chain-Reaction

## Overview

A 2-player implementation of the chain-reaction game.

Read the rules of the game [here](https://brilliant.org/wiki/chain-reaction-game/).

## How to run the app

#### Software requirements :

- [Git](https://git-scm.com/)
- [Java](https://java.com/en/download/)
- [Leiningen](https://leiningen.org/)
- [Figwheel](https://github.com/bhauman/lein-figwheel)

Clone the repo:

```
git clone https://github.com/p4v4n/Chain-Reaction-Game
cd Chain-Reaction-Game
```

Run app

```
lein figwheel
```

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2017

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
