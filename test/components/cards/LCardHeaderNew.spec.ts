import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/cards/LCardHeaderNew.stories'

const { 
  Default,
  OnlyTitle,
  WithCustomContentOnDefaultSlot,
  WithCustomContentOnPrependSlot
} = composeStories(stories)

describe('LCardHeaderNew', () => {
  it('renders default header', () => {
    renderComponent(Default())

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card subtitle here')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('renders header with title only', () => {
    renderComponent(OnlyTitle())

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.queryByRole('Card subtitle here')).not.toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('renders header with custom content on default slot', () => {
    renderComponent(WithCustomContentOnDefaultSlot())

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card subtitle here')).toBeInTheDocument()
    expect(screen.getByTestId('customContent')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('renders header with custom content on prepend slot', () => {
    renderComponent(WithCustomContentOnPrependSlot())

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card subtitle here')).toBeInTheDocument()
    expect(screen.getByTestId('customContentPrepend')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
