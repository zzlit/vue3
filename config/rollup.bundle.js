import path from "path";

const file = (type = "min") =>
  path.resolve(__dirname, `../lib/index.${type}.js`);

export default function (commonRollupPlugins, isProduct) {
  return {
    input: path.resolve(__dirname, "../packages/index.ts"),
    output: [
      {
        name: "index",
        file: file("esm"),
        format: "es",
        exports: "auto",
        sourcemap: !isProduct,
      },
      {
        name: "index",
        file: file("umd"),
        format: "umd",
        globals: {
          vue: "Vue",
        },
        sourcemap: !isProduct,
        exports: "named",
      },
    ],
    plugins: [...commonRollupPlugins],
    external: ["vue"],
  };
}
