import { screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import { composeStories } from '@storybook/testing-vue'

import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/charts/LCircularChart.stories'

// Utilizando para teste do $emit, pois o composeStories se perde com os eventos
import LCircularChart from '~/src/components/charts/LCircularChart.vue'

const {
  DefaultWithTooltip,
  UsingIcons
} = composeStories(stories)

describe('LCircularChart', () => {
  it('renders image', () => {
    renderComponent(DefaultWithTooltip())

    expect(screen.getAllByRole('img').length).toBe(3)
  })

  it('renders progressbar', () => {
    renderComponent(DefaultWithTooltip())

    const progressBars = screen.getAllByRole('progressbar')

    expect(progressBars[0]).toHaveAttribute('aria-valuenow', '65')
    expect(progressBars[1]).toHaveAttribute('aria-valuenow', '30')
    expect(progressBars[2]).toHaveAttribute('aria-valuenow', '85')
  })

  it('renders text', () => {
    renderComponent(DefaultWithTooltip())

    const labels = screen.getAllByText('Label')
    const values = screen.getAllByText('value')

    expect(labels.length).toBe(3)
    expect(values.length).toBe(3)
    expect(screen.getByText('65%')).toBeInTheDocument()
    expect(screen.getByText('30%')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
  })

  it('renders tooltip', async () => {
    renderComponent(DefaultWithTooltip())

    userEvent.hover(screen.getAllByRole('progressbar')[0])

    await waitFor(() => expect(screen.getByText('Details')))
  })

  it('renders icon', async () => {
    renderComponent(UsingIcons())

    expect(screen.getByTestId('item-icon')).toHaveClass('mdi-information')
  })

  it('emits "eventClick" event when clickable item receives click', async () => {
    const { emitted } = renderComponent(LCircularChart, { 
      props: {
        items: [ 
          { 
            label: 'Foo', 
            percentage: 50, 
            options: { color: '#FFF', icon: 'mdi-error' }  
          } 
        ],
        clickableItems: [ 'Foo' ], 
        useCursorPointer: true
      }
    })

    await userEvent.click(screen.getByRole('progressbar'))

    expect(emitted().eventClick).toEqual([['Foo']])
  })
})
