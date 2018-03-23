import spriteClasses from "gorngin/sprites/spriteClasses";
import dialogueElementSvc from "gorngin/dialogue/dialogueElementSvc";
import gornginDialogueConfig from "gorngin/dialogue/config";
import app, { game } from "services/app";

const svc = {};
let defaultFontSize;
const borderLeft = app.config.dialogue.openFrom === "TOP" ? 10 : 30;
const borderTop =
  app.config.dialogue.openFrom === "TOP"
    ? 20
    : app.config.canvas_height - app.config.dialogue.height;

const choiceTop = borderTop;
const dialogueMaps = {
  horizontal: {
    id: "horizontal",
    maxCharCount: 200,
    body: {
      height: 100,
      border: {
        left: 30,
        top: app.config.canvas_height - app.config.dialogue.height + 5
      },
      openFrom: "bottom",
      width: 550
    },
    name: {
      border: {
        left: 30,
        top: app.config.canvas_height - app.config.dialogue.height + 5
      }
    },
    followupIcon: {
      border: {
        left: 640,
        top: 350
      }
    },
    backbutton: {
      border: {
        left: 5,
        top: 240
      }
    },
    choice: {
      border: {
        top: app.config.canvas_height - app.config.dialogue.height + 5,
        left: 30
      }
    }
  },
  horizontal_portrait: {
    maxCharCount: 100,
    body: {
      height: 100,
      border: {
        left: 155,
        top: app.config.canvas_height - app.config.dialogue.height + 5
      },
      openFrom: "bottom",
      width: 450
    },
    name: {
      border: {
        left: 155,
        top: app.config.canvas_height - app.config.dialogue.height + 5
      }
    },
    portrait: {
      border: {
        left: 3,
        top: app.config.canvas_height - app.config.dialogue.height - 5
      }
    },
    followupIcon: {
      border: {
        left: 640,
        top: 350
      }
    },
    choice: {
      border: {
        left: 155,
        top: app.config.canvas_height - app.config.dialogue.height + 5
      }
    }
  },
  vertical: {
    maxCharCount: 400,
    body: {
      height: 600,
      border: {
        left: 415,
        top: 20
      },
      openFrom: "bottom",
      width: 250
    },
    name: {
      border: {
        left: 415,
        top: 20
      }
    },
    followupIcon: {
      border: {
        left: 650,
        top: 360
      }
    },
    choice: {
      border: {
        left: 415,
        top: 20
      }
    },
    backbutton: {
      border: {
        left: 390,
        top: 5
      }
    }
  },
  fullscreen: {
    maxCharCount: 10,
    body: {
      height: 100,
      border: {
        left: 50,
        top: 350
      },
      openFrom: "bottom",
      width: 600
    },
    name: {
      border: {
        left: 415,
        top: 20
      }
    },
    followupIcon: {
      border: {
        left: 650,
        top: 360
      }
    },
    choice: {
      border: {
        left: 415,
        top: 20
      }
    },
    backbutton: {
      border: {
        left: 390,
        top: 5
      }
    }
  },
  fullscreen_portrait: {
    maxCharCount: 10,
    body: {
      height: 600,
      border: {
        left: game.width / 2,
        top: 70
      },
      openFrom: "bottom",
      width: 250
    },
    name: {
      border: {
        left: 415,
        top: 20
      }
    },
    followupIcon: {
      border: {
        left: 650,
        top: 360
      }
    },
    choice: {
      border: {
        left: 415,
        top: 20
      }
    },
    backbutton: {
      border: {
        left: 390,
        top: 5
      }
    }
  },
  journal: {
    maxCharCount: 500,
    body: {
      height: 320,
      border: {
        left: 225,
        top: 20
      },
      openFrom: "bottom",
      width: 250
    },
    name: {
      border: {
        left: 295,
        top: 18
      }
    },
    followupIcon: {
      border: {
        left: 460,
        top: 330
      }
    },
    choice: {
      border: {
        left: 230,
        top: 50
      },
      column: {
        length: 11,
        width: 125
      }
    },
    portrait: {
      border: {
        left: 483,
        top: 220
      }
    },
    backbutton: {
      border: {
        left: 205,
        top: 190
      }
    }
  },
  vertical_portrait: {
    maxCharCount: 200,
    body: {
      height: 200,
      maxCharCount: 600,
      border: {
        left: 415,
        top: 20
      },
      openFrom: "bottom",
      width: 250
    },
    name: {
      border: {
        left: 415,
        top: 20
      }
    },
    choice: {
      border: {
        left: 415,
        top: 20
      }
    },
    followupIcon: {
      border: {
        left: 650,
        top: 210
      }
    },
    portrait: {
      border: {
        left: 483,
        top: 220
      }
    }
  }
};

