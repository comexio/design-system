export * from './components/inputs'
export * from './components/filters'

import * as inputs from './components/inputs'
import * as filters from './components/filters'

const components = {
    ...inputs,
    ...filters
}

export function install (Vue) {
    for (const [name, component] of Object.entries(components)) {
        Vue.component(name, component)
    }
}
