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
    label: "ASCENSUS TRADING LOGISTICA LTDA",
    percentage: 30.92,
    quantity: 1,
    total: "360",
    value: "16.535.343,00",
  },
  {
    label: "ASCENSUS TRADING LOGISTICA LTDA",
    percentage: 30.92,
    quantity: 1,
    total: "360",
    value: "16.535.343,00",
  },
  {
    label: "ASCENSUS TRADING LOGISTICA LTDA",
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
    expect(linearChart.find('.LLinearChartLine__result__value--second').text()).toBe('| recordTest: 360')
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
})
