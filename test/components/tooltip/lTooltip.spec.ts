import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/tooltip/LTooltip.stories'

const {
  MultipleTooltips
} = composeStories(stories)


describe('LTooltip', () => {
  it('render multiple tooltips', () => {
    renderComponent(MultipleTooltips())

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveTextContent('Button - Tooltip on the left')
    expect(buttons[1]).toHaveTextContent('Button - Tooltip on the top')
    expect(buttons[2]).toHaveTextContent('Button - Tooltip on the bottom')
    expect(buttons[3]).toHaveTextContent('Button - Tooltip on the right')
  })
})
