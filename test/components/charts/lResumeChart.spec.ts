import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LResumeChart from '~/src/components/charts/LResumeChart.vue'


const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    data: [{
      title: 'Registro 1',
      description: '1000'
    },
    {
      title: 'Registro 2',
      description: '2000'
    },
    {
      title: 'Registro 3',
      description: '3000'
    }],
    title: 'Titulo',
    description: 'Descrição'
  }
}

describe('LResumeChart component', () => {
  let resumeChart: Wrapper<LResumeChart>

  beforeAll(() => {
    resumeChart = mount(LResumeChart, {
      ...defaultParams,
    })
  })

  // it('render header', () => {
  //   const title = () => resumeChart.find('.LCardHeader__title')
  //   const description = () => resumeChart.find('.LCardHeader__subtitle')

  //   expect(title().exists()).toBe(true)
  //   expect(title().text()).toBe('Titulo')
  //   expect(description().exists()).toBe(true)
  //   expect(description().text()).toBe('Descrição')
  // })

  it('render list', () => {
    const lines = () => resumeChart.findAll('.resumeLine')
    expect(lines().length).toBe(3)
    expect(lines().at(0).find('.resumeLine__title').text()).toBe('Registro 1')
    expect(lines().at(0).find('.resumeLine__description').text()).toBe('1000')
  })
})
