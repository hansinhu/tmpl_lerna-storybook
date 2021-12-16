---
to: packages/<%= name%>/package.json
---

{
  "name": "@tuna/<%= name%>",
  "version": "0.0.0",
  "author": "<%= author%>",
  "license": "MIT",
  "main": "dist/index.js",
  "module": "dist/<%= name%>.esm.js",
  "typings": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "clean": "rimraf dist",
    "build": "tsdx build",
    "prepublishOnly": "yarn build"
  },
  "dependencies": {
    "tslib": "^2.0.1"
  },
  "peerDependencies": {
    "react": "^16.8.0"
  }
}
