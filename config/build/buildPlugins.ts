import HtmlWebpackPlugin from "html-webpack-plugin";
import {
  ProgressPlugin,
  WebpackPluginInstance,
} from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins(
  buildOptions: BuildOptions
): WebpackPluginInstance[] {
  const { buildPaths } = buildOptions;

  return [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin(),
  ];
}
