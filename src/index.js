export * from './components/inputs'
export * from './components/filters'
export * from './components/cards'
export * from './components/buttons'

import * as inputs from './components/inputs'
import * as filters from './components/filters'
import * as cards from './components/cards'
import * as buttons from './components/buttons'


const components = {
    ...inputs,
    ...filters,
    ...cards,
    ...buttons
}

export function install (Vue) {
    for (const [name, component] of Object.entries(components)) {
        Vue.component(name, component)
    }
}
