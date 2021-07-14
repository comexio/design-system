import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LInputLoaded from '~/src/components/inputs/LInputLoaded.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  sync: false,
  ...setupDefault
}

const fakeItems = ['Curitiba', 'Floripa', 'Umuarama']

describe('InputLoaded component (default)', () => {
  addElemWithDataAppToBody()
  let inputLoaded: Wrapper<LInputLoaded>

  beforeAll(() => {
    inputLoaded = mount(LInputLoaded, {
      ...defaultParams,
      propsData: {
        field: 'myField'
      }
    })
  })

  it('render component without data', () => {
    expect(inputLoaded.exists()).toBe(true)
  })


  it('getItems emitted correctly', () => {
    expect(inputLoaded.emitted().getItems[0]).toEqual([{ field: 'myField' }])
  })

  it('render component with correct icon and without extra field', () => {
    expect(inputLoaded.findComponent({ name: 'v-icon' }).classes()).toContain('mdi-chevron-down')
    expect(inputLoaded.find('.LInputLoaded__search--information').exists()).toBe(false)
  })

  it('select item from list', async () => {
    inputLoaded.setProps({ items: fakeItems })
    await inputLoaded.vm.$nextTick()

    expect(inputLoaded.vm.items.length).toBe(3)

    inputLoaded.findComponent({ name: 'v-combobox' }).vm.selectItem(fakeItems[0])
    await inputLoaded.vm.$nextTick()

    expect(inputLoaded.vm.selectedOptions).toBe(fakeItems[0])
  })

  it('search item and select', async () => {
    inputLoaded.find('.v-input__slot').trigger('click')

    await inputLoaded.vm.$nextTick()

    const input = () => inputLoaded.find('.LInputLoaded')
    input().vm.$emit('input', 'flo')

    await inputLoaded.vm.$nextTick()

    inputLoaded.findComponent({ name: 'v-combobox' }).vm.selectItem(fakeItems[1])

    await inputLoaded.vm.$nextTick()

    expect(inputLoaded.vm.searchInput).toBe(fakeItems[1])
  })
})

describe('InputLoaded component (searchOnInput)', () => {
  addElemWithDataAppToBody()
  let inputLoaded: Wrapper<LInputLoaded>

  beforeAll(() => {
    inputLoaded = mount(LInputLoaded, {
      ...defaultParams,
      propsData: {
        searchOnInput: true,
        items: [],
        value: 'myValue',
        field: 'myField',
        returnObjectArray: true
      }
    })
  })

  const input = () => inputLoaded.find('.LInputLoaded')
  const mockInputResult = [{ text: 'testInput', value: 'testInput' }]

  it('render searchOnInput variant correctly', async () => {
    expect(inputLoaded.props('searchMinCharacteres')).toBe(3)

    const extraField = inputLoaded.find('.LInputLoaded__search--information')
    expect(extraField.exists()).toBe(false)
  })

  it('shows information field when input is focused', async () => {
    inputLoaded.findComponent({ name: 'v-combobox' }).vm.$emit('focus')
    await inputLoaded.vm.$nextTick()

    const extraField = inputLoaded.find('.LInputLoaded__search--information')
    expect(extraField.exists()).toBe(true)
    expect(extraField.text()).toBe('__translation__')
  })

  it('hides information field when input is blurred', async () => {
    inputLoaded.findComponent({ name: 'v-combobox' }).vm.$emit('blur')
    await inputLoaded.vm.$nextTick()

    const extraField = inputLoaded.find('.LInputLoaded__search--information')
    expect(extraField.exists()).toBe(false)
  })

  it('getItems emitted correctly', () => {
    expect(inputLoaded.emitted().getItems[0]).toEqual([{ field: 'myField', value: 'myValue' }])
  })

  it('handles text input', async () => {
    input().vm.$emit('input', 'testInput')
    await inputLoaded.vm.$nextTick()

    expect(inputLoaded.emitted().input[0]).toEqual(mockInputResult)
  })

  it('handles array input', async () => {
    input().vm.$emit('input', { value: ['test'], field: 'myField' })
    await inputLoaded.vm.$nextTick()

    expect(inputLoaded.emitted().input[0]).toEqual(mockInputResult)
  })

  it('handles object input', async () => {
    input().vm.$emit('input', { value: { text: 'test', value: 'test' }, field: 'myField' })
    await inputLoaded.vm.$nextTick()

    expect(inputLoaded.emitted().input[0]).toEqual(mockInputResult)
  })
})

describe('InputLoaded component (searchOnInput)', () => {
  addElemWithDataAppToBody()
  let inputLoaded: Wrapper<LInputLoaded>

  beforeAll(() => {
    inputLoaded = mount(LInputLoaded, {
      ...defaultParams,
      propsData: {
        searchOnInput: true,
        items: [],
        value: 'myValue',
        field: 'myField',
        outlined: true,
        showInformation: false,
        hideDetails: false,
        message: 'testMessage'
      }
    })
  })

  it('renders component', async () => {
    expect(inputLoaded.exists()).toBe(true)
  })

  it('sets outlined style', async () => {
    expect(inputLoaded.find('.v-text-field--outlined').exists()).toBe(true)
  })

  it('renders searchOnInput variant correctly', async () => {
    const tag = inputLoaded.attributes()

    expect(tag.message).toBe('testMessage')
  })
})
