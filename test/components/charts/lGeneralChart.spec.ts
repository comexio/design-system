import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LGeneralChart from '~/src/components/charts/LGeneralChart.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    data: { total: 394030 },
    subtitle: 'test teus subtitle'
  }
}

describe('LGeneralChart component', () => {
  let chart: Wrapper<LGeneralChart>

  beforeAll(() => {
    chart = mount(LGeneralChart, {
      ...defaultParams
    })
  })

  it('component exists', () => {
    expect(chart.exists()).toBeTruthy()
  })

  it('component total value', () => {
    const title = () => chart.find('.LGeneralChart__value')

    expect(title().exists()).toBeTruthy()
    expect(title().text()).toBe('394030')
  })

  it('component total value with type', async () => {
    chart.setProps({ typeValue: 'TEUS' })
    const title = () => chart.find('.LGeneralChart__value')

    await chart.vm.$nextTick()

    expect(title().text()).toBe('394030 TEUS')
  })

  it('component image', async () => {
    chart.setProps({ image: 'image.svg' })
    const img = () => chart.find('.LGeneralChart__image')

    await chart.vm.$nextTick()

    expect(img().exists()).toBeTruthy()
  })

  it('component subtitle', () => {
    const subtitle = () => chart.find('.LGeneralChart__subtitle')

    expect(subtitle().exists()).toBeTruthy()
    expect(subtitle().text()).toBe('test teus subtitle')
  })
})
