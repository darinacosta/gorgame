const path = require("path");
const webpack = require("webpack");
const devConfig = require("./webpack.dev.js");

// Using a separate config instead of automatic `webpack -p` because Webpack's
// UglifyJS plugin doesn't yet support the ES6-compatible branch of Uglify
module.exports = Object.assign({}, devConfig, {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  resolve: Object.assign({}, devConfig.resolve, {
    alias: Object.assign({}, devConfig.resolve.alias, {
      gorngin: path.resolve(__dirname, "node_modules/gorngin/src/gorngin")
    })
  })
});
