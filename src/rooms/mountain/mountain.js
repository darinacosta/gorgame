import Birds from "gorngin/traffic/Birds";
import Room from "gorngin/rooms/Room";
import cameraSvc from "gorngin/camera/cameraSvc";

export default class Gasstation extends Room {
  theme = "algerianstarburst";
  deferMenu = true;

  generateBirds = () => {
    const birds = new Birds({
      number: 5,
      y: 5,
      timeout: 600
    });
    this.onscreen.birdGroup.addMultiple(birds.init());
  };
  transition = "fade";

  spritesheets = [
    "microwhite",
    "texas_sky",
    "texas_city",
    "texas_foreground",
    "texas_fog",
    "bird"
  ];
  render() {
    return ["sky", "city", "birdGroup", "fog", "foreground", "emitterRight"];
  }
  state = {};
  roomDidStart() {
    this.generateBirds();
    setTimeout(() => {
      this.onscreen.foreground.play("crawl").onComplete.add(() => {
        this.onscreen.foreground.play("hold");
      });
    }, 2000);
  }
}
