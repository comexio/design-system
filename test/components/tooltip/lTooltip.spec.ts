import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import userEvent from '@testing-library/user-event'
import * as stories from '~/docs/stories/components/tooltip/LTooltip.stories'
import LTooltip from '~/src/components/tooltip/LTooltip.vue'
import { fireEvent, waitFor } from '@testing-library/dom'

const { Tooltips } = composeStories(stories)


describe('LTooltip', () => {
  it('renders multiple tooltips from story', () => {
    const { container } = renderComponent(Tooltips())

    const buttons = screen.getAllByRole('button')
    const tooltipLeft = container.getElementsByClassName('v-tooltip--left')
    expect(tooltipLeft.length).toBe(1)
    expect(buttons[0]).toHaveTextContent('Button - Tooltip on the left')

    const tooltipTop = container.getElementsByClassName('v-tooltip--top')
    expect(tooltipTop.length).toBe(1)
    expect(buttons[1]).toHaveTextContent('Button - Tooltip on the top')

    const tooltipBottom = container.getElementsByClassName('v-tooltip--bottom')
    expect(tooltipBottom.length).toBe(1)
    expect(buttons[2]).toHaveTextContent('Button - Tooltip on the bottom')

    const tooltipRight = container.getElementsByClassName('v-tooltip--right')
    expect(tooltipRight.length).toBe(1)
    expect(buttons[3]).toHaveTextContent('Button - Tooltip on the right')
  })

  it('renders tooltip and its slot content', () => {
    const { container } = renderComponent(LTooltip, {
      propsData: {
        value: true,
        left: true
      },
      scopedSlots: { 'default' : '<span>text passed to tooltip slot</span>'}
    })

    expect(container.querySelector('.LTooltip--pointer-left')).toBeInTheDocument()
    expect(screen.getByText('text passed to tooltip slot')).toBeInTheDocument()
  })

  it('opens tooltip on hover', async () => {
    renderComponent(Tooltips())

    const buttons = screen.getAllByRole('button')
    await userEvent.hover(buttons[1])

    await waitFor(() => screen.getByTestId('tooltip-content'))

    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument()
  })
})
