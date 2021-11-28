import { App } from 'vue'
import HelloWorld from './src/index.vue'

HelloWorld.install = (app: App) => {
	app.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld
