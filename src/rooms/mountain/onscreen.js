import phaserWrapper from "gorngin/phaserWrapper";
import spriteClasses from "gorngin/sprites/spriteClasses";
import { game } from "gorngin/app";

const svc = {};
svc.get = () => {
  const onscreen = {};

  onscreen.sky = new spriteClasses.TileSprite({
    x: 0,
    y: 0,
    width: game.width,
    height: game.height,
    img: "texas_sky",
    fixedToCamera: true,
    autoScroll: [-3, 0]
  });

  onscreen.city = new spriteClasses.Sprite({
    x: 0,
    y: 0,
    img: "texas_city",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 6,
        play: true,
        loop: true
      }
    ]
  });

  onscreen.foreground = new spriteClasses.Sprite({
    x: 0,
    y: 0,
    img: "texas_foreground",
    animation: [
      {
        name: "hide",
        sequence: [10],
        speed: 10,
        play: true,
        loop: false
      },
      {
        name: "hold",
        sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        speed: 10,
        play: false,
        loop: true
      },
      {
        name: "crawl",
        sequence: [
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          21,
          21,
          22,
          22,
          21,
          21,
          22,
          22,
          21,
          21,
          22,
          22,
          21,
          21,
          22,
          21,
          22,
          23,
          23,
          24,
          24
        ],
        speed: 5,
        play: false,
        loop: false
      }
    ]
  });

  onscreen.fog = new spriteClasses.TileSprite({
    x: 0,
    y: 20,
    width: game.width,
    height: game.height,
    img: "texas_fog",
    fixedToCamera: true,
    autoScroll: [-1, 0]
  });

  // onscreen.fog.alpha = 0.3;

  onscreen.birdGroup = phaserWrapper.add.group();

  return onscreen;
};
export default svc;
