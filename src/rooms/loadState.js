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

state.init = function init(name) {
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
  messageboot =
    !app.config.browser.toLowerCase().startsWith("chrome") &&
    stateConfig.state === "menu";
  app.dialogueManager.callback = null;
  //  @TODO keyboardSvc.clearRegisteredItems();
  // @TODO keyboardSvc.init();
  console.log("!!!STATE CONFIG", stateConfig);
  stateAssetHandler.preload(stateConfig);
};

state.create = () => {
  if (stateConfig.state === "menu") {
    // @TODO audioSvc.crossfadetrack(stateConfig.audio[0]);
  }
  app.currentState = stateId;
  gorgame.scene.start(stateId);
};

export default state;
