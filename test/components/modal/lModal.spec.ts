import Vuetify from 'vuetify'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import { LModal } from '~/src/components/modal/LModal'

const setupDefault = initSetupComponent()

const defaultParams = {
  ...setupDefault,
  propsData: {
    dialog: false
  }
}

describe('Alert test render', () => {
  let modal: Wrapper<LModal>

  beforeAll(() => {
    modal = mount(LModal, {
      ...defaultParams
    })
  })

  it('modal no rendered', () => {
    const content = () => modal.find('.modal')

    expect(modal).not.toBeDefined()
  })

  it('modal has been rendered', () => {
    modal.setProps({ dialog: true })
    const content = () => modal.find('.modal')

    expect(modal).toBeDefined()
  })
})
