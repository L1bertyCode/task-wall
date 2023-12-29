import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";
import { Configuration } from "webpack";

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 5000;
  const buildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(
      __dirname,
      "public",
      "favicon.ico"
    ),
  };

  const config = buildWebpackConfig({
    mode,
    isDev,
    buildPaths,
    port: PORT,
  });
  return config;
};
