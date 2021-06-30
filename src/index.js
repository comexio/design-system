export * from './components/inputs'
// export * from './components/filters'
// export * from './components/cards'
// export * from './components/buttons'
// export * from './components/tags'
// export * from './components/modal'
// export * from './components/charts'
// export * from './components/alerts'
// export * from './components/tables'
// export * from './components/loadings'
// export * from './components/bars'

import * as inputs from './components/inputs'
import * as filters from './components/filters'
import * as cards from './components/cards'
import * as buttons from './components/buttons'
import * as tags from './components/tags'
import * as modal from './components/modal'
import * as charts from './components/charts'
import * as alerts from './components/alerts'
import * as tables from './components/tables'
import * as loadings from './components/loadings'
import * as bars from './components/bars'


const components = {
    ...inputs,
    ...filters,
    ...cards,
    ...buttons,
    ...tags,
    ...modal,
    ...charts,
    ...alerts,
    ...tables,
    ...loadings,
    ...bars
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
