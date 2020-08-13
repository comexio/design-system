import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LSelectSolo from '~/src/components/inputs/LSelectSolo.vue'

const emitPush = jest.fn()
const setupDefault = initSetupComponent()
const defaultParams = {
  sync:false,
  ...setupDefault,
  data () {
    return {
      items: []
    }
  },
  mocks: {
    ...setupDefault.mocks,
    $emit: emitPush
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
})
