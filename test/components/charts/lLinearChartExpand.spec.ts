import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LLinearChartExpand from '~/src/components/charts/LLinearChartExpand.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const headerFake = ['Posição', 'Empresas', 'Valores', 'Quantidade']

const fakeData = [{
    label: "DIAGEO BRASIL LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DIAGEO BRASIL LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DIAGEO BRASIL LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DIAGEO BRASIL LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DIAGEO BRASIL LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DIAGEO BRASIL LTDA",
    percentage: 6,
    quantity: 1,
    total: "81",
    value: "3.208.864,00"
  }, {
    label: "DIAGEO BRASIL LTDA",
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

  it('render header items without cursor pointer', async () => {
    const cursorItems = () => linearChartExpand.findAll('.LLinearChartLine__cursor_pointer')
    linearChartExpand.setProps({ data: fakeData })
    await linearChartExpand.vm.$nextTick()

    expect(cursorItems().length).toBe(0)
  })

  it('render header items with cursor pointer', async () => {
    const cursorItems = () => linearChartExpand.findAll('.LLinearChartLine__cursor_pointer')
    linearChartExpand.setProps({ applyCursorPointer: true })
    await linearChartExpand.vm.$nextTick()

    expect(cursorItems().length).toBe(7)
  })

  it('render list items', async () => {
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

  it('emit eventClick', async () => {
    const eventClick = () => linearChartExpand.find('.LLinearChartLine__cursor_pointer')

    await linearChartExpand.vm.$nextTick()
    eventClick().trigger('click')
    expect(linearChartExpand.emitted().eventClick).toBeTruthy()
  })
})
