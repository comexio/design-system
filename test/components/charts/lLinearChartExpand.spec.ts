import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LLinearChartExpand from '~/src/components/charts/LLinearChartExpand.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const headerFake = ['Posição', 'Empresas', 'Valores', 'Quantidade']

const fakeData = [{
    label: "KUEHNE NAGEL SERVICOS LOGISTICOS LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "AGILITY DO BRASIL LOGISTICA INTERNACIONAL SA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DHL GLOBAL FORWARDING BRAZIL LOGISTICS LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "HAND LINE TRANSPORTES INTERNACIONAIS LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "BLU LOGISTICS BRASIL TRANSPORTES INTERNACIONAIS LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "ASCENSUS TRADING LOGISTICA LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DIAGEO BRASIL LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }
]

const nonClickableItemsFake = [
  'AGILITY DO BRASIL LOGISTICA INTERNACIONAL SA',
  'KUEHNE NAGEL SERVICOS LOGISTICOS LTDA',
  'DHL GLOBAL FORWARDING BRAZIL LOGISTICS LTDA'
]

describe('linearChartExpand component', () => {
  let linearChartExpand: Wrapper<LLinearChartExpand>

  beforeAll(() => {
    linearChartExpand = mount(LLinearChartExpand, {
      ...defaultParams
    })
  })

  it('render without data', () => {
    expect(linearChartExpand.exists()).toBe(true)
  })

  it('render header items', async () => {
    const headerItems = () => linearChartExpand.findAll('.LLinearChartExpand__table__title')
    expect(headerItems().length).toBe(0)
    linearChartExpand.setProps({ headers: headerFake })
    await linearChartExpand.vm.$nextTick()

    expect(headerItems().length).toBe(4)
  })

  it('render header items without cursor pointer', async () => {
    const cursorItems = () => linearChartExpand.findAll('.LLinearChartLine__cursor_pointer')
    linearChartExpand.setProps({ data: fakeData })
    await linearChartExpand.vm.$nextTick()

    expect(cursorItems().length).toBe(0)
  })

  it('render header items with cursor pointer', async () => {
    const cursorItems = () => linearChartExpand.findAll('.LLinearChartLine__cursor_pointer')
    linearChartExpand.setProps({ applyCursorPointer: true })
    await linearChartExpand.vm.$nextTick()

    expect(cursorItems().length).toBe(7)
  })

  it('render list items', async () => {
    await linearChartExpand.vm.$nextTick()

    const lines = () => linearChartExpand.findAll('.LLinearChartExpand__table__line')
    expect(lines().length).toBe(7)
  })

  it('render loading', async () => {
    const loading = () => linearChartExpand.find('.LLinearChartExpand__loading')
    expect(loading().exists()).toBe(false)
    linearChartExpand.setProps({ loading: true })

    await linearChartExpand.vm.$nextTick()
    expect(loading().exists()).toBe(true)
  })

  it('simulate reached to bottom scroll', async () => {
    expect(linearChartExpand.vm.bottom).toBe(false)
    linearChartExpand.setData({ bottom: true })
    await linearChartExpand.vm.$nextTick()
    expect(linearChartExpand.emitted().search).toBeTruthy()
  })

  it('emit expand event', async () => {
    const expandToggle = () => linearChartExpand.find('.LLinearChartExpand__header__action')
    expect(linearChartExpand.emitted().expand).toBeFalsy()
    expandToggle().trigger('click')

    await linearChartExpand.vm.$nextTick()
    expect(linearChartExpand.emitted().expand).toBeTruthy()
  })

  it('emit eventClick', async () => {
    const eventClick = () => linearChartExpand.find('.LLinearChartLine__cursor_pointer')

    await linearChartExpand.vm.$nextTick()
    eventClick().trigger('click')
    expect(linearChartExpand.emitted().eventClick).toBeTruthy()
  })

  it('checks default value for props showToolTip', async () => {
    expect(linearChartExpand.vm.showToolTip).toBe(false)
  })
})

const fakeDataWithToolTipContent = [{
  label: "This Is a Label",
  percentage: 6,
  quantity: 1,
  total: "81",
  value: "3.208.864,00",
  toolTipContent: 'One message'
}, {
  label: "Another Label",
  percentage: 6,
  quantity: 1,
  total: "81",
  value: "3.208.864,00",
  toolTipContent: 'Another message'
}
]

describe('linearChartExpand component with data to show in ToolTip', () => {
  let linearChartExpand: Wrapper<LLinearChartExpand>

  beforeAll(() => {
    linearChartExpand = mount(LLinearChartExpand, {
      ...defaultParams,
      propsData: {
        data: fakeDataWithToolTipContent,
        showToolTip: true
      }
    })
  })
  it('checks default value for props showToolTip', async () => {
    expect(linearChartExpand.vm.showToolTip).toBe(true)
  })
  it('checks tooltip items ', async () => {
    const toolTips = () => linearChartExpand.findAllComponents({ name: 'v-tooltip' })
    await linearChartExpand.vm.$nextTick()

    expect(toolTips().length).toBe(2)
    expect(linearChartExpand.vm.data[0].toolTipContent).toBe('One message')
  })

  it('check if have non clickable items',  () =>{
    linearChartExpand.setProps({ nonClickableItems: nonClickableItemsFake, applyCursorPointer: true})
    const isClickableFalseOne= linearChartExpand.vm.isClickable(fakeData[0])
    const isClickableFalseTwo = linearChartExpand.vm.isClickable(fakeData[1])
    const isClickableFalseTree = linearChartExpand.vm.isClickable(fakeData[2])
    const isClickableTrueOne = linearChartExpand.vm.isClickable(fakeData[3])
    const isClickableTrueTwo = linearChartExpand.vm.isClickable(fakeData[4])
    const isClickableTrueTree = linearChartExpand.vm.isClickable(fakeData[5])

    expect(isClickableFalseOne).toBeFalsy()
    expect(isClickableFalseTwo).toBeFalsy()
    expect(isClickableFalseTree).toBeFalsy()
    expect(isClickableTrueOne).toBeTruthy()
    expect(isClickableTrueTwo).toBeTruthy()
    expect(isClickableTrueTree).toBeTruthy()
  })
})
