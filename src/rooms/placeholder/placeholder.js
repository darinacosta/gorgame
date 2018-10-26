import Room from "gorngin/rooms/Room";

export default class Bedroom extends Room {
  displayName = "Home";
  theme = "highway";
  width = 400;
  border = true;
  spritesheets = ["nightcliniclobby"];
  directions = [];
  hotspots = [
    {
      x: 478,
      y: 23,
      width: 150,
      height: 150,
      info: "Window",
      key: "look-window"
    }
  ];
  transition = "horizontal";
  dialogueOrientation = "horizontal";
  dialogueInitElement = "init";
  roomDidStart() {}
}
