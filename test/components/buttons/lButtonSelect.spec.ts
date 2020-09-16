import { mount, Wrapper } from '@vue/test-utils'
import LButtonSelect from '~/src/components/buttons/LButtonSelect.vue'

describe('LButtonSelect component', () => {
  let button: Wrapper<LButtonSelect>

  beforeAll(() => {
    button = mount(LButtonSelect)
  })

  it('Button render without data', () => {
    expect(button.exists()).toBe(true)
  })
})
