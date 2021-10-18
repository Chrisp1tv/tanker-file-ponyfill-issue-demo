## How to run it?

Install node, clone this repository and then run `node index.js`.

You should see a error stacktrace like the following:

```
internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module 'tslib'
Require stack:
- /Users/christopheranciaux/Desktop/tanker-test/node_modules/@tanker/file-ponyfill/dist/browser/FilePonyfill.js
- /Users/christopheranciaux/Desktop/tanker-test/node_modules/@tanker/file-ponyfill/dist/browser/index.js
- /Users/christopheranciaux/Desktop/tanker-test/index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/Users/christopheranciaux/Desktop/tanker-test/node_modules/@tanker/file-ponyfill/dist/browser/FilePonyfill.js:4:15)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/christopheranciaux/Desktop/tanker-test/node_modules/@tanker/file-ponyfill/dist/browser/FilePonyfill.js',
    '/Users/christopheranciaux/Desktop/tanker-test/node_modules/@tanker/file-ponyfill/dist/browser/index.js',
    '/Users/christopheranciaux/Desktop/tanker-test/index.js'
  ]
}
```