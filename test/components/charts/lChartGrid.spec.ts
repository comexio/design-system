import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/charts/LChartGrid.stories'

const { Default } = composeStories(stories)

describe('LResumeChart', () => {
  it('should contain the side titles', () => {
    renderComponent(Default())
    const minimum = screen.getByText('Mínimo')
    const average = screen.getByText('Médio')
    const maximum = screen.getByText('Máximo')

    expect(minimum).toBeInTheDocument()
    expect(average).toBeInTheDocument()
    expect(maximum).toBeInTheDocument()
  })

  it('should contain the top titles', () => {
    const { container } = renderComponent(Default())

    const safe = container.querySelector('.mdi-safe-square-outline')
    const ferry = container.querySelector('.mdi-ferry')
    const cargo = container.querySelector('.mdi-truck-cargo-container')

    expect(safe).toBeInTheDocument()
    expect(ferry).toBeInTheDocument()
    expect(cargo).toBeInTheDocument()
  })

  // TODO: Falta finalizar o teste do conteúdo interno do chart
  // it('should contain the data chart', () => {
  //   const { container } = renderComponent(Default())
  //   screen.debug()
  // })
})
