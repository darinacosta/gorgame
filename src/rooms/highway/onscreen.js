import phaserWrapper from "gorngin/phaserWrapper";
import spriteClasses from "gorngin/sprites/spriteClasses";
import { game } from "gorngin/app";

const svc = {};
svc.get = () => {
  const onscreen = {};

  onscreen.highway = new spriteClasses.Sprite({
    x: 0,
    y: 0,
    width: game.width,
    height: game.height,
    img: "highway"
  });

  onscreen.wizard = new spriteClasses.Sprite({
    x: 0,
    y: 0,
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    width: game.width,
    height: game.height,
    img: "highway_wizard"
  });

  onscreen.title = new spriteClasses.Sprite({
    x: 0,
    y: 0,
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    width: game.width,
    height: game.height,
    img: "highway_title"
  });

  onscreen.title.alpha = 0;

  onscreen.birdGroup = phaserWrapper.add.group();
  onscreen.trafficGroup = phaserWrapper.add.group();

  return onscreen;
};
export default svc;
