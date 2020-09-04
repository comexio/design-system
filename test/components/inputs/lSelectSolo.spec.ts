import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LSelectSolo from '~/src/components/inputs/LSelectSolo.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  sync: false,
  ...setupDefault,
  data () {
    return {
      items: []
    }
  }
}

describe('selectSolo component', () => {
  addElemWithDataAppToBody()
  let selectSolo: Wrapper<LSelectSolo>

  beforeAll(() => {
    selectSolo = mount(LSelectSolo, {
      ...defaultParams
    })
  })

  it('selectSolo render without data', () => {
    expect(selectSolo.exists()).toBe(true)
  })

  it('click to open list', async () => {
    const input = () => selectSolo.find('.v-input__slot')
    const selectList = () => selectSolo.find('.v-select-list')
    input().trigger('click')

    await selectSolo.vm.$nextTick()

    expect(selectList().exists()).toBe(true)
  })

  it('render without items', async () => {
    const input = () => selectSolo.find('.v-input__slot')
    const selectListItems = () => selectSolo.findAll('.v-list-item')
    input().trigger('click')

    await selectSolo.vm.$nextTick()

    expect(selectListItems().length).toBe(1)
    expect(selectListItems().at(0).text()).toBe('No data available')
  })

  it('render with items', async () => {
    const input = () => selectSolo.find('.v-input__slot')
    selectSolo.setProps({ items: ['ncm', 'descricao'] })
    const selectListItems = () => selectSolo.findAll('.v-list-item')
    input().trigger('click')

    await selectSolo.vm.$nextTick()

    expect(selectListItems().length).toBe(2)
  })

  it('select item', async () => {
    const listItems = () => selectSolo.findAll('.v-list-item')
    const firstItem = () => listItems().at(0)
    firstItem().trigger('click')

    await selectSolo.vm.$nextTick()

    expect(selectSolo.emitted().input).toEqual([["ncm"]])
  })
})
