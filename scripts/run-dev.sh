#!/bin/bash

node scripts/buildDevIndex.js
function startElectron {
  sleep 2
  electron .
}
trap "killall node" EXIT
node_modules/.bin/webpack-dev-server --config webpack.dev.js & startElectron
