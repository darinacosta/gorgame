import Birds from "gorngin/traffic/Birds";
import Room from "gorngin/rooms/Room";

export default class Gasstation extends Room {
  theme = "algerianstarburst";
  generateBirds = () => {
    const birds = new Birds({
      number: 5,
      y: 5,
      timeout: 600
    });
    this.onscreen.birdGroup.addMultiple(birds.init());
  };
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
  }
}
