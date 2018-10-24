import Room from "gorngin/rooms/Room";

export default class Bedroom extends Room {
  displayName = "Home";
  theme = "highway";
  border = true;
  spritesheets = [];
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
  roomDidStart() {
    const testGroup = window.scene.add.group("test");
    const testGroup2 = window.scene.add.group("test2");
    testGroup2.add(testGroup);
  }
}
