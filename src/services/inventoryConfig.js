import inventoryConfig from "gorngin/inventory/config";

inventoryConfig.setConfig({
  items: [
    {
      id: "access-home",
      name: "Home",
      value: false,
      possessed: true,
      type: "access",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "visited-bedroom",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Gained when first visiting bedroom.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "visited-yard",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Gained when first visiting yard.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "million_in_yard",
      name: false,
      value: false,
      possessed: true,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "look-window",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Gained when looking out of bedroom window.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "look-room",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Gained when first looking at bedroom.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "bedroom_look_room",
      name: false,
      value: 0,
      possessed: false,
      type: "event",
      image: false,
      description:
        "Tracks the number of times the player looks at the bedroom.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "bedroom_look_photographs",
      name: false,
      value: 0,
      possessed: false,
      type: "event",
      image: false,
      description:
        "Tracks the number of times the player looks at photographs in the bedroom.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "bedroom_look_phone",
      name: false,
      value: 0,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired when first looking at the phone in the bedroom.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "bedroom_use_phone",
      name: false,
      value: 0,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired when attempting to use the phone in the bedroom.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_pan_down",
      name: false,
      value: 0,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired after first visiting front yard.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation_indoor",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired when first entering the inside of the gasstation.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "crabcake",
      name: "Crabcake",
      value: false,
      possessed: false,
      type: "item",
      image: "motorcycle-fuse",
      description: "Acquired after purchasing the gasstation crabcake.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "access-perdidostreet",
      name: false,
      value: false,
      possessed: true,
      type: "access",
      image: "",
      description: "",
      attributes: {
        timeline: "mom"
      }
    },
    {
      id: "motorcycle-fuse",
      name: "Fuse",
      value: false,
      possessed: false,
      type: "item",
      image: "motorcycle-fuse",
      description: "A fuse for your mom's motorcycle.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "kiosk-lowdown",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description:
        "Acquired after getting the life story of the gasstation kiosk.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "enough-about-kiosk",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description:
        "Acquired after the kiosk has said enough regarding her life story.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation_indoor_look_exit",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired after looking at the gasstation exit.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquire after first visiting gasstation.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation_talked_watt",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired after first talking to watt.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation_talked_watt",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired after first talking to watt.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation_looked_watt",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired after first looking at watt.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation-mom-died-plea",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired in convo with Watt.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation-ask-sorry",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired in convo with Watt.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "gasstation_can_enter",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Allows entrance into gasstation.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "watt-describes-landsyndicate",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Allows entrance into gasstation.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "crabcaketalk",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "called-watt-baby",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "pissed-off-watt",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "livingroom",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "Acquired after first entering living room.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "livingroom_look_door",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "million-opinion-on-watt",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "looked-at-shield-oil-on-motorcycle",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "millions-opinion-on-watt",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "millions-opinion-on-alik",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "videostore_indoor",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "videostore-lookatmark1",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "blastfaster",
      name: false,
      value: false,
      possessed: false,
      type: "item",
      image: "blastfaster",
      description: "Acquire Blast Faster from video store.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "wordmovie1",
      name: false,
      value: false,
      possessed: false,
      type: "item",
      image: "wordmovie1",
      description: "Acquire first word movie from video store.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "videostore-look-teenagers",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "teenagerhauntedhousediscush",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "teenthinksyourecreepy",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "wordmovies",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description:
        "Acquired after looking at word movie poster at video store.",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_look_yard",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_talk_million",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_where_coils",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "access-gasstation",
      name: "Gas station",
      value: false,
      possessed: false,
      type: "access",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "access-highway",
      name: "Airline Highway",
      value: false,
      possessed: false,
      type: "access",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_ask_expecting_call",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "brother_name",
      name: false,
      value: "Alik",
      possessed: false,
      type: "eval",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_sleep_through_anything",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_why_see_data",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "yard_who_is_collector",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "access-bar",
      name: "Floodgate Tavern",
      value: false,
      possessed: false,
      type: "access",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "access-videostore",
      name: "Videotrax",
      value: false,
      possessed: false,
      type: "access",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    },
    {
      id: "fuse-confirmation",
      name: false,
      value: false,
      possessed: false,
      type: "event",
      image: false,
      description: "",
      attributes: {
        timeline: "you"
      }
    }
  ]
});
