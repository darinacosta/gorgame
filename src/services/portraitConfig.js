import gornginPortraitSvc from "gorngin/portraits/portraitSvc";
import spriteClasses from "gorngin/sprites/spriteClasses";
import dialogueConfig from "gorngin/dialogue/config";

const svc = {};

svc.getY = function getY() {
  const map = dialogueConfig.get("currentMap");
  if (!dialogueConfig.maps[`${map}_portrait`]) {
    return 0;
  }
  return dialogueConfig.maps[`${map}_portrait`].portrait.border.top;
};

svc.getX = function getX() {
  const map = dialogueConfig.get("currentMap");
  if (!dialogueConfig.maps[`${map}_portrait`]) {
    return 0;
  }
  return dialogueConfig.maps[`${map}_portrait`].portrait.border.left;
};

svc.portraits = {
  frame: {
    x: svc.getX,
    y: svc.getY,
    img: "characterportraitframe"
  },

  placeholder: {
    x: svc.getX,
    y: svc.getY,
    img: "placeholderportraitmom",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option1",
        sequence: [1],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option2",
        sequence: [2],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option3",
        sequence: [3],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option4",
        sequence: [4],
        speed: 5,
        play: true,
        loop: true
      }
    ]
  },

  // mom placeholder
  placeholdermom: {
    x: svc.getX,
    y: svc.getY,
    img: "placeholderportraitmom",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option1",
        sequence: [1],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option2",
        sequence: [2],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option3",
        sequence: [3],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "option4",
        sequence: [4],
        speed: 5,
        play: true,
        loop: true
      }
    ]
  },

  kiki: {
    x: svc.getX,
    y: svc.getY,
    img: "kiki",
    animation: [
      {
        name: "default",
        sequence: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          3,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          1,
          2,
          2,
          2,
          2,
          1,
          1,
          1
        ],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "talking",
        sequence: [1, 4],
        speed: 5,
        play: false,
        loop: true
      },
      {
        name: "goggles",
        sequence: [0],
        speed: 5,
        play: false,
        loop: true
      }
    ],
    statevars: {
      name: "Kiki"
    }
  },

  worldmaplocations: {
    x: svc.getX,
    y: svc.getY,
    img: "worldmaplocations",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 5,
        play: false,
        loop: true
      },
      {
        name: "highway",
        sequence: [1],
        speed: 5,
        play: false,
        loop: true
      },
      {
        name: "bar",
        sequence: [2],
        speed: 5,
        play: false,
        loop: true
      },
      {
        name: "home",
        sequence: [4],
        speed: 5,
        play: false,
        loop: false
      },
      {
        name: "gasstation",
        sequence: [6],
        speed: 5,
        play: false,
        loop: false
      },
      {
        name: "videostore",
        sequence: [8],
        speed: 5,
        play: false,
        loop: false
      },
      {
        name: "batture",
        sequence: [7],
        speed: 5,
        play: false,
        loop: false
      },
      {
        name: "bedroom",
        sequence: [3],
        speed: 5,
        play: false,
        loop: false
      },
      {
        name: "yard",
        sequence: [5],
        speed: 5,
        play: true,
        loop: true
      }
    ]
  },

  lucky: {
    x: svc.getX,
    y: svc.getY,
    img: "lucky",
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        speed: 4,
        play: true,
        loop: true
      },
      {
        name: "talking",
        sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    statevars: {
      name: "Lucky",
      voice: "lowrobodialogue"
    }
  },

  alexjones: {
    x: svc.getX,
    y: svc.getY,
    img: "alexjones",
    animation: [
      {
        name: "default",
        sequence: [2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3],
        speed: 4,
        play: true,
        loop: true
      },
      {
        name: "talking",
        sequence: [5, 6, 7, 8, 9, 10, 4],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    statevars: {
      name: "Watt Schexnayder"
    }
  },

  refineryportrait: {
    x: svc.getX,
    y: svc.getY,
    img: "refineryportrait",
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3, 4],
        speed: 5,
        play: true,
        loop: true
      }
    ]
  },

  wordmovies: {
    x: svc.getX,
    y: svc.getY,
    img: "wordmovies",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 5,
        play: true,
        loop: true
      }
    ]
  },

  motorcycleportrait: {
    x: svc.getX,
    y: svc.getY,
    img: "motorcycleportrait",
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3],
        speed: 5,
        play: true,
        loop: true
      }
    ],
    disableAnimationForMobile: true
  },

  yutsi: {
    x: svc.getX,
    y: svc.getY,
    img: "yutsi",
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
        speed: 5,
        play: true,
        loop: true
      }
    ],
    statevars: {
      name: "Yutsi"
    },
    disableAnimationForMobile: true
  },

  livingroomportraits: {
    x: svc.getX,
    y: svc.getY,
    img: "livingroomportraits",
    animation: [
      {
        name: "familyphoto",
        sequence: [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 0, 0],
        speed: 5,
        play: true,
        loop: true
      },
      {
        name: "door",
        sequence: [6],
        speed: 5,
        play: true,
        loop: false
      }
    ],
    disableAnimationForMobile: true
  },

  million: {
    x: svc.getX,
    y: svc.getY,
    img: "million",
    animation: [
      {
        name: "default",
        sequence: [
          0,
          0,
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          2,
          3,
          4,
          3,
          2,
          1,
          0,
          0,
          0
        ],
        speed: 4,
        play: true,
        loop: true
      },
      {
        name: "talking",
        sequence: [7, 8, 9, 10, 9, 8],
        speed: 4,
        play: false,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    statevars: {
      name: "Million"
    }
  },

  you: {
    x: svc.getX,
    y: svc.getY,
    img: "youportrait",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    statevars: {
      name: "You"
    }
  },

  sparrow: {
    x: svc.getX,
    y: svc.getY,
    img: "sparrow",
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    allowGravity: false,
    scale: [1, 1],
    fixedToCamera: true,
    collideWorldBounds: true,
    inputEnabled: false,
    onInputDown: false,
    parallax: false,
    statevars: {
      name: "Sparrow"
    }
  },

  heron: {
    x: svc.getX,
    y: svc.getY,
    img: "heron",
    animation: [
      {
        name: "default",
        sequence: [0, 2, 3, 4, 3, 2, 0, 2, 0, 2, 3, 2, 0],
        speed: 4,
        play: true,
        loop: true
      },
      {
        name: "talking",
        sequence: [0, 1, 2, 3, 4, 3],
        speed: 4,
        play: false,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    statevars: {
      name: "Heron"
    }
  },

  nightrefineryportrait: {
    x: svc.getX,
    y: svc.getY,
    img: "nightrefineryportrait",
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    statevars: {}
  },

  kiosk: {
    x: svc.getX,
    y: svc.getY,
    img: "kiosk",
    animation: [
      {
        name: "default",
        sequence: [0, 1, 2, 3, 4, 5, 6, 7],
        speed: 6,
        play: true,
        loop: true
      }
    ],
    statevars: {
      name: "Kiosk"
    }
  },

  detective: {
    x: svc.getX,
    y: svc.getY,
    img: "detective",
    animation: [
      {
        name: "default",
        sequence: [
          2,
          3,
          4,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2
        ],
        speed: 4,
        play: true,
        loop: true
      },
      {
        name: "talking",
        sequence: [0, 1],
        speed: 4,
        play: false,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    allowGravity: false,
    scale: [1, 1],
    fixedToCamera: true,
    collideWorldBounds: true,
    inputEnabled: false,
    onInputDown: false,
    parallax: false,
    statevars: {
      name: "Detective LeBlanc"
    }
  },

  ej: {
    x: svc.getX,
    y: svc.getY,
    img: "ej",
    animation: [
      {
        name: "default",
        sequence: [0],
        speed: 4,
        play: true,
        loop: true
      }
    ],
    disableAnimationForMobile: true,
    allowGravity: false,
    scale: [1, 1],
    fixedToCamera: true,
    collideWorldBounds: true,
    inputEnabled: false,
    onInputDown: false,
    parallax: false,
    statevars: {
      name: "EJ"
    }
  },

  erica: {
    x: svc.getX,
    y: svc.getY,
    img: "videostoreemployee",
    animation: [
      {
        name: "default",
        sequence: [
          0,
          1,
          2,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        speed: 4,
        play: true,
        loop: true
      },
      {
        name: "talking",
        sequence: [3, 4, 5, 4],
        speed: 7,
        play: false,
        loop: true
      }
    ],
    statevars: {
      name: "Erica",
      voice: "genericdialogue2"
    }
  }
};

gornginPortraitSvc.setPortraits(svc.portraits);

export default gornginPortraitSvc;
