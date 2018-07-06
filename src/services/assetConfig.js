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
  highway: {
    height: 160,
    name: "highway",
    path: "sprites/highway.png",
    width: 90
  },
  highway_wizard: {
    height: 160,
    name: "highway_wizard",
    path: "sprites/highway_wizard.png",
    width: 90
  },
  highway_title: {
    height: 160,
    name: "highway_title",
    path: "sprites/highway_title.png",
    width: 90
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
  microwhite: {
    name: "microwhite",
    path: "particles/microwhite.png"
  },
  optionselect: {
    height: 100,
    name: "optionselect",
    path: "sprites/option_select.png",
    width: 50
  },
  texas_sky: {
    height: 160,
    name: "texas_sky",
    path: "sprites/texas_sky.png",
    width: 90
  },
  texas_city: {
    height: 160,
    name: "texas_city",
    path: "sprites/texas_city.png",
    width: 90
  },
  texas_fog: {
    height: 160,
    name: "texas_fog",
    path: "sprites/texas_fog.png",
    width: 90
  },
  texas_foreground: {
    height: 160,
    name: "texas_foreground",
    path: "sprites/texas_foreground.png",
    width: 90
  },
  trafficmodel: {
    height: 66,
    name: "trafficmodel",
    path: "sprites/trafficmodel.png",
    width: 147
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
