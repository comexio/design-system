import Vuetify from 'vuetify'
import Vuei18n from 'vue-i18n'
import '@testing-library/jest-dom'

import { render } from '@testing-library/vue'

import messages from '~/src/locale';

function renderComponentWithVuetify (component, options, callback) {
  const root = document.createElement('div')
  root.setAttribute('data-app', 'true')

  return render(
    component,
    {
      container: document.body.appendChild(root),
      vuetify: new Vuetify(),
      ...options
    },
    callback
    )
  }

function translateComponent (vue, locale) {
  vue.use(Vuei18n)

  const i18n = new Vuei18n({
    locale: locale || 'pt',
    fallbackLocale: locale || 'pt',
    messages
  })

  return {
    i18n
  }
}

export function renderComponent (component, options, locale) {
  return renderComponentWithVuetify(component, options, vue => translateComponent(vue, locale))
}
