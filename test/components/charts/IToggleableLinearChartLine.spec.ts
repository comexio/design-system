import {mount, shallowMount, Wrapper} from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LToggleableLinearChartLine from '~/src/components/charts/LToggleableLinearChartLine.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const fakeData = {
  label: "DIAGEO BRASIL LTDA",
  percentage: 6,
  quantity: 1,
  total: "81",
  value: "3.208.864,00"
}

describe('linearChartLine component', () => {
  let llinearChartLine: Wrapper<LToggleableLinearChartLine>

  beforeAll(() => {
    llinearChartLine = shallowMount(LToggleableLinearChartLine, {
      ...defaultParams,
      propsData: {
        data: fakeData,
        magnifyItemsQuantity: 1,
        lastItem: false,
        index: 0
      }
    })
  })

  it('render without data', () => {
    expect(llinearChartLine.exists()).toBe(true)
  })

  it('render item', async () => {
    const item = () => llinearChartLine.findAll('.LToggleableLinearChartLine')
    await llinearChartLine.vm.$nextTick()

    expect(item().length).toBe(1)
  })

  it('render item without cursor', async () => {
    const cursor = () => llinearChartLine.findAll('.LToggleableLinearChartLine__label--clickable')
    await llinearChartLine.vm.$nextTick()

    expect(cursor().exists()).toBeFalsy()
  })
})

describe('linearChartLine component with cursor pointer', () => {
  let llinearChartLine: Wrapper<LToggleableLinearChartLine>

  beforeAll(() => {
    llinearChartLine = mount(LToggleableLinearChartLine, {
      ...defaultParams,
      propsData: {
        data: fakeData,
        isTagChart: false,
        applyCursorPointer: true,
        lastItem: false,
        isExpanded: false,
        isExpandable: true
      }
    })
  })

  it('render item with cursor', async () => {
    const cursor = () => llinearChartLine.findAll('.LToggleableLinearChartLine__label--clickable')
    await llinearChartLine.vm.$nextTick()

    expect(cursor().exists()).toBeTruthy()
  })

  it('emit expand eventClick', async () => {
    const eventClick = () => llinearChartLine.find('.LToggleableLinearChartLine__label--clickable')
    eventClick().trigger('click')

    await llinearChartLine.vm.$nextTick()
    expect(llinearChartLine.emitted().eventClick).toBeTruthy()
  })

  it('render last item', async () => {
    llinearChartLine.setProps({ lastItem: true })
    const cursor = () => llinearChartLine.findAll('.LToggleableLinearChartLine__label--clickable')
    await llinearChartLine.vm.$nextTick()

    expect(cursor().exists()).toBeFalsy()
  })

  it('emit expand event', async () => {
    const expandToggle = () => llinearChartLine.find('.LToggleableLinearChartLine__expand')
    expandToggle().trigger('click')

    await llinearChartLine.vm.$nextTick()
    expect(llinearChartLine.emitted().expand).toBeTruthy()
  })
})