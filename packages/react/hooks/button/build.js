import run from "@ttm/esbuild-config";
// import pkg from "./package.json" assert { type: "json" };

const pkg = {
  name: "@ttm/react-hooks-button",
  version: "0.0.1",
  type: "module",
  main: "dist/index.js",
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs",
    },
  },
  scripts: {
    build: "yarn clean && yarn build:js && yarn build:type && yarn build:css",
    "build:js": "node build.js",
    "build:type": "yarn tsc --emitDeclarationOnly",
    clean: "rm -rf dist",
    dev: "yarn build:js --watch && yarn build:type --watch",
  },
  devDependencies: {
    "@ttm/esbuild-config": "workspace:^",
    "@types/react": "^18.3.8",
    "@types/react-dom": "^18.3.0",
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    typescript: "^5.2.2",
  },
  peerDependencies: {
    react: "*",
  },
  dependencies: {
    clsx: "^2.0.0",
  },
};

run({
  pkg,
});
