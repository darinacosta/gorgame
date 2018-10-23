import Room from "gorngin/rooms/Room";

export default class Bedroom extends Room {
  displayName = "Home";
  theme = "highway";
  border = true;
  spritesheets = [];
  directions = [];
  hotspots = [];
  transition = "horizontal";
  dialogueOrientation = "horizontal";
  dialogueInitElement = "init";
  roomDidStart() {
    console.log("TEST");
  }
}
