import { RuleSetRule } from "webpack";

export function buildLoaders(
  isDev: boolean
): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const scssLoader = {
    test: /\.s?[ac]ss$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      ,
      "sass-loader",
    ],
  };
  return [tsLoader, scssLoader];
}
