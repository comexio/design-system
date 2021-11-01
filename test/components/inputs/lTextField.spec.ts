import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LTextField.stories'

const { 
    DefaultLarge,
    DefaultSmall,
    DefaultDisabled,
    DefaultWithSlot
} = composeStories(stories)

describe('LTextField', () => {
  it('renders large textfield with correct class', () => {
    const { container } = renderComponent(DefaultLarge())

    const textField = container.getElementsByClassName('LTextField--large')
    expect(textField.length).toBe(1)
  })

  it('renders small textfield with correct class', () => {
    const { container } = renderComponent(DefaultSmall())

    const textField = container.getElementsByClassName('LTextField--small')
    expect(textField.length).toBe(1)
  })

  it('renders disabled textfield with correct class', () => {
    const { container } = renderComponent(DefaultDisabled())

    const textField = container.getElementsByClassName('LTextField--disabled')
    expect(textField.length).toBe(1)
  })

  it('renders textfield with slot', () => {
    renderComponent(DefaultWithSlot())

    const icon = screen.getByTestId('LTextField__icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('finds textfield with id through its label', () => {
    renderComponent(DefaultLarge())

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('finds only one textfield by id', () => {
    const { container } = renderComponent(DefaultLarge())

    expect(container.querySelectorAll('#defaultLarge').length).toBe(1)
  })
})
