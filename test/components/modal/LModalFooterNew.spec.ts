import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import LModalFooterNew from '~/src/components/modal/LModalFooterNew.vue'

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
})
