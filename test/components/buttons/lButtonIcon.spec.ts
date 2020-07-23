import { mount, Wrapper } from '@vue/test-utils'
import LButtonIcon from '@/src/components/buttons/LButtonIcon.vue'

describe('Tag component', () => {
  let button: Wrapper<LButtonIcon>

  beforeAll(() => {
    button = mount(LButtonIcon)
  })

  it('Button render without data', () => {
    expect(button.exists()).toBe(true)
  })
})
