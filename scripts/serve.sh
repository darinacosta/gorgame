#!/bin/bash

node scripts/buildDevIndex.js
function startElectron {
  sleep 2
  node_modules/.bin/electron .
}
trap "killall node" EXIT
node_modules/.bin/webpack-dev-server --config webpack.dev.js
