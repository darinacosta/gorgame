import stateAssetHandler from "gorngin/stateAssetHandler";
import stateConfigs from "services/stateConfigs";
import loadScreenSvc from "services/loadScreenSvc";
import keyboardSvc from "gorngin/input/keyboardSvc";
import cameraSvc from "gorngin/camera/cameraSvc";
import menuSvc from "gorngin/menu/menuSvc";
import audioSvc from "gorngin/audio/audioSvc";
import spriteSvc from "gorngin/sprites/spriteSvc";
import app, { game } from "services/app";

const state = {};
let stateId;
let stateConfig;
let messageboot;
let loadimg;
let loadPerc;

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
    app.enemyGroup.destroy(true);
  }
  app.dialogueManager.callback = null;
  keyboardSvc.clearRegisteredItems();
  keyboardSvc.init();
  menuSvc.resetMenuData();
  stateAssetHandler.preload(stateConfig);
  if (messageboot) {
    loadimg = game.add.text(
      game.width / 2,
      game.height / 2,
      "This game is optimized for Google Chrome.\n" +
        "Some features have been disabled for this browser.",
      stateConfig.fontStyles.default
    );
    loadimg.anchor.setTo(0.5, 0.5);
  } else if (app.config.load_img) {
    loadimg = loadScreenSvc.createLoadScreen(stateConfig);
    loadimg.animations.play("glitchin");
    loadimg.animations.currentAnim.onComplete.add(() => {
      loadimg.animations.play("idle");
    });
  }
  if (stateConfig.showLoadPercent) {
    loadPerc = loadScreenSvc.getLoadPercent();
  }
};

state.create = () => {
  function tweenOut() {
    if (loadimg) {
      if (loadPerc) {
        game.add
          .tween(loadPerc)
          .to({ alpha: 0 }, 900, Phaser.Easing.Linear.None, true);
      }
      const tween = game.add
        .tween(loadimg)
        .to({ alpha: 0 }, 900, Phaser.Easing.Linear.None, true);
      tween.onComplete.add(() => {
        game.state.start(stateId, true, false);
      });
    } else {
      game.state.start(stateId, true, false);
    }
  }
  if (stateConfig.state === "menu") {
    audioSvc.crossfadetrack(stateConfig.audio[0]);
  }
  if (messageboot) {
    window.setTimeout(() => {
      tweenOut();
    }, 1000);
  } else {
    tweenOut();
  }
  app.currentState = stateId;
  game.stage.backgroundColor = app.config.backgroundColor;
};

export default state;
