import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LInputLoaded from '~/src/components/inputs/LInputLoaded.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  sync: false,
  ...setupDefault
}

const fakeItems = ['Curitiba', 'Floripa', 'Umuarama']

describe('InputLoaded component', () => {
  addElemWithDataAppToBody()
  let inputLoaded: Wrapper<LInputLoaded>

  beforeAll(() => {
    inputLoaded = mount(LInputLoaded, {
      ...defaultParams,
    })
  })

  it('render component without data', () => {
    expect(inputLoaded.exists()).toBe(true)
  })

  it('change field and getItems', async () => {
    inputLoaded.setProps({ field: 'city' })

    await inputLoaded.vm.$nextTick()

    expect(inputLoaded.emitted().getItems[1]).toEqual([{ field: 'city' }])
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
