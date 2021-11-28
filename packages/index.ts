import { App } from 'vue'
import HelloWorld from './HelloWorld'

const components = [
	HelloWorld
]
// 全局注册
const install = (app: App) => {
	components.forEach(component => {
		app.component(component.name, component)
	})
}

// 局部注册
export {
	HelloWorld,
	install
}

export default {
	install
}
