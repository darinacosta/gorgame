import "services/inventoryConfig";
import "services/assetConfig";
import "services/dialogueConfig";
import "services/audioConfig";
import "services/cameraConfig";
import "services/portraitConfig";

import roomSvc from "gorngin/rooms/roomSvc";
import stateManager from "services/stateManager";
import gorgame from "gorngin/gorgame/gorgame";

document.addEventListener("DOMContentLoaded", () => {
  gorgame.onBooted(() => {
    roomSvc.loadRooms();

    function resize() {
      var canvas = gorgame.getCanvas(),
        width = window.innerWidth,
        height = window.innerHeight;
      var wratio = width / height,
        ratio = canvas.width / canvas.height;

      if (wratio < ratio) {
        canvas.style.width = width + "px";
        canvas.style.height = width / ratio + "px";
      } else {
        canvas.style.width = height * ratio + "px";
        canvas.style.height = height + "px";
      }
    }

    function create() {
      window.addEventListener("resize", resize);
      resize();
    }

    create();

    gorgame.scene.start("boot");
  });
  if (process.env.NODE_ENV === "production") {
    // FIXME This probably belongs in a service
    document.addEventListener("contextmenu", e => e.preventDefault());
  } else {
    window.setRoom = state => gorgame.scene.start("loadState", state);
    window.addItems = (...items) => stateManager.addInventoryItems(items);
  }
});
