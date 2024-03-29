export * from './components/inputs'
export * from './components/cards'
export * from './components/buttons'
export * from './components/tags'
export * from './components/modal'
export * from './components/charts'
export * from './components/alerts'
export * from './components/tables'
export * from './components/loadings'
export * from './components/bars'
export * from './components/tooltip'
export * from './components/avatars'

import * as inputs from './components/inputs'
import * as cards from './components/cards'
import * as buttons from './components/buttons'
import * as tags from './components/tags'
import * as modal from './components/modal'
import * as charts from './components/charts'
import * as alerts from './components/alerts'
import * as tables from './components/tables'
import * as loadings from './components/loadings'
import * as bars from './components/bars'
import * as timeline from './components/timeline'
import * as tooltip from './components/tooltip'
import * as avatars from './components/avatars'


const components = {
    ...inputs,
    ...cards,
    ...buttons,
    ...tags,
    ...modal,
    ...charts,
    ...alerts,
    ...tables,
    ...loadings,
    ...bars,
    ...timeline,
    ...tooltip,
    ...avatars
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
