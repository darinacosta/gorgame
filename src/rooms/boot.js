import stateAssetHandler from "gorngin/stateAssetHandler";
import stateConfigs from "services/stateConfigs";
import configHelpers from "gorngin/configHelpers";
import audioSvc from "gorngin/audio/audioSvc";
import jQuery from "jquery";
import app, { game } from "services/app";

const boot = {};

boot.init = function init() {
  let canvasWidth;
  let canvasHeight;
  audioSvc.preloadTracks();
  if (typeof process !== "undefined" && process.versions["node-webkit"]) {
    app.webkit = true;
  }
  game.stage.backgroundColor = app.config.backgroundColor;
  // game.input.maxPointers = 2;
  if (this.game.device.desktop) {
    document.getElementById("container").appendChild(game.canvas);
    canvasWidth = 1024;
    canvasHeight = 576;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenTarget = document.getElementById("game");
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(game.canvas);
    game.scale.setMinMax(
      canvasWidth,
      canvasHeight,
      canvasWidth * 3,
      canvasHeight * 3
    ); // (minX, minY, maxX, maxY);
    game.scale.forceLandscape = true;
    game.scale.pageAlignVertically = true;
    game.scale.onFullScreenChange.add(() => {
      if (
        game.scale.isFullScreen &&
        app.stateManager.puc &&
        app.fullscreenButton
      ) {
        app.fullscreenButton.alpha = 0;
        app.fullscreenButton.alive = 0;
      } else if (
        !game.scale.isFullScreen &&
        app.stateManager.puc &&
        app.fullscreenButton
      ) {
        app.fullscreenButton.alpha = 1;
        app.fullscreenButton.alive = 1;
      }
    });
    game.scale.refresh();
  } else {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.minWidth = 500;
    game.scale.minHeight = 300;
    game.scale.maxWidth = 500;
    game.scale.maxHeight = 300;
    game.scale.forceLandscape = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.updateLayout(true);
    if (window.orientation === 0) {
      jQuery("#changedeviceorientation").css("display:block");
    }
    jQuery(window).on("orientationchange", () => {
      if (window.orientation === 0) {
        jQuery("#changedeviceorientation").css("display:block");
      } else {
        jQuery("#changedeviceorientation").css("display:none");
      }
    });
  }
};

boot.preload = () => {
  stateAssetHandler.preload({
    state: "boot",
    spritesheets: ["bootimg", "loadanimation"]
  });
  game.load.bitmapFont(
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
    game.state.start("loadState", true, false, state);
  } else {
    game.state.start("loadState", true, false, "placeholder");
  }
};

export default boot;
