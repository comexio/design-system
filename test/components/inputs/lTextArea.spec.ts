import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LTextArea.stories'

const {
  Default,
  DefaultDisabled,
  DefaultWithError,
  DefaultWithSlot
} = composeStories(stories)

describe('LTextArea', () => {
  it('renders Default template', () => {
    renderComponent(Default())

    const textarea = screen.getByRole('textbox', { name: 'Label' })
    expect(textarea).toBeInTheDocument()
  })

  it('renders DefaultDisabled template', () => {
    renderComponent(DefaultDisabled())

    const textarea = screen.getByRole('textbox', { name: 'Label' })
    expect(textarea.attributes.disabled).toBeTruthy()
  })

  it('renders DefaultWithError template', () => {
    const { container } = renderComponent(DefaultWithError())

    const errorClass = container.querySelector('.error--text')
    expect(errorClass).toBeInTheDocument()
  })

  it('renders DefaultWithSlot template', () => {
    renderComponent(DefaultWithSlot())

    const slot = screen.getByTestId('LTextArea__icon')
    expect(slot).toBeInTheDocument()
  })
})
