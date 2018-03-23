import npcCtrl from "services/npcCtrl";
import particleHelpers from "gorngin/particleHelpers";
import spriteClasses from "gorngin/sprites/spriteClasses";
import cameraSvc from "gorngin/camera/cameraSvc";
import app, { game } from "services/app";

const svc = {};
let config;
const percStyle = {
  font: "18px munroregular",
  fill: "#aaaaff",
  align: "center"
};

svc.getLoadPercent = function() {
  // PERCENT LOAD
  const fileComplete = function(
    progress,
    cacheKey,
    success,
    totalLoaded,
    totalFiles
  ) {
    loadPerc.setText(`${progress}%`);
  };
  const loadPerc = game.add.text(game.width / 2, 300, "", percStyle);
  loadPerc.anchor.set(0.5, 0.5);
  game.load.onFileComplete.add(fileComplete, this);
  return loadPerc;
};

svc.createLoadScreen = function(cfg) {
  let beginMessage, beginStyle, beginText, loadSprite, fileComplete;
  config = cfg;
  return svc.getLoadImg();
};

svc.getLoadImg = function(initX, initY) {
  let x, y;

  if (initX) {
    x = initX;
  } else {
    x =
      app.stateManager.currentState === "mainmenu"
        ? game.width / 2
        : game.width - 70;
  }

  if (initY) {
    y = initY;
  } else {
    y =
      app.stateManager.currentState === "mainmenu"
        ? game.height / 2
        : game.height - 50;
  }

  const scale = app.stateManager.currentState === "mainmenu" ? 1 : 0.4;
  this.loadimg = new spriteClasses.Sprite({
    x,
    y,
    img: "loadanimation",
    animation: [
      {
        name: "idle",
        sequence: [4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5],
        speed: 6,
        play: false,
        loop: true
      },
      {
        name: "glitchin",
        sequence: [0, 1, 2, 3],
        speed: 13,
        play: true,
        loop: false
      },
      {
        name: "glitchout",
        sequence: [3, 2, 1, 0],
        speed: 13,
        play: false,
        loop: false
      }
    ],
    allowGravity: false,
    fixedToCamera: false,
    physics: "ARCADE",
    collideWorldBounds: true,
    inputEnabled: false,
    scale: [1, 1],
    update() {},
    statevars: {}
  });
  this.loadimg.scale.setTo(scale, scale);
  this.loadimg.anchor.setTo(0.5, 0.5);

  return this.loadimg;
};

export default svc;
