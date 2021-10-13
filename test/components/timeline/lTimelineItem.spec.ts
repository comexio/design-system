import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/timeline/LTimelineItem.stories'

const { Default, Initial, Final } = composeStories(stories)

describe('LTimelineItem', () => {
  it('renders timelineItem default', () => {
    const { container } = renderComponent(Default())

    expect(screen.getByText('Foo')).toBeInTheDocument()
    expect(screen.getByText('Bar')).toBeInTheDocument()
    expect(screen.getByText('23/06/2021 15:34')).toBeInTheDocument()

    expect(screen.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')).toBeInTheDocument()
    expect(container.getElementsByClassName('mdi-check-bold').length).toBe(1)
  })

  it('renders timelineItem initial', () => {
    const { container } = renderComponent(Initial())

    expect(screen.getByText('Foo')).toBeInTheDocument()
    expect(screen.getByText('Bar')).toBeInTheDocument()
    expect(screen.getByText('23/06/2021 15:34')).toBeInTheDocument()

    expect(screen.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')).toBeInTheDocument()
    expect(container.getElementsByClassName('mdi-check-bold').length).toBe(1)
  })

  it('renders timelineItem final', () => {
    renderComponent(Final())

    expect(screen.getByText('Foo')).toBeInTheDocument()
    expect(screen.getByText('Bar')).toBeInTheDocument()
    expect(screen.getByText('23/06/2021 15:34')).toBeInTheDocument()

    expect(screen.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')).toBeInTheDocument()
  })
})
