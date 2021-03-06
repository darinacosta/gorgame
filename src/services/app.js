import game from "gorngin/gorgame/phasergame";
import app from "gorngin/app";
import configHelpers from "gorngin/configHelpers";
import stateManager from "services/stateManager";

Object.assign(app, {
  gamepad: null,
  blackscreen: null, // sprite to cover scenes during menu transitions
  coverGroup: null,
  currentState: null,
  dialogueGroup: null,
  dialogueTextGroup: null,
  menuTextGroup: null,
  itemGroup: null,
  dialogueBorder: null,
  enemyGroup: null,
  notificationGroup: null,
  journalGroup: null,
  hotspotGroup: null,
  combatGroup: null,
  frameTransition: false, // set to true while frame is in the middle of transition
  combatBackgroundGroup: null,
  dialoguePortraitGroup: null,
  dialogueProfileImage: null,
  previousDialogue: null,
  previousDialogueCallback: null,
  dialoueSvc: null,
  menuSvc: null,
  menuActivated: 0,
  portraitStatic: null,
  // keypad selections
  dialogueSelections: [],
  mapSelections: [],
  menuSelections: [],
  signals: {},
  fadeSprite: null,
  transitionSprite: null,
  tweenCycleInterrupt: false, // set to true if intro skipped
  menuDisplayGroup: null,
  dialogueManager: null,
  stateManager,
  tweens: []
});

app.dialogueManager = {};

app.get = attr => app[attr];

/*
  Config
*/

app.config = {
  browser: configHelpers.browser,
  title: "Game",
  defaultfont: "msxbit", // munroregular, MSX Screen 0, MSX Screen 1, mrjunker
  devtools: false,
  defaultFontSize: 13,
  music: 0.3,
  soundfx: 0.3,
  mute: false,
  canvas_width: 700,
  canvas_height: 387,
  load_img: false,
  // sounds that are shared across all states
  common_sounds: ["lightclick", "confirm"],

  // sprites that are shared across all states
  common_sprites: ["backbutton", "dialoguecontinue", "fullscreen"],
  demo: true,
  dev_canvas_width: 700, // 700
  dev_canvas_height: 390, // 350
  backgroundColor: "#000000",
  dialogue: {
    openFrom: "BOTTOM",
    height: 133
  },
  enableFullscreen: false,
  skipCutScenes: false,
  startState: "placeholder",
  startFullscreen: false,
  screencap_enabled: true,
  debug: false,
  liveDebug: false,
  unsupportedBrowser: false,
  devStart: false,
  devStartState: "placeholder",
  devStartMusic: ""
};

app.devRender = () => {
  if (app.config.debug || app.config.liveDebug) {
    game.time.advancedTiming = true;
    const pos = game.input.activePointer.position;
    game.debug.text(`FPS: ${game.time.fps}` || "FPS: --", 10, 20, "#00ff00");
    game.debug.text(
      `x:${Math.round(pos.x)} y:${Math.round(pos.y)}`,
      10,
      35,
      "#00ff00"
    );
  }
};

export default app;
export { game };
