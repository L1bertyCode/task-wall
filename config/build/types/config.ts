export type BuildMode = "development";
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  favicon: string;
}
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
export interface BuildOptions {
  mode: BuildMode;
  isDev: boolean;
  buildPaths: BuildPaths;
  port: number;
}
