import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/charts/LGridChart.stories'

const { Default } = composeStories(stories)

describe('LGridChart', () => {
  it('should render the side titles', () => {
    renderComponent(Default())

    expect(screen.getByText('Label 1')).toBeInTheDocument()
    expect(screen.getByText('Label 2')).toBeInTheDocument()
    expect(screen.getByText('Label 3')).toBeInTheDocument()
  })

  it('should render the top titles', () => {
    const { container } = renderComponent(Default())

    expect(container.querySelector('.mdi-safe-square-outline')).toBeInTheDocument()
    expect(screen.getByText('Header 1')).toBeInTheDocument()

    expect(container.querySelector('.mdi-ferry')).toBeInTheDocument()
    expect(screen.getByText('Header 2')).toBeInTheDocument()

    expect(container.querySelector('.mdi-truck-cargo-container')).toBeInTheDocument()
    expect(screen.getByText('Header 3')).toBeInTheDocument()
  })

   it('renders chart rows', () => {
    renderComponent(Default())

    screen.getByText('0.2074')
    screen.getByText('7.0558')
    screen.getByText('12.978')
    screen.getByText('223.9474')
    screen.getByText('274.59')
    screen.getByText('157.4134')
    screen.getByText('13179.4241')
   })
})
