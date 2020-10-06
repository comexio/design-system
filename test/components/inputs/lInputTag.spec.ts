import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LInputTag from '~/src/components/inputs/LInputTag.vue'


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

  it('show expand item', async () => {
    inputTag.setProps({ expand: true })
    const iconAppendOuter = () => inputTag.find('.v-input__append-outer')

    await inputTag.vm.$nextTick()

    expect(iconAppendOuter().exists()).toBe(true)

    iconAppendOuter().find('.v-btn').trigger('click')

    await inputTag.vm.$nextTick()

    expect(inputTag.emitted().clickAppendOuter).toBeTruthy()

  })
})
