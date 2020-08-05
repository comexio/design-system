import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '@/test/utils.setup'
import LTag from '@/src/components/tags/LTag.vue'

const initialSetup = initSetupComponent()
const defaultParams = {
  ...initialSetup
}

describe('Tag component', () => {
  let tag: Wrapper<LTag>

  beforeAll(() => {
    tag = mount(LTag, {
      ...defaultParams
    })
  })

  it('Tag render without data', () => {
    expect(tag.exists()).toBeTruthy()
    expect(tag.text()).toBeFalsy()
  })

  it('Tag render with data', async () => {
    tag.setProps({ text: 'texto', number: 0, link: true, label: true, color: '#EADAB8' })
    await tag.vm.$nextTick()

    const tagContent = () => tag.find('.v-chip__content')
    const tagNumber = () => tag.find('.tag__number')
    const tagLink = () => tag.find('.tag__link')
    const chip = () => tag.find({ name: 'v-chip' })
    expect(tagContent().exists()).toBeTruthy()
    expect(tagNumber().exists()).toBeTruthy()
    expect(tagLink().exists()).toBeTruthy()
    expect(chip().props().color).toBeTruthy()
  })
})
