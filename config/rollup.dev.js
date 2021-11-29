import path from 'path'
import html from 'rollup-plugin-html2'
import browserSync from 'rollup-plugin-browsersync'

export default function (commonRollupPlugins) {
	return {
		input: path.resolve(__dirname, '../examples/main.ts'),
		output: {
			name: 'examplesBundle',
			file: 'dist/bundle.js',
			format: 'iife',
			extend: true,
			sourcemap: true
		},
		plugins: [
			...commonRollupPlugins,
			html({
				template: 'examples/index.html',
				fileName: 'index.html'
			}),
			browserSync({
				server: {
					baseDir: path.resolve(__dirname, '../dist')
				},
				port: 8888
			})
		]
	}
}
