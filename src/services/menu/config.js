import dialogueConfig from "gorngin/dialogue/config";
import { game } from "gorngin/app";

const svc = {};
const config = {
  frameTint: "white"
};

svc.set = (k, v) => {
  config[k] = v;
};

svc.getYArray = (y, seperator) => {
  const ys = [];
  let iterator = 0;
  for (let i = 0; i < 4; i += 1) {
    ys.push(iterator - seperator);
    iterator -= seperator;
  }
  return ys;
};

svc.getXArray = (x, seperator) => {
  const xs = [];
  let iterator = 0;
  for (let i = 0; i < 4; i += 1) {
    xs.push(iterator - seperator);
    iterator -= seperator;
  }
  return xs;
};

svc.getConfig = () => {
  const horizontal = dialogueConfig.get("currentMap") === "horizontal";
  config.currentMap = dialogueConfig.get("currentMap");
  config.color = {
    default: 0x555555,
    panel: 0x55ffff,
    highlight: 0xffffff
  };
  config.width = horizontal ? 100 : 80;
  config.height = horizontal ? 80 : 100;
  config.panelWidth = horizontal ? 10 : 10;
  config.panelHeight = horizontal ? 10 : 10;
  config.x = horizontal ? game.width - 102 : 614;
  config.y = horizontal ? game.height - 80 : 270;

  config.border = {
    x: horizontal ? config.x - 50 : config.x - 70,
    y: horizontal ? config.y - 70 : config.y - 52
  };
  config.navFrame = {
    vertical: {
      x: game.width - 50,
      y: game.height / 2,
      img: "navframe"
    },
    horizontal: {
      x: game.width - 200,
      y: config.y + 32,
      img: "navframe_horizontal"
    },
    fullscreen: {
      x: game.width - 50,
      y: game.height / 2,
      img: "navframe"
    }
  };

  // menu items
  const verticalPaddingX = 17;
  const horizontalPaddingY = -14;
  const verticalYStart = config.y + 13;
  const verticalXStart = config.x + 13;
  const seperatorsVertical = svc.getYArray(config.y, 45);
  const seperatorsHorizontal = svc.getYArray(config.x, 45);

  const vertMap = {
    map: {
      x: config.x + config.width - verticalPaddingX,
      y: verticalYStart + seperatorsVertical[3]
    },
    items: {
      x: config.x + config.width - verticalPaddingX,
      y: verticalYStart + seperatorsVertical[2]
    },
    journal: {
      x: config.x + config.width - verticalPaddingX,
      y: verticalYStart + seperatorsVertical[1]
    },
    save: {
      x: config.x + config.width - verticalPaddingX,
      y: verticalYStart + seperatorsVertical[0]
    }
  };

  const menuItems = {
    vertical: vertMap,
    fullscreen: vertMap,
    horizontal: {
      map: {
        x: verticalXStart + seperatorsHorizontal[3],
        y: config.y + config.height + horizontalPaddingY
      },
      items: {
        x: verticalXStart + seperatorsHorizontal[2],
        y: config.y + config.height + horizontalPaddingY
      },
      journal: {
        x: verticalXStart + seperatorsHorizontal[1],
        y: config.y + config.height + horizontalPaddingY
      },
      save: {
        x: verticalXStart + seperatorsHorizontal[0],
        y: config.y + config.height + horizontalPaddingY
      }
    }
  };
  config.menuItems = menuItems[config.currentMap];
  return config;
};

export default svc;
