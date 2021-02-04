import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LLinearChartExpand from '~/src/components/charts/LLinearChartExpand.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const headerFake = ['Posição', 'Empresas', 'Valores', 'Quantidade']

const fakeData = [{
    label: "Some Company",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "Some Company",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "Some Company",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "Some Company",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "Some Company",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "Some Company",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "Some Company",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }
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

  it('render list items', async () => {
    linearChartExpand.setProps({ data: fakeData })
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

  it('checks default value for props showToolTip', async () => {
    expect(linearChartExpand.vm.showToolTip).toBe(false)
  })
})

const fakeDataWithToolTipContent = [{
  label: "Some Company",
  percentage: 6,
  quantity: 1,
  total: "81",
  value: "3.208.864,00",
  toolTipContent: 'One message'
}, {
  label: "Another Company",
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
})
