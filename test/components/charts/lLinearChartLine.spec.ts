import {mount, shallowMount, Wrapper} from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LLinearChartLine from '~/src/components/charts/LLinearChartLine.vue'

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
  let llinearChartLine: Wrapper<LLinearChartLine>

  beforeAll(() => {
    llinearChartLine = shallowMount(LLinearChartLine, {
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
    const item = () => llinearChartLine.findAll('.LLinearChartLine')
    await llinearChartLine.vm.$nextTick()

    expect(item().length).toBe(1)
  })

  it('render item without cursor', async () => {
    const cursor = () => llinearChartLine.findAll('.LLinearChartLine__cursor_pointer')
    await llinearChartLine.vm.$nextTick()

    expect(cursor().exists()).toBeFalsy()
  })
})

describe('linearChartLine component with cursor pointer', () => {
  let llinearChartLine: Wrapper<LLinearChartLine>

  beforeAll(() => {
    llinearChartLine = mount(LLinearChartLine, {
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
    const cursor = () => llinearChartLine.findAll('.LLinearChartLine__cursor_pointer')
    await llinearChartLine.vm.$nextTick()

    expect(cursor().exists()).toBeTruthy()
  })

  it('emit expand eventClick', async () => {
    const eventClick = () => llinearChartLine.find('.LLinearChartLine__cursor_pointer')
    eventClick().trigger('click')

    await llinearChartLine.vm.$nextTick()
    expect(llinearChartLine.emitted().eventClick).toBeTruthy()
  })

  it('render last item', async () => {
    llinearChartLine.setProps({ lastItem: true })
    const cursor = () => llinearChartLine.findAll('.LLinearChartLine__cursor_pointer')
    await llinearChartLine.vm.$nextTick()

    expect(cursor().exists()).toBeFalsy()
  })

  it('emit expand event', async () => {
    const expandToggle = () => llinearChartLine.find('.LLinearChartLine__expand')
    expandToggle().trigger('click')

    await llinearChartLine.vm.$nextTick()
    expect(llinearChartLine.emitted().expand).toBeTruthy()
  })
})
