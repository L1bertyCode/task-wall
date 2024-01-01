import { Configuration, ProgressPlugin } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  buildOptions: BuildOptions
): Configuration {
  const { mode, buildPaths, isDev, port } = buildOptions;
  return {
    mode: mode,
    entry: buildPaths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: buildPaths.build,
      clean: true,
    },
    plugins: buildPlugins(buildOptions),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: buildDevServer(port),
  };
}
