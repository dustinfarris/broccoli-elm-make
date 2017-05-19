# broccoli-elm-make

Compile Elm to Javascript via [elm-make](https://github.com/elm-lang/elm-make).


## Installation

```
yarn add -D broccoli-elm-make
```


## Usage

The plugin accepts a node to watch for changes and options.


### Example

```js
const ElmMake = require('broccoli-elm-make');
const funnel = require('broccoli-funnel');

// Maybe you don't want your elm-css code to trigger a full make?
const appCode = funnel('elm', { exclude: [ /Styles.elm/ ] });

const js = new ElmMake(appCode, {
  main: 'elm/Main.elm',
  output: 'app.js'
});
```


## License

MIT
