import gornginCameraConfig from "gorngin/camera/config";
import gorgame from "gorngin/gorgame/gorgame";

const defaultBorderAnimations = [
  /*
  horizontally oriented frame
  */
  {
    name: "horizontal_no_portrait",
    sequence: [26],
    speed: 5,
    play: false,
    loop: false
  },
  {
    name: "horizontal_with_portrait",
    sequence: [31],
    speed: 5,
    play: false,
    loop: false
  },
  {
    name: "horizontal_open_portrait",
    sequence: [26, 27, 28, 29, 30, 31],
    speed: 22,
    play: false,
    loop: false
  },
  {
    name: "horizontal_close_portrait",
    sequence: [31, 30, 29, 28, 27, 26],
    speed: 22,
    play: false,
    loop: false
  },
  {
    name: "horizontal_open",
    sequence: [0, 1, 18, 19, 20, 21, 22, 23, 24, 25],
    speed: 17,
    play: false,
    loop: false
  },
  {
    name: "horizontal_close",
    sequence: [25, 24, 23, 22, 21, 20, 19, 18],
    speed: 17,
    play: false,
    loop: false
  },

  /*
  Vertical < - > horizontal transitions
  */

  {
    name: "vertical_to_horizontal_start",
    sequence: [9, 8, 7, 5, 4, 3, 2],
    speed: 17,
    play: false,
    loop: false
  },

  {
    name: "vertical_to_horizontal_finish",
    sequence: [38, 37, 36, 35, 34, 33, 32, 26],
    speed: 17,
    play: false,
    loop: false
  },

  {
    name: "horizontal_to_vertical_start",
    sequence: [26, 32, 33, 34, 35, 36, 37, 38],
    speed: 17,
    play: false,
    loop: false
  },

  {
    name: "horizontal_to_vertical_finish",
    sequence: [2, 3, 4, 5, 6, 7, 8, 9],
    speed: 17,
    play: false,
    loop: false
  },

  /*
  vertically oriented frame
  */
  {
    name: "vertical_no_portrait",
    sequence: [9],
    speed: 5,
    play: false,
    loop: false
  },
  {
    name: "vertical_with_portrait",
    sequence: [11],
    speed: 5,
    play: false,
    loop: false
  },
  {
    name: "vertical_open_portrait",
    sequence: [9, 10, 11],
    speed: 10,
    play: false,
    loop: false
  },
  {
    name: "vertical_close_portrait",
    sequence: [11, 10, 9],
    speed: 10,
    play: false,
    loop: false
  },
  {
    name: "vertical_highlight_portrait",
    sequence: [12, 13, 14, 13],
    speed: 5,
    play: false,
    loop: true
  },
  {
    name: "vertical_highlight_text",
    sequence: [15, 16, 17, 11],
    speed: 5,
    play: false,
    loop: false
  },
  {
    name: "vertical_open",
    sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    speed: 15,
    play: false,
    loop: false
  },
  {
    name: "vertical_close",
    sequence: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    speed: 17,
    play: false,
    loop: false
  }
];

const momBorderAnimations = [
  {
    name: "horizontal_no_portrait",
    sequence: [16],
    speed: 5,
    play: false,
    loop: false
  },
  {
    name: "horizontal_open",
    sequence: [33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 16],
    speed: 15,
    play: false,
    loop: false
  },
  {
    name: "horizontal_close",
    sequence: [16, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    speed: 15,
    play: false,
    loop: false
  },
  {
    name: "horizontal_with_portrait",
    sequence: [22],
    speed: 5,
    play: false,
    loop: false
  },
  {
    name: "horizontal_close_portrait",
    sequence: [22, 21, 20, 19, 18, 17, 16],
    speed: 25,
    play: false,
    loop: false
  },
  {
    name: "horizontal_open_portrait",
    sequence: [16, 17, 18, 19, 20, 21, 22],
    speed: 25,
    play: false,
    loop: false
  },
  {
    name: "horizontal_highlight_text",
    sequence: [1, 2, 3, 4, 5, 0],
    speed: 7,
    play: false,
    loop: false
  },
  {
    name: "horizontal_highlight_portrait",
    sequence: [6, 7, 8, 9, 10, 0, 10, 9, 8, 7, 6],
    speed: 7,
    play: false,
    loop: true
  },
  {
    name: "horizontal_highlight_main",
    sequence: [11, 12, 13, 14, 15, 0, 15, 14, 13, 12],
    speed: 7,
    play: false,
    loop: true
  }
];

const defaultBorder = () => {
  const frame = gorgame.add.sprite({
    x: 0,
    y: 0,
    img: "landscapeframe",
    animation: defaultBorderAnimations
  });
  return frame;
};

gornginCameraConfig.setConfig({
  defaultForegroundElements: [
    "blackscreen",
    "combatBackgroundGroup",
    "enemyGroup",
    "notificationGroup",
    "hotspotGroup",
    "dialoguePortraitGroup",
    "menuDisplayGroup",
    "menuTextGroup",
    "itemGroup",
    "dialogueBorder",
    "textBox",
    "journalGroup",
    "dialogueGroup",
    "menuGroup",
    "dialogueTextGroup",
    "followupIcon",
    "combatGroup",
    "fadeSprite",
    "transitionSprite",
    "coverGroup",
    "loadGroup",
    "fullscreenButton"
  ],
  borders: {
    getDefault: defaultBorder,
    getLandscape() {
      const frame = gorgame.add.sprite({
        x: 0,
        y: 0,
        img: "landscapeframe",
        animation: defaultBorderAnimations,
        allowGravity: false,
        fixedToCamera: false,
        physics: "ARCADE",
        collideWorldBounds: true,
        inputEnabled: false
      });
      return frame;
    },
    getMomBorder() {
      const frame = gorgame.add.sprite({
        x: 0,
        y: 0,
        img: "landscapeframe",
        animation: defaultBorderAnimations,
        allowGravity: false,
        fixedToCamera: false,
        physics: "ARCADE",
        collideWorldBounds: true,
        inputEnabled: false
      });
      return frame;
    },
    getMenu() {
      return gorgame.add.sprite({
        x: 0,
        y: 0,
        img: "landscapeframeportrait",
        allowGravity: false,
        fixedToCamera: false,
        physics: "ARCADE",
        collideWorldBounds: true,
        inputEnabled: false,
        animation: [
          {
            name: "default",
            sequence: [0],
            speed: 5,
            play: true,
            loop: true
          },
          {
            name: "selectDialogue",
            sequence: [1, 2, 3, 4, 5, 0],
            speed: 7,
            play: false,
            loop: false
          },
          {
            name: "selectMenu",
            sequence: [6, 7, 8, 9, 10, 0, 10, 9, 8, 7, 6],
            speed: 7,
            play: false,
            loop: true
          },
          {
            name: "selectMap",
            sequence: [11, 12, 13, 14, 15, 0, 15, 14, 13, 12],
            speed: 7,
            play: false,
            loop: true
          }
        ]
      });
    },
    getFullscreen() {
      return gorgame.add.sprite({
        x: 0,
        y: 0,
        img: "fullscreenframe",
        allowGravity: false,
        fixedToCamera: false,
        physics: "ARCADE",
        collideWorldBounds: true,
        inputEnabled: false
      });
    }
  }
});
export default gornginCameraConfig;
