import path from "path";
// import components from '../components.json'

export default function (commonRollupPlugins) {
  // const { componentsMaps, webComponents } = components
  const configList = [
    {
      input: "./packages/HelloWorld/index.ts",
      output: {
        name: "HelloWorld",
        file: path.resolve(__dirname, "../lib/components/HelloWorld.js"),
        format: "es",
        exports: "auto",
      },
      plugins: [...commonRollupPlugins],
      external: ["vue"],
    },
  ];
  // for (const [fileName] of Object.entries(componentsMaps)) {
  // 	const isWebComponent = webComponents.findIndex(name => name === fileName) > -1
  // 	if (isWebComponent) {
  // 		configList.push({
  // 			input: './packages/HelloWorld/index.ts',
  // 			output: {
  // 				name: 'HelloWorld',
  // 				file: path.resolve(__dirname, '../lib/components/HelloWorld.js'),
  // 				format: 'iife',
  // 				extend: true,
  // 				exports: 'named'
  // 			},
  // 			plugins: [
  // 				...commonRollupPlugins
  // 			]
  // 		})
  // 	} else {
  // 		configList.push({
  // 			input: './packages/HelloWorld/index.ts',
  // 			output: {
  // 				name: 'HelloWorld',
  // 				file: path.resolve(__dirname, '../lib/components/HelloWorld.js'),
  // 				format: 'es',
  // 				exports: 'auto'
  // 			},
  // 			plugins: [
  // 				...commonRollupPlugins
  // 			],
  // 			external: ['vue']
  // 		})
  // 	}
  // }

  return configList;
}
