import spriteSvc from "gorngin/sprites/spriteSvc";
import { game } from "services/app";

const svc = {};
svc.get = () => {
  const onscreen = {};

  /*
  spriteSvc.add({
    x: 0,
    y,
    img: "bedroom",
    animation: [
      {
        name: "jacket",
        sequence: [0],
        speed: 4,
        play: true,
        loop: false
      },
      {
        name: "nojacket",
        sequence: [1],
        speed: 4,
        play: false,
        loop: false
      }
    ],
    allowGravity: false,
    fixedToCamera: false,
    physics: "ARCADE",
    collideWorldBounds: true,
    inputEnabled: false,
    scale: [1, 1],
    parallax: false,
    update() {},
    statevars: {}
  });
  */

  return onscreen;
};
export default svc;
