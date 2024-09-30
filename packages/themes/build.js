import run from "@ttm/esbuild-config";
// import pkg from "./package.json";

const pkg = {
  devDependencies: {
    "@ttm/esbuild-config": "workspace:^",
    typescript: "^5.2.2",
  },
};

run({
  pkg,
});
