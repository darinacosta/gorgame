import Room from "gorngin/rooms/Room";
import spriteSvc from "gorngin/sprites/spriteSvc";

export default class Bedroom extends Room {
  displayName = "Home";
  theme = "highway";
  border = true;
  spritesheets = [];
  directions = [
    {
      direction: [3, 2],
      name: "Living room",
      state: "livingroom"
    }
  ];
  hotspots = [
    {
      id: "jacket",
      x: 163,
      y: 181,
      width: 100,
      height: 100,
      key: ["look-jacket", "take-jacket"]
    },
    {
      x: 73,
      y: 108,
      width: 90,
      height: 90,
      onInputOver: () => {
        // call on input over behavior
      },
      onInputOut: () => {
        // call on input out behavior
      },
      key: ["look-computer", "use-computer"]
    },
    {
      x: 401,
      y: 75,
      width: 150,
      height: 150,
      key: "look-window"
    },
    {
      x: 613,
      y: 98,
      width: 150,
      height: 150,
      key: "look-photographs"
    },
    {
      x: 20,
      y: 35,
      width: 100,
      height: 100,
      key: "look-monkey"
    },
    {
      x: 120,
      y: 25,
      width: 100,
      height: 100,
      key: "look-shelf"
    }
  ];
  transition = "horizontal";
  dialogueOrientation = "horizontal";
  dialogueInitElement = "init";

  state = {
    showJacket: true
  };

  takejacket = () => {
    // remove jacket from hotspots
    this.setState({ showJacket: false });
  };

  roomWillUpdate(nextState) {
    if (this.state.showJacket && !nextState.showJacket) {
      spriteSvc.play("bedroom", "nojacket");
    }
  }
  roomDidUpdate() {}
  /*
  render() {
    return [
      "sky",
      "birds",
      "bedroom",
      "bedroomcomputerscreen",
      "youandmillion",
      "graphics",
      "graphics2"
    ];
  }
  */
}
