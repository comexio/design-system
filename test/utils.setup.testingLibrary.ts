/* eslint-disable @typescript-eslint/no-explicit-any */
import Vuetify from 'vuetify'
import Vuei18n from 'vue-i18n'
import '@testing-library/jest-dom'

import { render } from '@testing-library/vue'

import messages from '~/src/locale';

function renderComponentWithVuetify (component: any, options: any, callback: any) {
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
  
function translateComponent (vue: any, locale?: string) {
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

export function renderComponent (component: any, options: any, locale?: string) {
  return renderComponentWithVuetify(component, options, (vue: any) => translateComponent(vue, locale))
}
