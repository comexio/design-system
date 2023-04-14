export * from './components/buttons'
import * as buttons from './components/buttons'


const components = {
    ...buttons
}

export function install (Vue) {
    for (const [name, component] of Object.entries(components)) {
        Vue.component(name, component)
    }
}

const plugin = {
  install
}

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  // eslint-disable-next-line no-undef
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
