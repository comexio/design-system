import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/alerts/LHeaderAlert.stories'

const {
  Informational,
  Custom
} = composeStories(stories)

describe('LHeaderAlert', () => {
  it('renders header alert', () => {
    renderComponent(Informational())

    expect(screen.getByText('Alert content here')).toBeInTheDocument()
  })

  it('hides header alert when close button receives click', async () => {
    renderComponent(Informational())

    await userEvent.click(screen.getByRole('button', { name: '' }))

    expect(screen.queryByText('Alert content here')).not.toBeInTheDocument()
  })

  it('renders custom header alert', () => {
    renderComponent(Custom())

    expect(screen.getByText('Custom content')).toBeInTheDocument()
  })
})
