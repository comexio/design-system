import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LTextField.stories'

const { 
    Large,
    Small,
    DefaultDisabled,
    WithSlot
} = composeStories(stories)

describe('LTextField', () => {
  it('renders large textfield with correct class', () => {
    const { container } = renderComponent(Large())

    const textField = container.getElementsByClassName('LTextField--large')
    expect(textField.length).toBe(1)
  })

  it('renders small textfield with correct class', () => {
    const { container } = renderComponent(Small())

    const textField = container.getElementsByClassName('LTextField--small')
    expect(textField.length).toBe(1)
  })

  it('renders disabled textfield with backgroundColor', () => {
    const { container } = renderComponent(DefaultDisabled())

    const inputControl = container.getElementsByClassName('v-input__slot')[0]
    expect(inputControl).toHaveStyle('background-color: rgb(241, 239, 239)')
  })

  it('renders textfield with slot', () => {
    renderComponent(WithSlot())

    const icon = screen.getByTestId('LTextField__icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })
})