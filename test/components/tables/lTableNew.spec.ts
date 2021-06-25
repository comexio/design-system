import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LTableNew from '~/src/components/tables/LTableNew.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const headerDataFake = [
  { text: 'Dessert (100g serving)', value: 'name' },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Download', value: 'download' }
]

const itemsFake = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2
  }
]

describe('LTableNew', () => {
  let table: Wrapper<LTableNew>
  beforeAll(() => {
    table = mount(LTableNew, {
      ...defaultParams,
      scopedSlots: {
        'item.calories': '<p slot-scope="item.calories">external content</p>'
      }
    })
  })

  it('renders LTableNew', () => {
    expect(table.exists()).toBe(true)
    expect(table.find('.v-data-table__empty-wrapper').text()).toBe('No data available')
  })

  it('renders header', async () => {
    table.setProps({ headers: headerDataFake })
    await table.vm.$nextTick()

    const header = () => table.find('.v-data-table-header')
    const headerItems = () => header().findAll('th')
    expect(headerItems().length).toBe(4)
  })

  it('renders body', async () => {
    table.setProps({ items: itemsFake })
    await table.vm.$nextTick()

    const lines = () => table.findAll('tbody tr')
    expect(lines().length).toBe(3)
  })

  it('check renders of slots', () => {
    const firstLine = () => table.find('tbody tr')
    const secondCeil = () => firstLine().findAll('td').at(1)
    expect(secondCeil().text()).toBe('external content')
  })
})

describe('LTableNew', () => {
  let table: Wrapper<LTableNew>
  beforeAll(() => {
    table = mount(LTableNew, {
      ...defaultParams,
      propsData: {
        headers: headerDataFake,
        items: itemsFake
      },
      scopedSlots: {
        'item.calories': '<p slot-scope="item.calories">external content</p>'
      },
      attrs: {
        'show-select': true
      }
    })
  })

  it('renders checkbox list', () => {
    const checkboxList = () => table.findAll('.v-data-table__checkbox')
    expect(checkboxList().length).toBe(4)
  })

  it('check if was emitted on click checkbox', async () => {
    const checkbox = () => table.find('.v-data-table__checkbox')

    checkbox().trigger('click')
    await table.vm.$nextTick()

    expect(table.emitted('input')).toBeTruthy()
  })
})
