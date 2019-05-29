import configHelpers from "gorngin/configHelpers";
import audioSvc from "gorngin/audio/audioSvc";
import inventorySvc from "gorngin/inventory/inventorySvc";
import jQuery from "jquery";
import app, { game } from "services/app";

const boot = {};

boot.init = function init() {
  audioSvc.preloadTracks();
  if (typeof process !== "undefined" && process.versions["node-webkit"]) {
    app.webkit = true;
  }
  game.scene.backgroundColor = app.config.backgroundColor;
  // game.input.maxPointers = 2;
  document.getElementById("container").appendChild(game.canvas);
};

boot.preload = function preload() {
  this.load.bitmapFont(
    "msxbit",
    "assets/fonts/msxbit/font.png",
    "assets/fonts/msxbit/font.fnt"
  );
  this.load.bitmapFont(
    "munrobit",
    "assets/fonts/munrobit/font.png",
    "assets/fonts/munrobit/font.fnt"
  );
  this.load.bitmapFont(
    "fauxsnatch",
    "assets/fonts/fauxsnatch/font.png",
    "assets/fonts/fauxsnatch/font.fnt"
  );
};

boot.create = () => {
  const state = configHelpers.getURLParameter("room") || "titlescreen";
  const items = configHelpers.getURLParameter("items");
  jQuery(".hideOnStart").css("display", "none");
  if (state && app.stateManager.getStateConfig(state)) {
    app.config.devStart = true;
    app.config.devStartState = state;
  }

  if (items) {
    const itemArray = items.split(",");
    for (const i of itemArray) {
      inventorySvc.gainPossession(i);
    }
  }

  function run() {
    if (app.config.devStart || app.config.camera_mode) {
      game.scene.start("loadState", state);
    } else {
      game.scene.start("loadState", "placeholder");
    }
  }

  if (app.config.startPrompt && document.cookie.indexOf("visited") === -1) {
    jQuery("canvas").one("click", () => {
      document.cookie = "visited";
      jQuery("#startPrompt").css("display", "none");
      run();
    });
    jQuery("body").append(
      `
      <div id='startPrompt'
           style='position:absolute;top:300px; text-align: center;
                  width: 100%;font-size: 40px;font-family:munroregular;'>
        Click anywhere to run in your browser.
      </div>
      `
    );
  } else {
    run();
  }
};

export default boot;
