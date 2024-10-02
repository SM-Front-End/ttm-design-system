import run from "@ttm/esbuild-config";
// import pkg from "./package.json";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const pkg = {
  peerDependencies: {
    "@ttm/themes": "workspace:^",
    react: "*",
  },
  dependencies: {
    clsx: "^2.1.1",
  },
};

const config = {
  plugins: [vanillaExtractPlugin()],
};

run({
  pkg,
  config,
});
