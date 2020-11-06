import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LRouteChart from '~/src/components/charts/LRouteChart.vue'


const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    title: 'Titulo',
    description: 'Descrição'
  }
}

const linesData = [
  {
    number: '60%',
    values: ['Santos', 'Norfolk', 'Port Everglades']
  },
  {
    number: '20%',
    values: ['Umuarama', 'Bosque Uirapuru', 'Porto do mané']
  }
]

describe('LRouteChart component', () => {
  let routeChart: Wrapper<LRouteChart>

  beforeEach(() => {
    routeChart = mount(LRouteChart, {
      ...defaultParams
    })
  })

  it('render without data', () => {
    const header = () => routeChart.findComponent({ name: 'LRouteChartHeader' })
    const lines = () => routeChart.findComponent({ name: 'LRouteChartLine' })
    expect(header().exists()).toBe(false)
    expect(lines().exists()).toBe(false)
  })

  it('render header', async () => {
    routeChart.setProps({ header: ["Porto de Origem","Porto de Descarga","Porto de Destino"] })
    await routeChart.vm.$nextTick()

    const headerItems = () => routeChart.findAll('.LRouteChart__header__item')
    expect(headerItems().length).toBe(3)

    const lastHeaderItem = () => headerItems().at(2)

    expect(lastHeaderItem().find('.v-icon').exists()).toBe(false)
  })

  it('render lines', async () => {
    routeChart.setProps({ lines: linesData })
    await routeChart.vm.$nextTick()

    const lines = () => routeChart.findAllComponents({ name: 'LRouteChartLine' })
    expect(lines().length).toBe(2)
    const firstLine = () => lines().at(0)
    expect(firstLine().find('.LRouteChart__line__item--number').text()).toBe('60%')
    expect(firstLine().find('.LRouteChart__line__item--number').text()).toBe('60%')
    expect(firstLine().find('.LRouteChart__line__item--text').text()).toBe('Santos')
  })
})
