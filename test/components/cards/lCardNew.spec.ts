import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/cards/LCardNew.stories'

const { 
  Default,
  WithoutHeader
} = composeStories(stories)

describe('LCardNew', () => {
  it('renders default card', () => {
    renderComponent(Default())

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card subtitle here')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders card without header', () => {
    renderComponent(WithoutHeader())

    expect(screen.queryByText('Card Title')).not.toBeInTheDocument()
    expect(screen.queryByText('Card subtitle here')).not.toBeInTheDocument()
    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })
})
