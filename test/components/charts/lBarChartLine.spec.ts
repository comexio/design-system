import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LBarChartLine from '~/src/components/charts/LBarChartLine.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const dataMock = {
  description: 'OUTROS VINHOS, MOSTOS DE UVAS, FERMENTADOS, IMPEDIDOS ÁLCOOL, EM RECIPIENTES DE CAPACIDADE NÃO SUPERIOR A 2 LITROS',
  percentage: 61.43,
  quantity: '23.731',
  title: '2204.21.00',
  total: '116.613.349,5174'
}

describe('LBarChartLine only with data', () => {
  addElemWithDataAppToBody()
  let barChartLine: Wrapper<LBarChartLine>

  beforeAll(() => {
    barChartLine = mount(LBarChartLine, {
      ...defaultParams,
      propsData: {
        data: dataMock
      }
    })
  })

  it('renders description without title', () => {
    const title = () => barChartLine.find('.LBarChart__description')
    expect(title().text()).toBe(dataMock.description)
  })
})

describe('LBarChartLine with data and hasTitle property', () => {
  addElemWithDataAppToBody()
  let barChartLine: Wrapper<LBarChartLine>

  beforeAll(() => {
    barChartLine = mount(LBarChartLine, {
      ...defaultParams,
      propsData: {
        data: dataMock,
        hasTitle: true
      }
    })
  })

  it('renders description', () => {
    const description = () => barChartLine.find('.LBarChart__description')
    expect(description().text()).toBe(dataMock.description)
  })

  it('renders title', () => {
    barChartLine.setProps({ hasTitle: true })
    const title = () => barChartLine.find('.LBarChart__title')
    expect(title().text()).toBe(dataMock.title)
  })
})

describe('LBarChartLine with data, hasTitle, toggleLast and isLastItem', () => {
  addElemWithDataAppToBody()
  let barChartLine: Wrapper<LBarChartLine>

  beforeAll(() => {
    barChartLine = mount(LBarChartLine, {
      ...defaultParams,
      propsData: {
        data: dataMock,
        hasTitle: true,
        isLastItem: true,
        toggleLast: true,
        othersLabel: 'Outros'
      }
    })
  })

  it('renders description', () => {
    const description = () => barChartLine.find('.LBarChart__description')
    expect(description().text()).toBe('__translation__')
  })

  it('renders title', () => {
    barChartLine.setProps({ hasTitle: true })
    const title = () => barChartLine.find('.LBarChart__title')
    expect(title().text()).toBe('Outros')
  })
})
