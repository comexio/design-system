import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LLinearChart from '~/src/components/charts/LLinearChart.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    type: 'unit'
  }
}

const dataFake = [{
    label: "ASCENSUS TRADING LOGISTICA LTDA",
    percentage: 30.92,
    quantity: 1,
    total: "360",
    value: "16.535.343,00",
  },
  {
    label: "KUEHNE NAGEL SERVICOS LOGISTICOS LTDA",
    percentage: 30.92,
    quantity: 1,
    total: "360",
    value: "16.535.343,00",
  },
  {
    label: "SCHENKER DO BRASIL TRANSPORTES INTERNACIONAIS LTDA",
    percentage: 30.92,
    quantity: 1,
    total: "360",
    value: "16.535.343,00",
  },
  {
    label: "AGILITY DO BRASIL LOGISTICA INTERNACIONAL SA",
    percentage: 30.92,
    quantity: 1,
    total: "360",
    value: "16.535.343,00",
  },
  {
    label: "Outros",
    percentage: 31.35,
    quantity: 61,
    total: "1.483",
    value: "16.763.660,00",
  }
]

const nonClickableItemsFake = [
  'ASCENSUS TRADING LOGISTICA LTDA'
]

describe('linearChart component', () => {
  let linearChart: Wrapper<LLinearChart>

  beforeAll(() => {
    linearChart = mount(LLinearChart, {
      ...defaultParams
    })
  })

  it('render component without data', () => {
    expect(linearChart.exists()).toBe(true)
  })

  it('render list items', async () => {
    linearChart.setProps({ data: dataFake })
    await linearChart.vm.$nextTick()

    const items = () => linearChart.findAllComponents({ name: 'LLinearChartLine' })
    expect(items().length).toBe(5)
  })

  it('test translation object', async () => {
    linearChart.setProps({ translationLine: {
      value: 'valueTest',
      records: 'recordTest',
      seeMore: 'seeMoreTest'
    }})

    await linearChart.vm.$nextTick()

    expect(linearChart.find('.LLinearChartLine__expand').text()).toBe('seeMoreTest')
    expect(linearChart.find('.LLinearChartLine__result__value--first').text()).toBe('valueTest: 16.535.343,00')
    expect(linearChart.find('.LLinearChartLine__result__value--second').text()).toBe('recordTest: 360')
  })

  it('emit expand list', async () => {
    const expandButton = () => linearChart.find('.LLinearChartLine__expand')
    expect(expandButton().exists()).toBe(true)
    expect(linearChart.emitted().expandList).toBeFalsy()
    expandButton().trigger('click')

    await linearChart.vm.$nextTick()
    expect(linearChart.emitted().expandList).toEqual([['unit']])
  })

  it('checks default value for props showToolTip', async () => {
    expect(linearChart.vm.showToolTip).toBe(false)
  })

  it('respects max length allowed for labels', async () => {
    linearChart.setProps({labelMaxLength: 5})
    await linearChart.vm.$nextTick()
    expect(linearChart.find('.LLinearChartLine__label').text()).toBe('ASCEN...')
  })

  it('check if have non clickable items',  () =>{
    linearChart.setProps({ nonClickableItems: nonClickableItemsFake, applyCursorPointer: true})
    const isClickableFalse = linearChart.vm.isClickable(dataFake[0])
    const isClickableTrue = linearChart.vm.isClickable(dataFake[1])

    expect(isClickableFalse).toBeFalsy()
    expect(isClickableTrue).toBeTruthy()
  })
})

describe('linearChart component', () => {
  let linearChart: Wrapper<LLinearChart>

  beforeAll(() => {
    linearChart = mount(LLinearChart, {
      ...setupDefault,
      propsData: {
        data: dataFake,
        magnifyItemsQuantity: 2,
        labelMaxLength: 5,
        isExpanded: false,
        maxQuantity: 5
      }
    })
  })

  it('check if magnify is showed', async () => {
    const items = () => linearChart.findAll('.magnify_button')
    expect(items().length).toBe(2)
  })

  it('check if magnify click emit function call', async () => {
    const items = () => linearChart.findAll('.magnify_button')
    expect(items().length).toBe(2)
    expect(linearChart.emitted()['linear-chart-item-detail']).toBeFalsy()
    items().at(0).trigger('click')
    await linearChart.vm.$nextTick()
    expect(linearChart.emitted()['linear-chart-item-detail']).toBeTruthy()
  })

  it('check if magnify is not showed', async () => {
    linearChart.setProps({magnifyItemsQuantity: 0})
    await linearChart.vm.$nextTick()
    const items = () => linearChart.findAll('.magnify_button')
    expect(items().length).toBe(0)
  })
})
