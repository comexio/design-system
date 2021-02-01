import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import BarChart from '~/src/components/charts/LBarChart.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    description: "Valor total importado por NCM",
    descriptionClass: "",
    error: null,
    hasTitle: true,
    legend: [],
    loading:false,
    loadingExpand:false,
    scroller:null,
    title:"NCM",
    hoverColor: '#F1E8FF',
    othersLabel: 'Outros (4.593)'
  }
}

const barChartData = [{
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510",
  percentage: 59.37
}, {
  title:"2208.30.20",
  description: " UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS",
  quantity: "4.593",
  total: "32.873.626,5510"
}]

describe('barChart component', () => {
  addElemWithDataAppToBody()
  let barChart: Wrapper<BarChart>

  beforeAll(() => {
    barChart = mount(BarChart, {
      ...defaultParams
    })
  })

  it('barChart render without data', () => {
    const listItens = () => barChart.findAll('.LBarChart__list__item')
    expect(listItens().length).toBe(0)
  })

  it('barChart rendered', async () => {
    barChart.setProps({ data: barChartData.slice(0, 1) })
    await barChart.vm.$nextTick()

    const listItens = () => barChart.findAll('.LBarChart__list__item')
    expect(listItens().length).toBe(1)

    const firstItem = () => listItens().at(0)
    const title = () => firstItem().find('.LBarChart__title')
    const description = () => firstItem().find('.LBarChart__description')
    const progress = () => firstItem().findComponent({ name: 'v-progress-linear' })
    expect(title().text()).toBe('2208.30.20')
    expect(description().text()).toBe('UÍSQUES, EM EMBALAGENS DE CAPACIDADE INFERIOR OU IGUAL A 2 LITROS')
    expect(progress().text()).toBe('32.873.626,5510 USD')

    const cb = jest.fn()
    const tooltips = () => barChart.findAllComponents({ name: 'v-tooltip' })
    expect(tooltips().length).toBe(2)

    const tooltipProgressBar = () => tooltips().at(1)

    tooltipProgressBar().vm.$on('input', cb)
    tooltipProgressBar().setData({ isActive: true })

    await barChart.vm.$nextTick()
    const value = () => tooltipProgressBar().findAll('.customTooltip__info').at(0)
    const boardings = () => tooltipProgressBar().findAll('.customTooltip__info').at(1)
    expect(value().text()).toBe('__translation__: 32.873.626,5510 USD')
    expect(boardings().text()).toBe('__translation__: 4.593')

    expect(cb).toHaveBeenCalled()
  })

  it('barChart rendered without title', async () => {
    barChart.setProps({ hasTitle: null })
    await barChart.vm.$nextTick()
    expect(barChart.find('.LBarChart__title').exists()).toBeFalsy()
  })

  it('barChart rendered hover', async () => {
    const firstItem = () => barChart.find('.LBarChart__list__item')
    const progress = () => firstItem().findComponent({ name: 'v-progress-linear' })
    const chartLine = () => barChart.findComponent({ name: 'LBarChartLine' })
    chartLine().setData({ hoverProgressBar: true })

    await barChart.vm.$nextTick()
    expect(progress().props().backgroundColor).toBe('#F1E8FF')
  })

  it('barChart rendered all items', async () => {
    barChart.setProps({ data: barChartData })
    await barChart.vm.$nextTick()

    const listItens = () => barChart.findAll('.LBarChart__list__item')
    expect(listItens().length).toBe(10)

    const lastItem = () => listItens().at(9)
    expect(lastItem().find('.LBarChart__title').exists()).toBe(false)
    expect(lastItem().find('.LBarChart__description').text()).toBe('Outros (4.593)')
  })

  it('barChart toggle last item', async () => {
    barChart.setProps({ maxQuantity: 9, toggleLast: true })
    await barChart.vm.$nextTick()

    const lastItemToggle = () => barChart.find('.LBarChart__description__toggle')
    expect(lastItemToggle().exists()).toBe(true)
    lastItemToggle().trigger('click')

    await barChart.vm.$nextTick()
    expect(barChart.emitted().toggleLast).toBeTruthy()
  })
})
