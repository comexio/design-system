import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LSelect.stories'

const { 
    Default,
    DefaultLarge,
    DefaultSmall,
    DefaultBorderedDisabled,
    DefaultWithSlot
} = composeStories(stories)

describe('LSelect', () => {
  it('renders default select', async () => {
    const { container } = renderComponent(Default())

    const selectWithClass = container.getElementsByClassName('LSelect--dropdownIcon')
    expect(selectWithClass.length).toBe(1)
    
    await userEvent.click(screen.getByRole('textbox'))
    
    const options = screen.getAllByRole('option', { hidden: true })
    
    expect(options.length).toBe(3)
    expect(options[0]).toHaveTextContent('First item')
    expect(options[1]).toHaveTextContent('Second item')
    expect(options[2]).toHaveTextContent('Third item')
  })

  it('renders large select with correct class', () => {
    const { container } = renderComponent(DefaultLarge())

    const textField = container.getElementsByClassName('LSelect--large')
    expect(textField.length).toBe(1)
  })

  it('renders small select with correct class', () => {
    const { container } = renderComponent(DefaultSmall())

    const textField = container.getElementsByClassName('LSelect--small')
    expect(textField.length).toBe(1)
  })

  it('renders disabled select with correct class', () => {
    const { container } = renderComponent(DefaultBorderedDisabled())

    const textField = container.getElementsByClassName('LSelect--disabled')
    expect(textField.length).toBe(1)
  })

  it('renders select with slot', () => {
    const { container } = renderComponent(DefaultWithSlot())

    const selectWithClass = container.getElementsByClassName('LSelect--dropdownIcon')
    expect(selectWithClass.length).toBe(0)

    const icon = screen.getByTestId('LSelect__icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })
})
