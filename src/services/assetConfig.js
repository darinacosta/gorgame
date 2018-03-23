import assetDirectorySvc from "gorngin/assetDirectorySvc";

const svc = {};

svc.assets = {
  backbutton: {
    height: 20,
    name: "backbutton",
    path: "sprites/backbutton.png",
    width: 20
  },
  bird: {
    height: 23,
    name: "bird",
    path: "sprites/bird.png",
    width: 17
  },
  blackscreen: {
    height: 400,
    name: "blackscreen",
    path: "sprites/blackscreen.png",
    width: 700
  },
  dialoguecontinue: {
    height: 28,
    name: "dialoguecontinue",
    path: "sprites/dialogue_continue.png",
    width: 31
  },
  fullscreenframe: {
    height: 400,
    name: "fullscreenframe",
    path: "sprites/fullscreenframe.png",
    width: 700
  },
  gridtransition: {
    height: 400,
    name: "gridtransition",
    path: "sprites/gridtransition.png",
    width: 700
  },
  hotspot: {
    height: 40,
    name: "hotspot",
    path: "sprites/hotspot.png",
    width: 40
  },
  landscapeframe: {
    height: 360,
    name: "landscapeframe",
    path: "sprites/landscapeframe.png",
    width: 640
  },
  landscapeframemom: {
    height: 387,
    name: "landscapeframemom",
    path: "sprites/landscapeframe_mom.png",
    width: 700
  },
  optionselect: {
    height: 100,
    name: "optionselect",
    path: "sprites/option_select.png",
    width: 50
  },
  transparency: {
    height: 360,
    name: "transparency",
    path: "sprites/transparency.png",
    width: 640
  },
  walkingmodel: {
    height: 50,
    name: "walkingmodel",
    path: "sprites/walking_model.png",
    width: 30
  },
  white: {
    name: "white",
    path: "particles/white.png"
  },
  whitebeam: {
    name: "whitebeam",
    path: "particles/whitebeam.png"
  }
};

assetDirectorySvc.set("assets", svc.assets);

export default svc;
