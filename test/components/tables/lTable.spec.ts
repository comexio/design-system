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
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Download', value: 'download' }
]

const itemsFake = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    download: { "url":"http://api.logcomex.io/api/v3/excel/0deab75d25103a930ff658b963bd5eb6","text":"Download","icon":"mdi-download-circle","class":"LSConsumptionReportDetails__table__linkDownload" }
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
    expect(headerItems().length).toBe(4)
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

  it('check button download', () => {
    const buttonDownload = () => table.find('tbody tr .LTable__download')
    const buttonIcon = () => buttonDownload().find('.v-icon')

    expect(buttonDownload().exists()).toBe(true)
    expect(buttonDownload().text()).toBe(itemsFake[0].download.text)
    expect(buttonIcon().exists()).toBe(true)
  })

  it('render tr with 6 rows but 11 items', async () => {
    table = mount(LTable, {
      ...defaultParams,
      propsData:{
        itemsPerPage: 6
      }
    })
    table.setProps({ items: itemsFake })
    await table.vm.$nextTick()

    const lines = () => table.findAll('tbody tr')
    expect(lines().length).toBe(6)
  })

  it('render tr with 11 rows', async () => {
    table = mount(LTable, {
      ...defaultParams,
      propsData:{
        itemsPerPage: 19
      }
    })
    table.setProps({ items: itemsFake })
    await table.vm.$nextTick()

    const lines = () => table.findAll('tbody tr')
    expect(lines().length).toBe(11)
  })
})

const exporterHeaderDataFake = [
  { text: 'NOME EXPORTADOR', value: 'nome_exportador' },
]
const exporterItemsFake = [
  { nome_exportador: 'JBS SA' }
]

describe('LTable with Exporter data', () => {
  let table: Wrapper<LTable>
  beforeAll(() => {
    table = mount(LTable, {
      ...defaultParams,
      propsData:{
        truncateItems: false,
        productId: 21
      },
      setData () {
        return {
          keysThatHasDetails: ['nome_exportador']
        }
      },
      computed: {
        isExpo () {
          return true
        }
      }
    })
  })
  it('render exporter header', async () => {
    table.setProps({ headers: exporterHeaderDataFake })
    await table.vm.$nextTick()

    const header = () => table.find('.v-data-table-header')
    const headerItems = () => header().findAll('th')
    expect(headerItems().length).toBe(1)
  })
  it('render exporter body', async () => {
    table.setProps({ items: exporterItemsFake })
    await table.vm.$nextTick()

    const lines = () => table.findAll('tbody tr')
    expect(lines().length).toBe(1)
  })
  it('checks if table data has exporter info', async () => {
    const headerTitle = table.find('th').text()
    expect(headerTitle).toBe('NOME EXPORTADOR')

    const columnText = table.find('td').text()
    expect(columnText).toBe('JBS SA')
  })
})
