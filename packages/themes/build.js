import run from "@sm/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
