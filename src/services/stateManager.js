import configHelpers from "gorngin/configHelpers";
import inventorySvc from "gorngin/inventory/inventorySvc";

const stateManager = {
  currentDialogue: {},
  events: {
    highway: {
      test() {}
    }
  }, // story events
  choicesSelected: [],
  puc: {}, // player update control
  foreground: [], // active objects to be added to foreground group
  currentState: "",
  stateConfigs: {},
  returnToVerticalOrientation: false,
  commonAssets: {
    sprites: {
      defaultStates: [
        "items",
        "fullscreen",
        "blackscreen",
        "backbutton",
        "bird",
        "gridtransition",
        "dialoguecontinue",
        "landscapeframe",
        "journal",
        "journaldrawings",
        "menulandscape",
        "menuicons",
        "optionselect",
        "hotspot",
        "landscapeframeportrait",
        "navframe",
        "navframe_horizontal",
        "placeholderportraitmom",
        "transparency",
        "party_portraits",
        "characterportraitframe",
        "million",
        "lucky",
        "locationarrows",
        "menuselectioncover",
        "worldmap",
        "worldmaplocations",
        "maptoggle",
        "mapsidebar",
        "dreamspacegrid1"
      ],
      momStates: [
        "items",
        "fullscreen",
        "backbutton",
        "dialoguecontinue",
        "menuselectioncover",
        "worldmaplocations",
        "dreamspacegrid1",
        "navframe",
        "hotspot",
        "optionselect",
        "navframe_horizontal",
        "locationarrows",
        "landscapeframe",
        "neworleansmap",
        "menuicons",
        "placeholderportraitmom",
        "kiki"
      ],
      combat: ["battlegrid"]
    },
    sounds: [
      "bling",
      "bloop",
      "blast",
      "hit",
      "lightclick",
      "click",
      "confirm",
      "cameraopen",
      "cameraclose",
      "optionmenu",
      "unclick",
      "dialogue_appear",
      "dialogue_robit",
      "genericdialogue"
    ]
  }
};

stateManager.addInventoryItems = items => {
  for (const item of items) {
    inventorySvc.gainPossession(item);
  }
};

stateManager.applyUrlParams = () => {
  if (configHelpers.getURLParameter("items")) {
    const items = configHelpers.getURLParameter("items").split(",");
    stateManager.addInventoryItems(items);
  }
};

stateManager.removeFromInv = item => {
  inventorySvc.losePossession(item);
};

stateManager.getStateConfig = state => stateManager.stateConfigs[state];

stateManager.setStateConfig = cfg => {
  if (!cfg) {
    return;
  }
  const config = cfg;
  if (config.timeline === "mom") {
    config.spritesheets = stateManager.commonAssets.sprites.momStates.concat(
      config.spritesheets
    );
  } else {
    config.spritesheets = stateManager.commonAssets.sprites.defaultStates.concat(
      config.spritesheets
    );
  }
  config.audio = config.audio.concat(stateManager.commonAssets.sounds);
  stateManager.stateConfigs[config.state] = config;
};

// Save functionality
stateManager.saveGame = slot => {
  if (!localStorage.getItem("norcofarawaylights")) {
    localStorage.setItem("norcofarawaylights", "{}");
  }
  const gorLocalStorage = JSON.parse(
    localStorage.getItem("norcofarawaylights")
  );
  gorLocalStorage[`slot_${slot}`] = {
    inv: stateManager.inv
  };

  stateManager.initSaveText = () => {
    const saveText = game.add.text(600, 370, "SAVING...", {
      font: "15px munroregular",
      fill: "#ffff00",
      align: "center"
    });

    saveText.fixedToCamera = true;
    saveText.cameraOffset.setTo(600, 370);
    saveText.anchor.set(0.5);
    saveText.alpha = 0;
    const saveTextTween = game.add
      .tween(saveText)
      .to({ alpha: 1 }, 1700, Phaser.Easing.Linear.None, true);
    saveTextTween.onComplete.add(() => {
      game.add
        .tween(saveText)
        .to({ alpha: 0 }, 1700, Phaser.Easing.Linear.None, true);
    });
  };

  localStorage.setItem("norcofarawaylights", JSON.stringify(gorLocalStorage));
  stateManager.initSaveText();
};

stateManager.getSaveObj = slot => {
  const gorLocalStorage = JSON.parse(
    localStorage.getItem("norcofarawaylights")
  );
  if (gorLocalStorage) {
    return gorLocalStorage[`slot_${slot}`];
  }
  return false;
};
stateManager.loadGame = slot => {
  const gorLocalStorage = JSON.parse(
    localStorage.getItem("norcofarawaylights")
  );
  if (gorLocalStorage[`slot_${slot}`]) {
    stateManager.inv = gorLocalStorage[`slot_${slot}`].inv;
  }
};

stateManager.puc = {};

export default stateManager;
