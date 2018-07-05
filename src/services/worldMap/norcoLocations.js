const svc = {};

svc.locations = [
  {
    state: "bar",
    name: "Floodgate Tavern",
    x: 109,
    y: 72
  },
  {
    state: "lake",
    name: "Lake Pontchartrain",
    x: 349,
    y: 72
  },
  {
    state: "videostore",
    name: "Video Store",
    x: 374,
    y: 206
  },
  {
    state: "home",
    entry: "frontyard",
    name: "Home",
    children: [
      "livingroom",
      "bedroom",
      "yard",
      "frontyard",
      "kitchen",
      "attic"
    ],
    x: 81,
    y: 90
  },
  {
    state: "interstate",
    name: "Interstate",
    x: 667,
    y: 127
  },
  {
    state: "highway",
    name: "Airline Highway",
    x: 292,
    y: 176
  },
  {
    state: "gasstation",
    name: "Gasstation",
    x: 33,
    y: 137
  }
];

export default svc;
