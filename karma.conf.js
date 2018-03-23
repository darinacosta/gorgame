const browserMode = false;

module.exports = config => {
  config.set({
    basePath: ".",
    client: {
      captureConsole: browserMode ? true : false
    },
    frameworks: ["jasmine", "requirejs"],
    browsers: browserMode ? ["Chrome"] : ["PhantomJS"],
    singleRun: browserMode ? false : true,
    files: [
      {
        pattern: "assets/**/*.ogg",
        included: false,
        served: true,
        nocache: false
      },
      { pattern: "node_modules/phaser/build/phaser.min.js", included: true },
      { pattern: "node_modules/jquery/dist/jquery.min.js", included: true },
      { pattern: "src/services/gameConfig.js", included: true },
      { pattern: "bundle.js", included: true },
      { pattern: "src/services/app.js", included: true },
      { pattern: "src/test-main.js", included: true },
      { pattern: "src/**/*.js", included: false }
    ],
    mime: {
      "audio/mp3": ["mp3"],
      "audio/ogg": ["ogg"]
    },
    exclude: ["src/main.js"],
    preprocessors: {
      "./js/app.bundle.js": ["webpack"]
    },
    webpack: require("./webpack.dev.js")[2],
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    concurrency: Infinity,
    plugins: [
      "karma-mocha-reporter",
      "karma-chrome-launcher",
      "karma-webpack",
      "karma-jasmine",
      "karma-requirejs",
      "karma-phantomjs-launcher"
    ]
  });
};
