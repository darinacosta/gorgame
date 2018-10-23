import stateAssetHandler from "gorngin/stateAssetHandler";
import stateConfigs from "services/stateConfigs";
import configHelpers from "gorngin/configHelpers";
import audioSvc from "gorngin/audio/audioSvc";
import gorgame from "gorngin/gorgame/gorgame";
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
  stateAssetHandler.preload({
    state: "boot",
    spritesheets: ["bootimg", "loadanimation"]
  });
  this.load.bitmapFont(
    "msxbit",
    "assets/fonts/msxbit/font.png",
    "assets/fonts/msxbit/font.fnt"
  );
};

boot.create = () => {
  const state = configHelpers.getURLParameter("state");
  jQuery(".hideOnStart").css("display", "none");
  if (
    configHelpers.getURLParameter("state") &&
    (app.stateManager.getStateConfig(state) || stateConfigs.get(state))
  ) {
    app.config.devStart = true;
    app.config.devStartState = state;
  }

  if (app.config.devStart || app.config.camera_mode) {
    game.scene.start("loadState", state);
  } else {
    game.scene.start("loadState", "placeholder");
  }
};

export default boot;
