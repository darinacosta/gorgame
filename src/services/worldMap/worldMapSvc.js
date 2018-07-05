import spriteClasses from "gorngin/sprites/spriteClasses";
import norcoLocations from "services/worldMap/norcoLocations";
import newOrleansLocations from "services/worldMap/newOrleansLocations";
import locationHelpers from "services/worldMap/locationHelpers";
import inventorySvc from "gorngin/inventory/inventorySvc";
import keyboardSvc from "gorngin/input/keyboardSvc";
import dialogueConfig from "gorngin/dialogue/config";
import Dialogue from "gorngin/dialogue/Dialogue";
import cameraSvc from "gorngin/camera/cameraSvc";
import phaserWrapper from "gorngin/phaserWrapper";
import app, { game } from "services/app";

const svc = {};

svc.mapEnabled = false;
app.mapEnabled = false;
svc.childMapsEnabled = false;
svc.pinIndex = -1;
svc.mapOutOfFocus = true;
svc.locations = null;
svc.verticalDialogueMap = false;

svc.mapEnabledAndFocused = () =>
  svc.mapEnabled &&
  app.mapSelections &&
  (app.mapSelections[svc.pinIndex] && app.mapSelections[svc.pinIndex].pin) &&
  !svc.mapOutOfFocus;

svc.mapEnabledAndOutOfFocus = () =>
  svc.mapEnabled &&
  app.mapSelections &&
  (app.mapSelections[svc.pinIndex] && app.mapSelections[svc.pinIndex].pin) &&
  svc.mapOutOfFocus;

svc.set = (attribute, value) => {
  svc[attribute] = value;
};

svc.getInitMapText = () =>
  app.currentTimeline === "mom"
    ? [
        {
          title: "init",
          tags: "nofollowupicon",
          body: "New Orleans"
        }
      ]
    : [
        {
          title: "init",
          tags: "nofollowupicon",
          body: "Norco, Louisiana"
        }
      ];

svc.getLocations = () => {
  const newLocs = [];
  const locs =
    app.currentTimeline === "mom"
      ? newOrleansLocations.locations
      : norcoLocations.locations;
  for (let i = 0; i < locs.length; i += 1) {
    newLocs.push(locationHelpers.getLocationObject(locs[i]));
  }
  return newLocs;
};

svc.incrementPin = () => {
  svc.mapOutOfFocus = false;
  const len = app.mapSelections.length;
  if (svc.pinIndex === len - 1 || svc.pinIndex === -1) {
    svc.pinIndex = 0;
  } else {
    svc.pinIndex += 1;
  }
};

svc.decrementPin = () => {
  svc.mapOutOfFocus = false;
  const len = app.mapSelections.length;
  if (svc.pinIndex <= 0) {
    svc.pinIndex = len - 1;
  } else {
    svc.pinIndex -= 1;
  }
};

svc.getLocationObj = location => {
  for (let i = 0; i < svc.locations.length; i += 1) {
    if (svc.locations[i].state === location) {
      return svc.locations[i];
    }
  }
  return false;
};

svc.getParentLocationObj = location => {
  const childLocation = svc.getLocationObj(location);

  if (childLocation && childLocation.parent) {
    return svc.getLocationObj(childLocation.parent);
  }
  return false;
};

svc.hasParentLocation = location => {
  if (svc.getParentLocationObj(location) && svc.childMapsEnabled) {
    return true;
  }
  return false;
};

svc.initializeMapDialogue = () => {
  app.signals.destroyDialogue.dispatch();
  const dialogue = new Dialogue({
    elements: svc.getInitMapText()
  });
  dialogue.init().then(() => {
    if (dialogue.textAnimator.blocker.clicked) {
      app.menuSvc.defaultMenu(true, false);
    }
  });
};

