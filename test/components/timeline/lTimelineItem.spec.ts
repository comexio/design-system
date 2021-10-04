import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/timeline/LTimelineItem.stories'

const { Default, Initial, Final } = composeStories(stories)

describe('LTimelineItem', () => {
  it('renders timelineItem default', () => {
    const { container } = renderComponent(Default())

    expect(screen.getByText('Armador')).toBeInTheDocument()
    expect(screen.getByText('Registro DI')).toBeInTheDocument()
    expect(screen.getByText('Full import container out gated - PECEM, CE, BR - CAIU6439862')).toBeInTheDocument()
    expect(container.getElementsByClassName('mdi-check-bold').length).toBe(1)
  })

  it('renders timelineItem initial', () => {
    const { container } = renderComponent(Initial())

    expect(screen.getByText('Armador')).toBeInTheDocument()
    expect(screen.getByText('Registro DI')).toBeInTheDocument()
    expect(screen.getByText('Full import container out gated - PECEM, CE, BR - CAIU6439862')).toBeInTheDocument()
    expect(container.getElementsByClassName('mdi-check-bold').length).toBe(1)
  })

  it('renders timelineItem final', () => {
    renderComponent(Final())

    expect(screen.getByText('Armador')).toBeInTheDocument()
    expect(screen.getByText('Registro DI')).toBeInTheDocument()
    expect(screen.getByText('Full import container out gated - PECEM, CE, BR - CAIU6439862')).toBeInTheDocument()
  })
})
