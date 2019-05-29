import stateAssetHandler from "gorngin/stateAssetHandler";
import keyboardSvc from "gorngin/input/keyboardSvc";
import cameraSvc from "gorngin/camera/cameraSvc";
import audioSvc from "gorngin/audio/audioSvc";
import gorgame from "gorngin/gorgame/gorgame";
import currentScene from "gorngin/gorgame/currentPhaserScene";
import app from "services/app";

const state = {};
let stateId;
let stateConfig;

state.init = function init(name) {
  currentScene.set(this);
  stateId = name;
  stateConfig = app.stateManager.getStateConfig(name);
  app.stateManager.currentState = stateId;
  app.stateManager.currentStateName = stateConfig.name;
  if (!cameraSvc.defaultForegroundElementsRegisterd) {
    cameraSvc.registerDefaultForegroundElements();
  }
};

state.preload = () => {
  // reset all necessary vars and clear cache
  audioSvc.clearCache();
  audioSvc.crossfadetrack(stateConfig.audio[0]);
  app.dialogueManager.callback = null;
  //  @TODO keyboardSvc.clearRegisteredItems();
  // @TODO keyboardSvc.init();
  stateAssetHandler.preload(stateConfig);
};

state.create = () => {
  keyboardSvc.enable();
  if (stateConfig.state === "menu") {
    // @TODO audioSvc.crossfadetrack(stateConfig.audio[0]);
  }
  app.currentState = stateId;
  gorgame.scene.start(stateId);
};

export default state;
