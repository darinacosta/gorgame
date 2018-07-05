import Dialogue from "gorngin/dialogue/Dialogue";
import app, { game } from "services/app";

const svc = {};

svc.displayLocationInfo = (state, name, self) => {
  game.sound.play("lightclick", 0.06, false);
  if (app.mapSelections) {
    for (let i = 0; i < app.mapSelections.length; i += 1) {
      if (app.mapSelections[i].pin) {
        app.mapSelections[i].pin.animations.play("default");
      }
    }
  }
  if (self && self.animations) {
    self.animations.play("hover");
  }
  app.signals.destroyDialogue.dispatch();
  const dialogue = new Dialogue({
    elements: [
      {
        title: "init",
        tags: "nofollowupicon", //  a-${state}`,
        body: name
      }
    ]
  });
  dialogue.init();
};

svc.childIsCurrentState = children => {
  for (let i = 0; i < children.length; i += 1) {
    if (app.currentState === children[i]) {
      return true;
    }
  }
  return false;
};

svc.getLocationObject = cfg => {
  const state = cfg.state;
  const name = cfg.name;
  const children = cfg.children;
  const entry = cfg.entry;
  const x = cfg.x;
  const y = cfg.y;

  return {
    state,
    map: "regional",
    onInputDown() {
      const entryState = entry !== undefined ? entry : state;
      svc.goToState(entryState);
    },
    onInputOver(self) {
      svc.displayLocationInfo(state, name, self);
    },
    parent,
    x,
    y,
    current() {
      if (children) {
        return app.currentState === state
          ? app.currentState === state
          : svc.childIsCurrentState(children);
      }
      return app.currentState === state;
    }
  };
};

svc.goToState = state => {
  function changeState() {
    game.state.start("loadState", true, false, state);
  }
  app.signals.destroyDialogue.dispatch();
  app.cameraSvc.transition("fade_out").then(() => {
    changeState();
  });
};

export default svc;
