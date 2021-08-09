import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LCheckboxNew.stories'

const { Default, WithColor } = composeStories(stories)

describe('LCheckboxNew', () => {
  it('renders component unchecked', () => {
    renderComponent(Default())

    const lCheckboxNew = screen.getByRole('checkbox')
    expect(lCheckboxNew).not.toBeChecked()
  })

  it('toggles checkbox state, async () => {
    renderComponent(Default())

    const lCheckboxNew = screen.getByRole('checkbox')
    await userEvent.click(lCheckboxNew)

    expect(lCheckboxNew).toBeChecked()
  })


  it('renders component checked with color', async () => {
    renderComponent(WithColor())

    const lCheckboxNew = screen.getByRole('checkbox')

    expect(lCheckboxNew).toHaveStyle({ color: 'rgb(255, 34, 255);' })
    expect(lCheckboxNew).toBeChecked()
  })
})
