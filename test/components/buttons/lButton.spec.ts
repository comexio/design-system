import { mount, Wrapper } from '@vue/test-utils'
import LButton from '~/src/components/buttons/LButton.vue'

describe('Button component', () => {
  let button: Wrapper<LButton>

  beforeAll(() => {
    button = mount(LButton)
  })

  it('Button render without data', () => {
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe("")
  })

  it('component render props', async () => {
    button.setProps({ iconValue: 'mdi-chart-pie', label: 'Texto' })

    await button.vm.$nextTick()

    expect(button.find('.v-icon').exists()).toBe(true)
    expect(button.text()).toBe('Texto')
  })
})
