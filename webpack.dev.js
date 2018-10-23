const path = require("path");

const phaserModule = path.join(__dirname, "/node_modules/phaser/");
const phaser = path.join(phaserModule, "src/phaser.js");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/init.js"],
    vendor: ["phaser-ce"]
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
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
      gordeps: path.resolve(__dirname, "../gorngin/node_modules"),
      gorngin: path.resolve(__dirname, "../gorngin/src/gorngin"),
      jquery: path.resolve(__dirname, "node_modules/jquery/dist/jquery.min"),
      rooms: path.resolve(__dirname, "src/rooms"),
      assets: path.resolve(__dirname, "assets"),
      phaser
    }
  },
  // plugins: [new JsDocPlugin()],
  devtool: "cheap-eval-source-map"
};
