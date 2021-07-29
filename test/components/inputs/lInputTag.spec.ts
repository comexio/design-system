import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LInputTag from '~/src/components/inputs/LInputTag.vue'
import { hasUncaughtExceptionCaptureCallback } from 'process'


const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

describe('inputTag component', () => {
  let inputTag: Wrapper<LInputTag>

  beforeAll(() => {
    inputTag = mount(LInputTag, {
      ...defaultParams
    })
  })

  it('component render without data', () => {
    expect(inputTag.exists()).toBe(true)
  })

  it('shows expand item', async () => {
    inputTag.setProps({ expand: true })
    const iconAppendOuter = () => inputTag.find('.v-input__append-outer')

    await inputTag.vm.$nextTick()

    expect(iconAppendOuter().exists()).toBe(true)

    iconAppendOuter().find('.v-btn').trigger('click')

    await inputTag.vm.$nextTick()

    expect(inputTag.emitted().clickAppendOuter).toBeTruthy()
  })

  it('emits input on type value and keydown enter', async () => {
    const inputElement = () => inputTag.find('input')
    await inputElement().setValue('value')
    await inputElement().trigger('keydown.enter')
    expect(inputTag.emitted().input[0]).toEqual([['value']])
  })

  it('renders class only hideDetails is true', async () => {
    // default is hideDetails true
    expect(inputTag.find('.hide-details').exists()).toBe(true)

    await inputTag.setProps({ hideDetails: false })

    expect(inputTag.find('.hide-details').exists()).toBe(false)
  })
})
