const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/init.js"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader"
      }
    ],
    loaders: []
  },
  devServer: {
    compress: true,
    port: 9000
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      gorngin: path.resolve(__dirname, "../gorngin/src/gorngin"),
      jquery: path.resolve(__dirname, "node_modules/jquery/dist/jquery.min"),
      rooms: path.resolve(__dirname, "src/rooms"),
      assets: path.resolve(__dirname, "assets")
    }
  },
  devtool: "cheap-eval-source-map"
};
