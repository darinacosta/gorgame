import stateAssetHandler from "gorngin/stateAssetHandler";
import stateConfigs from "services/stateConfigs";
import keyboardSvc from "gorngin/input/keyboardSvc";
import cameraSvc from "gorngin/camera/cameraSvc";
import audioSvc from "gorngin/audio/audioSvc";
import gorgame from "gorngin/gorgame/gorgame";
import app from "services/app";

const state = {};
let stateId;
let stateConfig;
let messageboot;
let loadimg;
let loadPerc;

state.init = function init(name) {
  console.log("!!!THIS", this);
  window.scene = this;
  stateId = name;
  stateConfig = app.stateManager.getStateConfig(name)
    ? app.stateManager.getStateConfig(name)
    : stateConfigs.get(stateId);
  app.currentTimeline = stateConfig.timeline === "mom" ? "mom" : "you";
  app.stateManager.currentState = stateId;
  app.stateManager.currentStateName = stateConfig.name;
  if (!cameraSvc.defaultForegroundElementsRegisterd) {
    cameraSvc.registerDefaultForegroundElements();
  }
};

state.preload = () => {
  // reset all necessary vars and clear cache
  audioSvc.clearCache();
  gorgame.setAntialias(false);
  messageboot =
    !app.config.browser.toLowerCase().startsWith("chrome") &&
    stateConfig.state === "menu";
  if (stateConfig.state !== "menu") {
    // @TODO audioSvc.crossfadetrack(stateConfig.audio[0]);
  }
  if (app.enemyGroup) {
    app.enemyGroup.destroy(true);
  }
  app.dialogueManager.callback = null;
  //  @TODO keyboardSvc.clearRegisteredItems();
  // @TODO keyboardSvc.init();
  stateAssetHandler.preload(stateConfig);
  if (messageboot) {
    loadimg = gorgame.add.text(
      gorgame.getWidth() / 2,
      gorgame.getHeight() / 2,
      "This game is optimized for Google Chrome.\n" +
        "Some features have been disabled for this browser.",
      stateConfig.fontStyles.default
    );
    loadimg.anchor.setTo(0.5, 0.5);
  } else if (app.config.load_img) {
    loadimg.play("glitchin");
    loadimg.animations.currentAnim.onComplete.add(() => {
      loadimg.play("idle");
    });
  }
};

state.create = () => {
  if (stateConfig.state === "menu") {
    // @TODO audioSvc.crossfadetrack(stateConfig.audio[0]);
  }
  app.currentState = stateId;
  console.log("!!>>>>START", stateId);
  gorgame.scene.start(stateId);
};

export default state;
