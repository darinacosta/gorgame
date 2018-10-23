import "services/assetConfig";
import "services/dialogueConfig";
import "services/audioConfig";
import "services/cameraConfig";
import "services/inventoryConfig";
import "services/portraitConfig";

import roomSvc from "gorngin/rooms/roomSvc";
import stateManager from "services/stateManager";
import gorgame from "gorngin/gorgame/gorgame";

document.addEventListener("DOMContentLoaded", () => {
  gorgame.onBooted(() => {
    roomSvc.loadRooms();
    stateManager.applyUrlParams();
    gorgame.scene.start("boot");
  });
  if (process.env.NODE_ENV === "production") {
    // FIXME This probably belongs in a service
    document.addEventListener("contextmenu", e => e.preventDefault());
  } else {
    window.setRoom = state =>
      gorgame.scene.start("loadState", true, true, state);
    window.addItems = (...items) => stateManager.addInventoryItems(items);
  }
});
