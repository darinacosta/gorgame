const path = require("path");
const bodyParser = require("webpack-body-parser");
const fs = require("fs");

const phaserModule = path.join(__dirname, "/node_modules/phaser/");
const phaser = path.join(phaserModule, "src/phaser.js");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/init.js"]
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
    port: 9000,
    setup(app) {
      app.use(bodyParser.json());
      app.use(
        bodyParser.urlencoded({
          extended: true
        })
      );
      app.post("/dialogue", (req, res) => {
        const json = req.body.json;
        const room = req.body.room;
        fs.writeFile(`src/rooms/${room}/dialogue.json`, json, err => {
          if (err) {
            console.log(err);
          }
          console.log("The file was saved!", `src/rooms/${room}/dialogue.json`);
        });
      });
      app.post("/inventory", (req, res) => {
        const content = req.body.content;
        const p = `src/services/inventoryConfig.js`;
        fs.writeFile(p, content, err => {
          if (err) {
            console.log(err);
          }
          console.log("The file was saved!", p);
        });
      });
    }
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
