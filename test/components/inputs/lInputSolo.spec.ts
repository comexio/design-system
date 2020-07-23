import { mount, Wrapper } from '@vue/test-utils'
import LInputSolo from '@/src/components/inputs/LInputSolo.vue'

const push = jest.fn()

describe('inputSolo component', () => {
  let inputSolo: Wrapper<LInputSolo>

  beforeAll(() => {
    inputSolo = mount(LInputSolo, {
      mocks: {
        $emit: push
      }
    })
  })

  it('inputSolo render without data', () => {
    expect(inputSolo.exists()).toBe(true)
  })

  it('inputSolo show text by props', async () => {
    const textField = () => inputSolo.find('.inputSolo')
    inputSolo.setProps({ value: 'text' })
    await inputSolo.vm.$nextTick()

    expect(textField().props().value).toBe('text')
  })

  it('inputSolo emit value input change', async () => {
    expect(push).toHaveBeenCalledTimes(0)
    const textField = () => inputSolo.find('.inputSolo')
    textField().vm.$emit('input', 'newText')

    await inputSolo.vm.$nextTick()

    expect(push).toHaveBeenCalledTimes(1)
  })
})
