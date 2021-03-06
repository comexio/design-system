import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LLinearChartTotalValue from '~/src/components/charts/LLinearChartTotalValue.vue'

const setupDefault = initSetupComponent()

const data = [{
  label: "filter 01",
  percentage: 100,
  quantity: null,
  value: '4.530,33',
  total: null
}]

const defaultParams = {
  ...setupDefault,
  propsData: {
    data,
    title: 'titulo do grafico',
    totalValue: '890919'
  }
}

describe('linearChartTotalValue component', () => {
  let linearChartTotalValue: Wrapper<LLinearChartTotalValue>

  beforeAll(() => {
    linearChartTotalValue = mount(LLinearChartTotalValue, {
      ...defaultParams
    })
  })

  it('renders component correctly', async () => {
    const value = linearChartTotalValue.find('h1')
    const title = linearChartTotalValue.find('h5')
    const chart = linearChartTotalValue.find('.LLinearChart')

    expect(value.text()).toBe('890919')
    expect(title.text()).toBe('titulo do grafico')
    expect(chart.exists()).toBe(true)
  })

  it('renders chart correctly', async () => {
    const label = linearChartTotalValue.find('.LLinearChartLine__label')
    const value = linearChartTotalValue.find('.LLinearChartLine__result__value--first')


    expect(label.text()).toBe('filter 01')
    expect(value.text()).toBe('__translation__: 4.530,33')
  })
})