if (app.config.defaultfont === "munroregular") {
  defaultFontSize = 14;
} else {
  defaultFontSize = 11;
}

gornginDialogueConfig.setConfig({
  height: app.config.dialogue.height,
  currentMap: "horizontal",
  background: false,
  borderLeft,
  borderTop,
  choiceTop,
  maps: dialogueMaps,

  maxCharCount: {
    default: 200, // make it 30 for vertical map
    portrait: 90
  },

  getSvc(service) {
    if (svc[service]) {
      return svc[service];
    }
    return false;
  },
  getBackButton() {
    const th = this;
    const currentMap = dialogueMaps[gornginDialogueConfig.get("currentMap")];
    const momTL = app.currentTimeline === "mom";
    const y = currentMap.backbutton
      ? currentMap.backbutton.border.top
      : borderTop + 35;
    const x = currentMap.backbutton ? currentMap.backbutton.border.left : 2;
    th.click = () => {
      dialogueElementSvc.destroyDialogueGroup();
      app.dialogueSvc.advanceDialogueState("options");
    };
    const backbutton = new spriteClasses.Sprite({
      x,
      y,
      img: "backbutton",
      animation: [
        {
          name: "default",
          sequence: momTL ? [2] : [0],
          speed: 7,
          play: true,
          loop: false
        },
        {
          name: "hide",
          sequence: [4],
          speed: 4,
          play: false,
          loop: false
        },
        {
          name: "hover",
          sequence: momTL ? [3] : [1],
          speed: 4,
          play: false,
          loop: false
        },
        {
          name: "close",
          sequence: [4],
          speed: 4,
          play: false,
          loop: false
        }
      ],
      fixedToCamera: true,
      physics: "ARCADE",
      collideWorldBounds: true,
      onInputDown(self) {
        th.click(self);
      }
    });
    return backbutton;
  },
  openFrom: app.config.dialogue.openFrom,
  getTextWidth(hasPortrait) {
    if (app.stateManager.combat) {
      return hasPortrait ? 350 : 490;
    }
    return hasPortrait ? 500 : 630;
  },
  styles: {
    basic: {
      font: `${defaultFontSize - 1}px ${app.config.defaultfont}`,
      fill: "#fff",
      align: "left",
      wordWrap: true
    },
    credits: {
      font: `${defaultFontSize}px ${app.config.defaultfont}`,
      fill: "#fff",
      align: "center",
      wordWrap: false
    },
    speech: {
      font: `${defaultFontSize}px ${app.config.defaultfont}`,
      fill: "#fff",
      align: "left",
      wordWrap: true
    },
    stats: {
      font: `${defaultFontSize - 4}px ${app.config.defaultfont}`,
      fill: "#fff",
      align: "left",
      wordWrap: true
    },
    name: {
      font: `${defaultFontSize}px ${app.config.defaultfont}`,
      fill: "#ffffaa",
      align: "left",
      wordWrap: true
    },
    selectedchoice: {
      font: `${defaultFontSize - 1}px ${app.config.defaultfont}`,
      fill: "#aaaaff",
      align: "left",
      wordWrap: true
    },
    unselectedchoice: {
      font: `${defaultFontSize - 1}px ${app.config.defaultfont}`,
      fill: "#fff",
      align: "left",
      wordWrap: true
    },
    hover: {
      font: `${defaultFontSize}px ${app.config.defaultfont}`,
      fill: "#55ffff",
      align: "left",
      wordWrap: true
      // backgroundColor: '#1155dc'
    }
  },
  sounds: {
    hover: {
      sound: "lightclick",
      vol: 0.1
    },
    back: {
      sound: "unclick",
      vol: 0.3
    },
    init: {
      sound: "dialogue_appear",
      vol: 0.1
    },
    click: {
      sound: "confirm",
      vol: 0.1
    }
  },
  keywords: [
    "ask",
    "attack",
    "buy",
    "cancel",
    "items",
    "look",
    "move",
    "talk",
    "talk",
    "use",
    "purchase",
    "leave",
    "open",
    "run",
    "steal",
    "destination"
  ] // these keywords will remain highlighted
});

export default gornginDialogueConfig;
