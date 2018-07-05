import "services/assetConfig";
import "services/dialogueConfig";
import "services/audioConfig";
import "services/cameraConfig";
import "services/inventoryConfig";
import "services/portraitConfig";
import "services/combatsystem/enemyConfig";

import roomSvc from "gorngin/rooms/roomSvc";
import stateManager from "services/stateManager";
import { game } from "services/app";

document.addEventListener("DOMContentLoaded", () => {
  game.onBooted(() => {
    roomSvc.loadRooms();

    stateManager.applyUrlParams();
    game.state.start("boot");
  });
  if (process.env.NODE_ENV === "production") {
    // FIXME This probably belongs in a service
    document.addEventListener("contextmenu", e => e.preventDefault());
  } else {
    window.setRoom = state => game.state.start("loadState", true, true, state);
    window.addItems = (...items) => stateManager.addInventoryItems(items);
  }
});
