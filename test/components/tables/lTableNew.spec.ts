import { screen } from '@testing-library/vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import LTableNew from '~/src/components/tables/LTableNew.vue'
import userEvent from '@testing-library/user-event'

const headers = [
  { text: 'Dessert (100g serving)', value: 'name' },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Download', value: 'download' }
]

const items = [
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

interface CustomProps {
  toggleCheckboxOnRowClick?: boolean;
}

interface CustomOptions {
  attrs?: Object,
  scopedSlots?: Object
}

const render = (customProps?: CustomProps, customOptions?: CustomOptions) => {
  return renderComponent(LTableNew, { 
    propsData: {
      headers,
      items,
      ...customProps
    },
    ...customOptions
  })
}


describe('LTableNew', () => {
  it('renders external content', () => {
    const scopedSlots = { 'item.calories': '<p slot-scope="item.calories">external content</p>' }
    render({}, { scopedSlots })

    const externalTexts = screen.getAllByText('external content')
    
    expect(externalTexts.length).toBe(3)
  })

  it('renders table headers', () => {
    render()

    const headers = screen.getAllByRole('columnheader')

    expect(headers.length).toBe(4)

    expect(headers[0]).toHaveTextContent('Dessert (100g serving)')
    expect(headers[1]).toHaveTextContent('Calories')
    expect(headers[2]).toHaveTextContent('Fat (g)')
    expect(headers[3]).toHaveTextContent('Download')
  })

  it('renders table rows', () => {
    render()

    const rows = screen.getAllByRole('row')

    expect(rows.length).toBe(4)

    expect(rows[1]).toHaveTextContent(/Frozen Yogurt/)
    expect(rows[2]).toHaveTextContent(/Lollipop/)
    expect(rows[3]).toHaveTextContent(/Honeycomb/)
  })

  /* TODO: Criar issue no vuetify para tornar o checkbox da v-data-table acessível via árvore de acessibilidade
    pois não é uma boa prática testar através de classes */
  it('renders table with selects', () => {
    const attrs = { 'show-select': true }
    const { container } = render({}, { attrs })
    
    const checkboxes = container.getElementsByClassName('mdi-checkbox-blank-outline')
    
    expect(checkboxes.length).toBe(4)
  })

  it('toggles checkbox', async () => {
    const attrs = { 'show-select': true }
    const { container, emitted } = render({}, { attrs })

    const uncheckedCheckboxes = container.getElementsByClassName('mdi-checkbox-blank-outline')
    expect(uncheckedCheckboxes.length).toBe(4)

    await userEvent.click(uncheckedCheckboxes[0])

    expect(uncheckedCheckboxes.length).toBe(0)
    expect(container.getElementsByClassName('mdi-checkbox-marked').length).toBe(4)
    
    expect(emitted().input).toBeTruthy()
  })

  it('toggles checkbox on row click', async () => {
    const attrs = { showSelect: true }
    const { container, emitted } = render({ toggleCheckboxOnRowClick: true  }, { attrs })

    const rows = screen.getAllByRole('row')

    await userEvent.click(rows[1])
    
    expect(container.getElementsByClassName('mdi-checkbox-marked').length).toBe(4)
    expect(emitted().input).toBeTruthy()
  })
})
