import path from "path";
import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";

export function buildResolvers(
  buildPaths: BuildPaths
): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": buildPaths.src,
    },
  };
}
