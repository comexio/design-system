import Vuetify from 'vuetify'
import { createLocalVue } from '@vue/test-utils'

export function initSetupComponent () {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()

  return {
    mocks: {
      $t: () => '__translation__',
      $i18n: {
        $t: () => '__translation__'
      }
    },
    localVue,
    vuetify
  }
}

export function addElemWithDataAppToBody () {
  const app = document.createElement('div')
  app.setAttribute('data-app', 'true')
  document.body.append(app)
}
