import audioSvc from "gorngin/audio/audioSvc";
import app from "services/app";

const stateConfigs = {};

const commonSprites = ["transparency"];

const combatSprites = ["battlegrid"];

const commonSounds = [
  "bling",
  "bloop",
  "lightclick",
  "click",
  "confirm",
  "optionmenu",
  "cameraopen",
  "cameraclose",
  "unclick",
  "dialogue_appear",
  "genericdialogue"
];

const combatSounds = ["hit", "blast"];

stateConfigs.highway = function() {
  return {
    audio: [audioSvc.getThemes().highway].concat(commonSounds),
    images: ["fullscreen"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat(["bird", "detective", "norcosunset"]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.lake = function() {
  return {
    audio: [audioSvc.getThemes().highway].concat(commonSounds),
    images: ["fullscreen"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat(["bird", "heron", "lake"]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.mainmenu = function() {
  return {
    state: "menu",
    audio: [audioSvc.getThemes().menu, "confirm"],
    images: [],
    map: [],
    particles: [],
    spritesheets: [
      "fullscreen",
      "gorlogo",
      "fullscreenframe",
      "norcotitle",
      "norcosubtitle",
      "menulandscape",
      "norcosunset",
      "satellite",
      "titlestars",
      "transformers",
      "riverroad",
      "swamphand"
    ],
    fontStyles: {
      default: {
        font: `15px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      },
      small: {
        font: `13px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    },
    loadscreen: true,
    showLoadPercent: true
  };
};

stateConfigs.videostore = function() {
  return {
    audio: [audioSvc.getThemes().videostore].concat(commonSounds),
    images: ["fullscreen"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat(["videostore", "wordmovies"]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.stripmall = function() {
  return {
    audio: [audioSvc.getThemes().videostore].concat(commonSounds),
    images: ["fullscreen"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat(["stripmall"]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.traintrack = function() {
  return {
    audio: [audioSvc.getThemes().bar].concat(commonSounds),
    images: ["fullscreen"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat(["traintrack"]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.taxi = function() {
  return {
    audio: [audioSvc.getThemes().marning].concat(commonSounds),
    images: ["fullscreen"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat(["taxi"]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.interstate = function() {
  return {
    audio: [audioSvc.getThemes().bar].concat(commonSounds),
    images: ["fullscreen"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat([
      "bedroomsky",
      "interstateclouds",
      "interstatesky",
      "interstate"
    ]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.dreamspace = function() {
  return {
    audio: [audioSvc.getThemes().tophit].concat(commonSounds),
    images: ["fullscreen", "microwhite"],
    map: [],
    particles: [],
    spritesheets: commonSprites.concat([
      "aerialrefinery",
      "bedroomsky",
      "chapterone",
      "interstateclouds",
      "introrefinery",
      "neworleanssky",
      "neworleanseyes",
      "sandiasky",
      "train",
      "introtraintrack",
      "nightrefineryportrait",
      "neworleansskyline2",
      "sandias",
      "sandiamoon",
      "titlestars",
      "menulandscape",
      "dreamspacegrid2",
      "neworleansskyline",
      "zia"
    ]),
    fontStyles: {
      chapter: {
        font: `22px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.gasstation_indoor = function() {
  return {
    audio: [audioSvc.getThemes().conveniencestore, "bling"].concat(
      commonSounds
    ),
    map: [],
    particles: [],
    spritesheets: commonSprites.concat([
      "gasstation-indoor",
      "gasstation_backdoor",
      "kiosk"
    ]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.videostore_behind = function() {
  return {
    audio: [audioSvc.getThemes().videostore].concat(commonSounds),
    map: [],
    particles: [],
    spritesheets: commonSprites.concat(["videostore_behind"]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};
stateConfigs.motorcycleride = function() {
  return {
    audio: [audioSvc.getThemes().highway].concat(commonSounds),
    map: [],
    particles: [],
    spritesheets: commonSprites.concat([
      "motorcycleride",
      "motorcycleride_full",
      "motorcycleportrait",
      "refineryportrait"
    ]),
    fontStyles: {
      default: {
        font: `16px ${app.config.defaultfont}`,
        fill: "#fff",
        align: "center"
      }
    }
  };
};

stateConfigs.get = function(config) {
  if (!stateConfigs[config]) {
    return false;
  }
  return stateConfigs[config]();
};

export default stateConfigs;
