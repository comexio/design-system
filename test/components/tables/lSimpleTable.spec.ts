import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LSimpleTable from '~/src/components/tables/LSimpleTable.vue'

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
    fat: 6.0,
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
  },
  {
    name: 'Cookies is just another item to make it have more than 10',
    calories: 536,
    fat: 56.0
  }
]

describe('LTable', () => {
  let table: Wrapper<LSimpleTable>
  beforeAll(() => {
    table = mount(LSimpleTable, {
      ...defaultParams
    })
  })

  it('render table without data', () => {
    expect(table.exists()).toBe(true)
    expect(table.find('.v-data-table__wrapper').text()).toBe('')
  })

  it('render header', async () => {
    table.setProps({ headers: headerDataFake })
    await table.vm.$nextTick()

    const header = () => table.find('.v-data-table__wrapper')
    const headerItems = () => header().findAll('th')
    expect(headerItems().length).toBe(4)
  })

  it('render body', async () => {
    table.setProps({ data: itemsFake })
    await table.vm.$nextTick()

    const lines = () => table.findAll('tbody tr')
    expect(lines().length).toBe(11)
  })

  it('click on data', async () => {
    table.setProps({ data: itemsFake.slice(0, 1), isClickable: true })
    await table.vm.$nextTick()

    const lines = () => table.find('.LSimpleTable__table__line')
    lines().trigger('click')
    expect(table.emitted().expandList).toBeFalsy()
    await table.vm.$nextTick()
    expect(table.emitted().click).toBeTruthy()
  })

  it('has class clickable', async () => {
    table.setProps({ data: itemsFake.slice(0, 1) })
    await table.vm.$nextTick()

    let classes = table.find('.LSimpleTable__table__line').classes()
    expect(classes.length).toBe(1)
    table.setProps({ isClickable: true })
    await table.vm.$nextTick()

    classes = table.find('.LSimpleTable__table__line').classes()

    expect(classes.length).toBe(2)
    expect(classes[1]).toEqual('LSimpleTable__table__line--clickable')
  })
})
