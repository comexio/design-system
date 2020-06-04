export * from './components/inputs'
export * from './components/filters'
export * from './components/cards'

import * as inputs from './components/inputs'
import * as filters from './components/filters'
import * as cards from './components/cards'

const components = {
    ...inputs,
    ...filters,
    ...cards
}

export function install (Vue) {
    for (const [name, component] of Object.entries(components)) {
        Vue.component(name, component)
    }
}
