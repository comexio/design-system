import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LTable from '~/src/components/tables/LTable.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const headerDataFake = [
  { text: 'Dessert (100g serving)', value: 'name' },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' }
]

const itemsFake = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0
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
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0
  },
  {
    name: 'KitKat with more than 80 letters to trigger tooltip, so Im putting bulshit to have this quantity of caracters',
    calories: 518,
    fat: 26.0
  }
]



describe('LTable', () => {
  let table: Wrapper<LTable>
  beforeAll(() => {
    table = mount(LTable, {
      ...defaultParams
    })
  })

  it('render table without data', () => {
    expect(table.exists()).toBe(true)
    expect(table.find('.v-data-table__empty-wrapper').text()).toBe('No data available')
  })

  it('render header', async () => {
    table.setProps({ headers: headerDataFake })
    await table.vm.$nextTick()

    const header = () => table.find('.v-data-table-header')
    const headerItems = () => header().findAll('th')
    expect(headerItems().length).toBe(3)
  })

  it('render body', async () => {
    table.setProps({ items: itemsFake })
    await table.vm.$nextTick()

    const lines = () => table.findAll('tbody tr')
    expect(lines().length).toBe(10)
  })

  it('order by column', async () => {
    const headerFirstItem = () => table.find('.v-data-table-header th')
    expect(headerFirstItem().exists()).toBe(true)
    expect(table.vm.options).toEqual({"groupBy": [], "groupDesc": [], "itemsPerPage": 10, "multiSort": false, "mustSort": false, "page": 1, "sortBy": [], "sortDesc": []})
    headerFirstItem().trigger('click')
    await table.vm.$nextTick()
    expect(table.vm.options).toEqual({"groupBy": [], "groupDesc": [], "itemsPerPage": 10, "multiSort": false, "mustSort": false, "page": 1, "sortBy": ["name"], "sortDesc": [false]})
  })

  it('show truncate', async () => {
    table.setProps({ truncateItems: true })
    await table.vm.$nextTick()

    const tooltip = () => table.findComponent({ name: 'v-tooltip' })
    expect(tooltip().exists()).toBe(true)
  })
})
