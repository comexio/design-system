import { fireEvent, screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/timeline/LTimeline.stories'

const { Default } = composeStories(stories)

describe('LTimeline', () => {
  it('renders component LTimeline correctly', () => {
    const { container } = renderComponent(Default())

    expect(screen.getByText('Foo Title')).toBeInTheDocument()
    expect(screen.getByText('Bar Description')).toBeInTheDocument()

    expect(container.getElementsByClassName('v-divider').length).toBe(1)
    expect(container.getElementsByClassName('LTimeline__cardContent').length).toBe(1)
  })

  it('renders slot header-content with default control scroll arrows', () => {
    const { container } = renderComponent(Default())

    expect(container.getElementsByClassName('mdi-chevron-right').length).toBe(1)
    expect(screen.getByText('Header content')).toBeInTheDocument()
  })

  it('renders slot header-content with default control scroll arrows', async () => {
    const { container } = renderComponent(Default())

    const cardContent = container.getElementsByClassName('LTimeline__cardContent')[0]
    await fireEvent.scroll(cardContent, { target: { scrollLeft: 100 } });

    expect(container.getElementsByClassName('mdi-chevron-left').length).toBe(1)
    expect(container.getElementsByClassName('mdi-chevron-right').length).toBe(0)

  })
})
