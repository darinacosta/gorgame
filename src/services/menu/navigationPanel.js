import spriteClasses from "gorngin/sprites/spriteClasses";
import dialogueConfig from "gorngin/dialogue/config";
import config from "services/menu/config";
import cameraSvc from "gorngin/camera/cameraSvc";
import keyboardSvc from "gorngin/input/keyboardSvc";
import roomSvc from "gorngin/rooms/roomSvc";
import phaserWrapper from "gorngin/phaserWrapper";
import roomTransitionSvc from "gorngin/rooms/roomTransitionSvc";
import app, { game } from "services/app";

const svc = {};
svc.navTextGroup = null;

svc.navStyle = {
  font: "10px munroregular",
  fill: "#00ffff",
  align: "left"
};

svc.changeState = state => {
  function changeState() {
    app.stateManager.currentDialogue.callback = null;
    app.dialogueSvc.closeDialogueWindow(() => {
      roomTransitionSvc.changeRoom(state);
    });
  }
  function closeFrame() {
    if (app.fullscreenButton) {
      app.fullscreenButton.alpha = 0;
    }
    const currentRoom = roomSvc.getCurrentRoom();
    const roomTransition = currentRoom ? currentRoom.transition : "square";
    cameraSvc.transition(`${roomTransition}_out`).then(changeState);
  }
  closeFrame();
};

svc.getGridPositionByXY = args => {
  const xCols = 4;
  const yCols = 4;
  const paddingY = 4;
  const paddingX = 3;
  const coords = args.coords;
  const width = args.width;
  const height = args.height;
  const panelWidth = width / xCols;
  const panelHeight = height / yCols;
  const pos = {
    x: panelWidth * coords[0] + paddingX,
    y: panelHeight * coords[1] + paddingY + coords[1]
  };
  if (coords[0] > 3 || coords[1] > 3) {
    console.log(
      " ----- > panel navigation error: coords",
      coords,
      "out of bounds"
    );
  }
  return pos;
};

svc.getGridPositions = args => {
  const panelWidth = args.panelWidth;
  const panelHeight = args.panelHeight;
  const buffer = args.buffer;
  const panelPositions = {
    right: {
      x: args.width - panelWidth - buffer,
      y: args.height / 2 - panelHeight / 2
    },
    topright: {
      x: args.width - panelWidth - buffer,
      y: buffer
    },
    bottomright: {
      x: args.width - panelWidth - buffer,
      y: args.height - panelHeight - buffer
    },
    left: {
      x: buffer,
      y: args.height / 2 - panelHeight / 2
    },
    topleft: {
      x: buffer,
      y: buffer
    },
    bottomleft: {
      x: buffer,
      y: args.height - panelHeight - buffer
    },
    top: {
      x: args.width / 2 - panelWidth / 2,
      y: buffer
    },
    center: {
      x: args.width / 2 - panelWidth / 2,
      y: args.height / 2 - panelHeight / 2
    },
    bottom: {
      x: args.width / 2 - panelWidth / 2,
      y: args.height - panelHeight - buffer
    },
    up: {
      x: args.width / 2 - panelWidth / 2,
      y: buffer
    },
    down: {
      x: args.width / 2 - panelWidth / 2,
      y: args.height - panelHeight - buffer
    }
  };
  return panelPositions;
};

