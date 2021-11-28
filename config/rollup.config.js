import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import polyfill from "rollup-plugin-polyfill-node";
import vuePlugin from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";

import bundleConfig from "./rollup.bundle";
import componentsConfig from "./rollup.components";
import examplesConfig from "./rollup.dev";
const isProduct = process.env.NODE_ENV === "production";

const customResolver = nodeResolve({
  extensions: [".ts", ".js", ".json", ".vue"],
});
const commonRollupPlugins = [
  typescript(),
  alias({
    entries: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "packages"),
      },
    ],
    customResolver,
  }),
  commonjs({
    include: ["node_modules/**", "node_modules/**/*", "lib/**/*"],
  }),
  polyfill(),
  nodeResolve({
    jsnext: true,
    main: true,
    extensions: [".ts", ".js", ".json", ".vue"],
  }),
  vuePlugin({
    include: /\.vue$/,
    target: "browser",
  }),
];
export default function () {
  // 本地开发环境
  if (process.env.IS_SERVE) {
    return [
      bundleConfig(commonRollupPlugins, isProduct),
      examplesConfig(commonRollupPlugins, isProduct),
    ];
  }
  // 打包生产
  if (process.env.BUILD === "components") {
    // 分组件打包
    return componentsConfig(commonRollupPlugins, isProduct);
  } else if (process.env.BUILD === "bundle") {
    // bundle包
    return bundleConfig(commonRollupPlugins, isProduct);
  }
  return [
    // 全量打包
    bundleConfig(commonRollupPlugins, isProduct),
    ...componentsConfig(commonRollupPlugins, isProduct),
  ];
}
