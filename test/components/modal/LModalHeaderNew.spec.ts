import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import LModalHeaderNew from '~/src/components/modal/LModalHeaderNew.vue'

describe('renders modal header', () => {
  it('render title and subtitle correctly', () => {
    const { getByText } = renderComponent(LModalHeaderNew, {
      propsData: {
        title: 'Titulo',
        subtitle: 'Subtitulo'    
      }
    })
    
    expect(getByText('Titulo')).toBeInTheDocument()
    expect(getByText('Subtitulo')).toBeInTheDocument()
  })

  it('emits events on click buttons', async () => {
    const { emitted } = renderComponent(LModalHeaderNew)

    const button = screen.getByRole('button')

    expect(emitted().close).toBeUndefined()

    await userEvent.click(button)

    expect(emitted().close).not.toBeUndefined()
  })
})
