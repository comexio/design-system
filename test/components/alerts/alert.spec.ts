import Vuetify from 'vuetify'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import { LAlert } from '~/src/components/alerts'

const setupDefault = initSetupComponent()

const defaultParams = {
  ...setupDefault,
  propsData: {
    msg: 'Teste alert'
  }
}

describe('Alert test render', () => {
  let alert: Wrapper<LAlert>

  beforeAll(() => {
    alert = mount(LAlert, {
      ...defaultParams
    })
  })

  it('alert has been rendered', () => {
    const content = () => alert.find('.v-snack__content')

    expect(alert).toBeDefined()
    expect(content().text()).toBe('Teste alert')
  })
})
