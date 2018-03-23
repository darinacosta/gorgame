### DEPLOYMENT

- `mkdir norco` in your localhost directory
- `cd norco`
- `git clone https://github.com/darinacosta/norcochapterone/`
- `git clone https://github.com/darinacosta/gorngin/`
- `cd gorngin`
- `yarn install`
- `cd ../../norcochapterone`
- `yarn install`
- `yarn run server`
- visit http://localhost:9000/

### BUILDING

To get the latest version of your gorngin changes:
- `yarn add file:../gorngin`
Then:
- `yarn run build-prod`

### LINTING
There are no pre-commit hooks for ESLint or Prettier yet. For now, set up your
text editor with the appropriate plugins for ESLint and Prettier so that you can
get real-time error reporting and auto-formatting:

http://prettier.io
http://eslint.org/docs/user-guide/integrations

### RUNNING IN ELECTRON
- `yarn build` and then `yarn start`

Open the developer tools with Command-Shift-I. You can use the following global
commands in the dev build:

- `setState(state: String)` - Loads `state`
- `addItems(...items: [...String])` - Adds `[...items]` to the player's inventory

### URL QUERIES
You can affect the state of the game using the following queries:
- `state` - loads the state provided as a value
  - e.g. `<domain>?state=bedroom`
- `items` - adds items listed, separated by comma, to `app.sm.inv`
  -  e.g. `<domain>?items=fuse,keycard`
- `skipcutscenes` - `true` will bypass most cutscenes in a state
