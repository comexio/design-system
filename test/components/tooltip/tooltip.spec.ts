import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/tooltip/LTooltip.stories'
const {
  Default,
  MultipleTooltips
} = composeStories(stories)


describe('LButtonNew', () => {
  it('renders default tooltip', async () => {
    renderComponent(Default())

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('Left')
  })

  it('render multiple tooltips', () => {
    renderComponent(MultipleTooltips())

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveTextContent('Left')
    expect(buttons[1]).toHaveTextContent('Top')
    expect(buttons[2]).toHaveTextContent('Bottom')
    expect(buttons[3]).toHaveTextContent('Right')
  })
})
