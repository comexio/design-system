import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LSelectNamed from '~/src/components/inputs/LSelectNamed.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  sync: false,
  ...setupDefault
}

const fakeItems = [{
  value: 'one',
  text: 'One'
}, {
  value: 'two',
  text: 'Two'
}, {
  value: 'three',
  text: 'Three'
}]

describe('selectNamed component', () => {
  addElemWithDataAppToBody()
  let selectNamed: Wrapper<LSelectNamed>

  beforeAll(() => {
    selectNamed = mount(LSelectNamed, {
      ...defaultParams,
    })
  })

  it('render component without data', () => {
    expect(selectNamed.exists()).toBe(true)
  })

  it('click to open list', async () => {
    const input = () => selectNamed.find('.v-input__slot')
    const selectList = () => selectNamed.find('.v-select-list')
    input().trigger('click')

    await selectNamed.vm.$nextTick()

    expect(selectList().exists()).toBe(true)
  })

  it('render items', async () => {
    selectNamed.setProps({ items: fakeItems })

    await selectNamed.vm.$nextTick()

    const listItems = () => selectNamed.findAll('.v-list-item')
    expect(listItems().length).toBe(3)
  })

  it('select item', async () => {
    const listItems = () => selectNamed.findAll('.v-list-item')
    const firstItem = () => listItems().at(0)
    firstItem().trigger('click')

    await selectNamed.vm.$nextTick()

    expect(selectNamed.emitted().input).toEqual([["one"]])
  })
})

describe('renders component when is disabled', () => {
  addElemWithDataAppToBody()
  let selectNamed: Wrapper<LSelectNamed>

  beforeAll(() => {
    selectNamed = mount(LSelectNamed, {
      ...defaultParams,
      propsData: {
        disabled: true,
        items: [],
        value: 0
      }
    })
  })

  it('sets disabled style when disabled prop is true', async () => {
    const isDisabled = selectNamed.find('.v-input--is-disabled')
    expect(isDisabled.exists()).toBe(true)
  })
})

