export * from './components/inputs'
export * from './components/filters'
export * from './components/cards'
export * from './components/buttons'
export * from './components/tags'
export * from './components/modal'

import * as inputs from './components/inputs'
import * as filters from './components/filters'
import * as cards from './components/cards'
import * as buttons from './components/buttons'
import * as tags from './components/tags'
import * as modal from './components/modal'


const components = {
    ...inputs,
    ...filters,
    ...cards,
    ...buttons,
    ...tags,
    ...modal
}

export function install (Vue) {
    for (const [name, component] of Object.entries(components)) {
        Vue.component(name, component)
    }
}
