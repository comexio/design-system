import * as inputs from './components/inputs'

const components = {
    ...inputs
}

export function install (Vue) {
    for (const [name, component] of Object.entries(components)) {
        Vue.component(name, component)
    }
}
