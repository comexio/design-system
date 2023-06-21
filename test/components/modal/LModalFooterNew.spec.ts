import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import LModalFooterNew from '~/src/components/modal/LModalFooterNew.vue'
import * as stories from '~/docs/stories/components/modals/LModalFooterNew.stories.js'
import { composeStories } from '@storybook/testing-vue'

const { 
  Default,
  FooterWithSlot,
  FooterWithPreppedButtonsSlot
} = composeStories(stories)

describe('renders modal footer', () => {
  it('emits events on click buttons', async () => {
    const { emitted } = renderComponent(LModalFooterNew, {
      props: {
        cancelButtonProps: {
          text: true,
          buttonColors: {
            color: '#BFC0CC',
            colorOnHover: '#E0E1EB'
          },
          placeholder: 'Cancelar'
        },
        confirmButtonProps: {
          primary: true,
          placeholder: 'Confirmar'
        }
      }
    })

    const buttons = screen.getAllByRole('button')

    expect(emitted().cancel).toBeUndefined()
    expect(emitted().confirm).toBeUndefined()

    await userEvent.click(buttons[0])
    await userEvent.click(buttons[1])

    expect(emitted().cancel).not.toBeUndefined()
    expect(emitted().confirm).not.toBeUndefined()
  })

  it('renders correctly component default', () => {
    const { getByRole } = renderComponent(Default())

    const cancelButton = getByRole('button', { name: 'Cancelar' })
    const confirmButton = getByRole('button', { name: 'Confirmar' })

    expect(cancelButton).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
  })

  it('renders correctly component with slot', () => {
    const { getByText } = renderComponent(FooterWithSlot())
    const contentSlot = getByText('Slot content')

    expect(contentSlot).toBeInTheDocument()
  })

  it('renders correctly component with prepped buttons slot', () => {
    const { getByText } = renderComponent(FooterWithPreppedButtonsSlot())
    const contentPreppedButtonsSlot = getByText('Foo prepped buttons slot')

    expect(contentPreppedButtonsSlot).toBeInTheDocument()
  })
})
