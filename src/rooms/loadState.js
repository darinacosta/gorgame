import stateAssetHandler from "gorngin/stateAssetHandler";
import stateConfigs from "services/stateConfigs";
import loadScreenSvc from "services/loadScreenSvc";
import dialogueSvc from "gorngin/dialogue/dialogueSvc";
import keyboardSvc from "gorngin/keyboardSvc";
import currentDialogueData from "gorngin/dialogue/currentDialogueData";
import cameraSvc from "gorngin/camera/cameraSvc";
import hotspotSvc from "gorngin/hotspots/hotspotSvc";
import audioSvc from "gorngin/audio/audioSvc";
import spriteSvc from "gorngin/sprites/spriteSvc";
import app, { game } from "services/app";

const state = {};
let stateId;
let stateConfig;
let messageboot;

state.init = name => {
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
  spriteSvc.clearCache();

  game.antialias = false;
  messageboot =
    !app.config.browser.toLowerCase().startsWith("chrome") &&
    stateConfig.state === "menu";
  if (stateConfig.state !== "menu") {
    audioSvc.crossfadetrack(stateConfig.audio[0]);
  }
  if (app.enemyGroup) {
    app.enemyGroup.callAll("kill");
    app.enemyGroup.callAll("destroy");
  }
  app.dialogueSvc.lockDialogue = false;
  dialogueSvc.set("persistentPreviousElement", { portrait: "" });
  app.dialogueManager.callback = null;
  hotspotSvc.clearHotspots();
  keyboardSvc.clearRegisteredItems();
  keyboardSvc.init();
  currentDialogueData.clear();
  stateAssetHandler.preload(stateConfig);
};

state.create = () => {
  function tweenOut() {
    game.state.start(stateId, true, false);
  }
  if (stateConfig.state === "menu") {
    audioSvc.crossfadetrack(stateConfig.audio[0]);
  }
  tweenOut();
  app.currentState = stateId;
  game.stage.backgroundColor = app.config.backgroundColor;
};

export default state;
