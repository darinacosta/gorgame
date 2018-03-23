import stateAssetHandler from "gorngin/stateAssetHandler";
import stateConfigs from "services/stateConfigs";
import app, { game } from "services/app";

const state = {};

// State manager player update control (global)

state.preload = function(params) {
  for (const key in stateConfigs) {
    if (stateConfigs.get("hasOwnProperty")(key)) {
      stateAssetHandler.preload(stateConfigs[key]);
    }
  }
};

state.create = function() {
  /*
  Music
*/

  music = game.add.audio(app.config.devStartMusic);
  music.play("", 0, app.config.music, true);
  music.loop = true;

  game.state.start(app.config.devStartState, true, false, {
    startposition: 100,
    loadscreen: true
  });
};

export default state;