svc.addMapPanel = args => {
  const position =
    args.directionObject.position || args.directionObject.direction;
  const panelWidth = args.panelWidth;
  const panelHeight = args.panelHeight;
  const buffer = 5;
  const directionObject = args.directionObject;
  let coords = null;
  if (position instanceof Array) {
    coords = svc.getGridPositionByXY({
      width: args.width,
      height: args.height,
      coords: position,
      buffer,
      panelWidth,
      panelHeight
    });
  } else {
    const panelPositions = svc.getGridPositions({
      width: args.width,
      height: args.height,
      buffer,
      panelWidth,
      panelHeight
    });
    coords = panelPositions[position];
  }
  const boundary = game.add.graphics(0, 0);
  boundary.lineStyle(1, 0x5555ff, 1);
  boundary.beginFill(0xffffff);
  boundary.drawRect(0, 0, panelWidth, panelHeight);
  boundary.alpha = 0;

  const x = args.x + coords.x;
  const y = args.y + coords.y;
  const panel = new spriteClasses.Sprite({
    x,
    y,
    autoScale: false,
    img: boundary.generateTexture(),
    statevars: {
      name: "",
      callback: "",
      type: "navigation"
    }
  });

  panel.tint = svc.config.color.panel;

  if (directionObject) {
    const text = phaserWrapper.add.text(
      args.x + args.width / 2,
      svc.config.currentMap === "horizontal"
        ? args.y - 3
        : args.y + args.height + 10,
      directionObject.name,
      svc.navStyle
    );
    text.anchor.setTo(0.5, 0.5);
    text.alpha = 0;

    const onInputOver = () => {
      // @TODO: create single hover sound effect application wide
      /*
      game.sound.play(
        dialogueConfig.sounds.hover.sound,
        dialogueConfig.sounds.hover.vol,
        false
      );
      */
      svc.navTextGroup.callAll("alpha", 0);
      svc.previousStateText.alpha = 0;
      text.alpha = 1;
      panel.tint = svc.config.color.highlight;
    };

    const onInputOut = () => {
      text.alpha = 0;
      svc.previousStateText.alpha = 1;
      panel.tint = svc.config.color.panel;
    };

    const onInputDown = () => {
      if (directionObject) {
        svc.previouslySelectedState = directionObject;
        svc.changeState(directionObject.state);
      }
    };

    panel.inputEnabled = true;
    panel.input.useHandCursor = true;
    panel.input.priorityID = 1;

    panel.statevars.onInputDown = onInputDown;
    panel.statevars.onInputOver = onInputOver;
    panel.statevars.onInputOut = onInputOut;
    panel.events.onInputOver.add(onInputOver);
    panel.events.onInputOut.add(onInputOut);
    panel.events.onInputDown.add(onInputDown);

    keyboardSvc.registerItem({
      type: "navigation",
      item: panel,
      x,
      y,
      onInputDown,
      onInputOver,
      onInputOut
    });

    svc.navTextGroup.add(text);
    svc.navGroup.add(text);
  }
  svc.navGroup.add(panel);
};

svc.initGridNav = directionObjects => {
  svc.navGroup = phaserWrapper.add.group("navGroup");
  svc.navTextGroup = phaserWrapper.add.group("navTextGroup");
  svc.config = config.getConfig();
  const width = svc.config.width;
  const height = svc.config.height;
  const panelWidth = svc.config.panelWidth;
  const panelHeight = svc.config.panelHeight;
  const x = svc.config.x;
  const y = svc.config.y;
  /*
  const boundary = game.add.graphics(0, 0);
  boundary.lineStyle(1, 0xffffff, 1);
  boundary.drawRect(
    svc.config.x,
    svc.config.y,
    svc.config.width,
    svc.config.height
  );
  boundary.alpha = 0;
  svc.navGroup.add(boundary);
  */

  let previousStateName = "";
  if (app.stateManager.currentStateName) {
    previousStateName = app.stateManager.currentStateName;
  }
  svc.previousStateText = phaserWrapper.add.text(
    x + width / 2,
    svc.config.currentMap === "horizontal" ? y - 3 : y + height + 10,
    previousStateName,
    svc.navStyle
  );
  svc.previousStateText.alpha = 1;
  svc.previousStateText.anchor.setTo(0.5, 0.5);
  svc.navGroup.add(svc.previousStateText);

  for (let i = 0; i < directionObjects.length; i += 1) {
    console.log("XXXXXX", x);
    svc.addMapPanel({
      x,
      y,
      width,
      height,
      panelWidth,
      panelHeight,
      directionObject: directionObjects[i]
    });
  }
  return svc.navGroup;
};

svc.initCompassNav = (x, y, directionObjects) => {
  const directions = ["up", "down", "left", "right"];
  svc.navGroup = phaserWrapper.add.group("navGroup");
  svc.navTextGroup = phaserWrapper.add.group("navText");
  for (let i = 0; i < directions.length; i += 1) {
    let directionObj = null;
    for (let k = 0; k < directionObjects.length; k += 1) {
      if (directionObjects[k].direction === directions[i]) {
        directionObj = directionObjects[k];
      }
    }
    svc.generateCompassNavButton(x, y, directionObj, directions[i]);
  }
  return svc.navGroup;
};

svc.initNav = directionObjects => svc.initGridNav(directionObjects);

export default svc;
