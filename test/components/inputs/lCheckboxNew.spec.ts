import { configure, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LCheckboxNew.stories'

const { Default, WithColor, MultipleCheckboxes } =
  composeStories(stories)

describe('LCheckboxNew', () => {
  it('renders component unchecked', () => {
    renderComponent(Default())

    const lCheckboxNew = screen.getByRole('checkbox')
    expect(lCheckboxNew).not.toBeChecked()
  })

  it('toggles checkbox state', async () => {
    renderComponent(Default())

    const lCheckboxNew = screen.getByRole('checkbox')
    await userEvent.click(lCheckboxNew)

    expect(lCheckboxNew).toBeChecked()
  })

  it('renders one id when inheritAttrs false', () => {
    configure({ testIdAttribute: 'id' })

    const { getAllByTestId } = renderComponent(Default())

    expect(getAllByTestId('checkbox').length).toBe(1)
  })

  it('renders component checked with color', async () => {
    renderComponent(WithColor())

    const lCheckboxNew = screen.getByRole('checkbox')

    expect(lCheckboxNew).toHaveStyle({ color: 'rgb(255, 34, 255);' })
    expect(lCheckboxNew).toBeChecked()
  })

  it('renders and toggles multiple checkboxes', async () => {
    renderComponent(MultipleCheckboxes())

    let checkboxes = screen.getAllByRole('checkbox')
    checkboxes.forEach((checkbox) => expect(checkbox).not.toBeChecked())

    await userEvent.click(checkboxes[0])

    expect(checkboxes[0]).toBeChecked()

    checkboxes = checkboxes.slice(1)
    checkboxes.forEach((checkbox) => expect(checkbox).not.toBeChecked())
  })
})
