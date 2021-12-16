---
to: packages/<%= name%>/package.json
---

{
  "name": "@tuna/<%= name%>",
  "version": "0.0.0",
  "author": "<%= author%>",
  "license": "MIT",
  "main": "lib/index.js",
  "module": "es/index.js",
  "typings": "lib/index.d.ts",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "build": "yarn clean & concurrently \"yarn:build:cjs\" \"yarn:build:es\"",
    "build:cjs": "tsc --module CommonJS --outDir lib",
    "build:es": "tsc --outDir es",
    "prepublishOnly": "yarn build"
  },
  "dependencies": {
    "tslib": "^2.0.1"
  }
}