// create a regional or a local map
svc.createMap = () => {
  /*
    if the frame is currently in a vertical orientation, switch it to horizontal
    before drawing the map. The animation is divided into two seperate animations
    so that the frame will close completely before the map gets drawn.
  */
  svc.verticalDialogueMap = dialogueConfig.get("currentMap") === "vertical";

  svc.drawMapAfterBorderTransition();
};

svc.drawMapAfterBorderTransition = verticalDialogueMap => {
  if (app.menuDisplayGroup) {
    svc.killMenuDisplayGroup();
    app.menuDisplayGroup.destroy();
    app.menuDisplayGroup = null;
    app.menuDisplayGroup = phaserWrapper.add.group("menuDisplayGroup");
  } else {
    app.menuDisplayGroup = phaserWrapper.add.group("menuDisplayGroup");
  }

  app.mapSelections = [];
  svc.mapEnabled = true;
  app.mapEnabled = true;
  svc.mapOutOfFocus = false;
  svc.locations = svc.getLocations();
  const th = {};
  const mapAnimationSequence =
    app.currentTimeline === "mom"
      ? [0]
      : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const grid = new spriteClasses.TileSprite({
    x: 0,
    y: 0,
    width: game.width + 50,
    height: 240,
    img: "dreamspacegrid1",
    allowGravity: false,
    scale: [1, 1],
    fixedToCamera: true,
    collideWorldBounds: true,
    parallax: false,
    autoScroll: [3, 0],
    statevars: {}
  });
  grid.alpha = app.currentTimeline === "mom" ? 0 : 1;
  app.menuDisplayGroup.add(grid);

  th.mapSprite = new spriteClasses.Sprite({
    x: 0,
    y: 0,
    img: app.currentTimeline === "mom" ? "neworleansmap" : "worldmap",
    animation: [
      {
        name: "default",
        sequence: mapAnimationSequence,
        speed: 5,
        play: true,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    allowGravity: false,
    scale: [1, 1],
    fixedToCamera: true,
    collideWorldBounds: true,
    parallax: false,
    statevars: {}
  });

  th.mapSprite.inputEnabled = true;

  th.mapToggle = new spriteClasses.Sprite({
    x: 52,
    y: 185,
    img: "maptoggle",
    animation: [
      {
        name: "regional",
        sequence: [9, 10, 11, 12, 13, 14, 15, 16],
        speed: 5,
        play: false,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    allowGravity: false,
    scale: [1, 1],
    fixedToCamera: true,
    anchor: 0.5,
    collideWorldBounds: true,
    parallax: false,
    statevars: {
      playing: "regional"
    }
  });
  th.mapToggle.alpha = 0; // app.currentTimeline === "mom" ? 0 : 1;
  th.mapToggle.animations.play("local");
  app.menuDisplayGroup.add(th.mapSprite);
  svc.generateLocationArrows("regional");
  app.menuDisplayGroup.add(th.mapToggle);
  app.menuDisplayGroup.alpha = verticalDialogueMap ? 1 : 0;
  if (!verticalDialogueMap) {
    game.add
      .tween(app.menuDisplayGroup)
      .to({ alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
    svc.initializeMapDialogue();
  }
};

svc.generateLocationArrows = () => {
  function generatePin(location) {
    let animSeq;
    const th = {};
    const rand = Math.random();
    th.state = location.state;
    th.locationState = location.state;
    if (location.current()) {
      animSeq = [6, 7, 8, 9, 10, 11];
    } else if (rand <= 0.2) {
      animSeq = [0, 1, 2, 3, 4, 5];
    } else if (rand > 0.2 && rand <= 0.4) {
      animSeq = [1, 2, 3, 4, 5, 0];
    } else if (rand > 0.4 && rand <= 0.7) {
      animSeq = [2, 3, 4, 5, 0, 1];
    } else {
      animSeq = [3, 4, 5, 0, 1, 2];
    }

    function onInputCurrentLocation() {
      return null;
    }

    th.locationarrow = new spriteClasses.Sprite({
      x: location.x,
      y: location.y,
      img: "locationarrows",
      animation: [
        {
          name: "hover",
          sequence: [12, 13, 14, 15, 16, 17],
          speed: 5,
          play: false,
          loop: true
        },
        {
          name: "default",
          sequence: animSeq,
          speed: 5,
          play: true,
          loop: true
        }
      ],
      disableAnimationForMobile: true,
      allowGravity: false,
      scale: [1, 1],
      anchor: 0.5,
      fixedToCamera: true,
      collideWorldBounds: true,
      inputEnabled: true,
      parallax: false,
      statevars: {
        img: location.img,
        map: location.map
      }
    });
    th.locationarrow.anchor.setTo(0.5, 0.5);

    const onInputDown = location.current()
      ? onInputCurrentLocation
      : location.onInputDown;
    const onInputOver = () => {
      location.onInputOver(th.locationarrow);
    };
    const onInputOut = () => {
      svc.defaultMapPins(th.locationarrow);
    };

    th.locationarrow.inputEnabled = true;
    th.locationarrow.input.priorityID = 2;

    th.locationarrow.events.onInputOver.add(onInputOver);
    th.locationarrow.events.onInputOut.add(onInputOut);
    th.locationarrow.events.onInputDown.add(onInputDown);

    keyboardSvc.registerItem({
      type: "map",
      item: th.locationarrow,
      x: location.x,
      y: location.y,
      onInputDown,
      onInputOver,
      onInputOut
    });

    const locationObj = location;
    locationObj.pin = th.locationarrow;
    app.mapSelections.push(locationObj);
    app.menuDisplayGroup.add(th.locationarrow);
  }

  const mapStateObject = svc.getParentLocationObj(app.currentState);
  const mapState = mapStateObject ? mapStateObject.state : false;
  const accessLocations = inventorySvc.getAccessItems();

  for (let i = 0; i < svc.locations.length; i += 1) {
    if (
      (svc.locations[i].map === "regional" ||
        (mapState &&
          svc.locations[i].map === mapState &&
          svc.childMapsEnabled === true)) &&
      accessLocations.indexOf(svc.locations[i].state) > -1
    ) {
      generatePin(svc.locations[i]);
    }

    app.mapSelections.sort((a, b) => b.x - a.x);
  }
};

svc.defaultMapPins = pin => {
  svc.mapOutOfFocus = true;
  pin.animations.play("default");
  app.signals.destroyDialogue.dispatch();
  const dialogue = new Dialogue({
    elements: svc.getInitMapText()
  });
  dialogue.init().then(() => {
    if (dialogue.textAnimator.blocker.clicked) {
      app.menuSvc.defaultMenu(true, false);
    }
  });
};

svc.resetMapData = () => {
  svc.mapEnabled = false;
  app.mapEnabled = false;
  svc.pinIndex = -1;
  svc.mapOutOfFocus = true;
  app.mapSelections = [];
};

svc.killMenuDisplayGroup = () => {
  if (app.menuDisplayGroup) {
    app.menuDisplayGroup.callAll("kill");
    app.menuDisplayGroup.callAll("destroy");
  }
  app.menuDisplayGroup.removeAll(true);
};

svc.tweenMenuDisplayGroup = () =>
  game.add
    .tween(app.menuDisplayGroup)
    .to({ alpha: 0 }, 300, Phaser.Easing.Linear.None, true);

svc.killMap = () => {
  console.log("!!!!KILL MAP");
  svc.mapEnabled = false;
  app.mapEnabled = false;
  svc.pinIndex = -1;
  svc.mapOutOfFocus = true;
  app.mapSelections = [];
  keyboardSvc.clearRegisteredItems();
  if (svc.verticalDialogueMap) {
    svc.killMenuDisplayGroup();
  } else if (app.menuDisplayGroup) {
    const tweenOut = svc.tweenMenuDisplayGroup();
    tweenOut.onComplete.add(svc.killMenuDisplayGroup);
  }
};

app.worldMapSvc = svc;
export default svc;
