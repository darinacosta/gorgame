import Room from "gorngin/rooms/Room";
import phaserWrapper from "gorngin/phaserWrapper";
import trafficSvc from "gorngin/traffic/trafficSvc";
import { game } from "gorngin/app";
import cameraSvc from "gorngin/camera/cameraSvc";

export default class Gasstation extends Room {
  theme = "algerianstarburst";
  spritesheets = ["highway", "highway_wizard", "highway_title", "trafficmodel"];
  state = {};
  transition = "fade";
  deferMenu = true;
  generateTraffic = () => {
    this.onscreen.trafficGroup.addMultiple(
      trafficSvc.generateTraffic({
        number: 1,
        y: 50,
        scale: 1.08,
        leftBound: 20,
        rightBound: game.width + 75,
        timeout: 6000
      })
    );
  };
  roomDidStart() {
    phaserWrapper.add
      .tween({
        sprite: this.onscreen.wizard,
        tween: { x: game.width },
        time: 15000
      })
      .onComplete.add(() => {
        cameraSvc.transition("fade_out").then(() => {
          game.state.start("loadState", true, false, "mountain");
        });
      });
    phaserWrapper.add
      .tween({
        sprite: this.onscreen.title,
        tween: { alpha: 1 },
        time: 3000
      })
      .yoyo(true, 1000);
    // this.generateTraffic();
  }
  render() {
    return ["highway", "trafficGroup", "title", "wizard"];
  }
}
