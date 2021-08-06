import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LCheckbox from '~/src/components/inputs/LCheckboxNew.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  props: {
    value: false,
  }
}


describe('LCheckboxNew component', () => {
  let checkboxNew: Wrapper<LCheckbox>

  beforeAll(() => {
    checkboxNew = mount(LCheckbox, {
      ...defaultParams,
    })
  })

  it('renders component', () => {
    expect(checkboxNew.exists()).toBe(true)
  })

  it('renders default unchecked', () => {
    expect(checkboxNew.find('.v-input--is-label-active').exists()).toBe(false)
  })

  it('check by clicking on the checkbox', async () => {
    const input = checkboxNew.find('.LCheckboxNew')

    input.find('input').trigger('click')
    await checkboxNew.vm.$nextTick()

    expect(checkboxNew.find('.v-input--is-label-active').exists()).toBe(true)
  })

  it('check by clicking on the checkbox', async () => {
    checkboxNew.setProps({ color: '#f2f', value: true })

    expect(checkboxNew.find('.v-input--is-label-active').exists()).toBe(true)
  })
})
