import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LCircularChart from '~/src/components/charts/LCircularChart.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const itemsFake = [{
  label: 'REEFER',
  percentage: '73.15',
  value: '602',
  options: {
    color: '#6e84c2',
    icon: 'mdi-ferry',
    img: '/images/dashboard/reefer.svg'
  },
  tooltip: {
    label: 'Embarques',
    column: 'value'
  }
}, {
  label: 'DRY',
  percentage: '22.60',
  value: '16.003.153.469',
  options: {
    color: '#f87045',
    icon: 'mdi-ferry',
    img: '/images/dashboard/reefer.svg'
  },
  tooltip: {
    label: 'Embarques',
    column: 'value'
  }
}, {
  label: 'NÃO IDENTIFICADO',
  percentage: '4.13',
  value: '34',
  options: {
    color: '#f87045',
    icon: 'mdi-ferry',
    img: '/images/dashboard/reefer.svg'
  },
  tooltip: {
    label: 'Embarques',
    column: 'value'
  }
}]



describe('circularChart component', () => {
  addElemWithDataAppToBody
  let circularChart: Wrapper<LCircularChart>

  beforeAll(() => {
    circularChart = mount(LCircularChart, {
      ...defaultParams
    })
  })

  it('component rendered without data', () => {
    expect(circularChart.exists()).toBe(true)
  })

  it('component render items', async () => {
    circularChart.setProps({ items: itemsFake })
    const items = () => circularChart.findAll('.LCircularChart__item')

    await circularChart.vm.$nextTick()

    expect(items().length).toBe(3)
  })
})
