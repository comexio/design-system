import { screen, waitForElementToBeRemoved } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import userEvent from '@testing-library/user-event'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/alerts/LAlert.stories'

const { Action } = composeStories(stories)

describe('Alert test render', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('alert has been rendered on click and removed after timeout', async () => {
    renderComponent(Action())
    
    const button = screen.getByText('Open alert')
    await userEvent.click(button)

    expect(screen.getByText('Im an action alert!')).toBeInTheDocument()

    await waitForElementToBeRemoved(() => screen.getByText('Im an action alert!'))
  })
})
