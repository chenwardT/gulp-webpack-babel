# gulp-webpack-babel

Seed project for a gulp-driven JS project using Webpack and Babel.

## Setup

```
npm install
```

## Dependencies

See `package.json` for what is installed locally.

Recommended global NPM packages (__not installed by this seed__):
 
 * eslint
 * babel-eslint
 
Additionally, [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) 
for Chrome is required to make use of gulp-livereload.
 
## Usage
 
The default gulp task sets up a livereload server and watches for changes to JS files located under `dist/`,
as well as `index.html`. Changes in either will trigger a livereload in Chrome.

Changes to JS files under `dist/` will also cause webpack to regenerate `dist/bundle.js` which involves
a babel transform using the `es2105` preset.

A _styles_ task is available which can be filled in with a e.g. SASS compliation build step.
 
An _uglify_ task - not included in the default task - will operate on `dist/bundle.js`, which is the
webpack output. Thus, _uglify_ should be run after all other tasks.

ESLint is configured to use `babel-eslint`. See `.eslintrc.json`.