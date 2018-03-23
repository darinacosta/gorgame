import gornginEnemySvc from "gorngin/combatsystem/enemySvc";

gornginEnemySvc.setEnemies([
  {
    id: "shieldguard",
    img: "shieldguard",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 4,
        play: true,
        loop: false
      },
      {
        name: "attack",
        sequence: [1, 1, 1, 0],
        speed: 4,
        play: false,
        loop: false
      }
    ],
    statevars: {
      hp: 120,
      maxHP: 120,
      name: "Shield Guard",
      id: "shieldguard",
      weapon: "assaultcannon",
      active: false, // active turn in combat
      include: true, // include in combat
      type: "enemy",
      alive: true,
      strength: 10,
      defense: 12,
      speed: 5
    }
  }
]);
