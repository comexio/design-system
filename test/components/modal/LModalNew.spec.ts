import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/modals/LModalNew.stories'

const { 
    Default,
    WithoutHeader,
    WithoutFooter,
    WithoutCloseButton,
    WithoutFooterButtons,
    CustomContent
} = composeStories(stories)

describe('LModalNew', () => {
  it('renders Default template', async () => {
    const { container } = renderComponent(Default())
    const buttonDialog  = screen.getByRole('button')

    await userEvent.click(buttonDialog)

    const title = container.querySelector('.LModalHeader__title')
    const buttons = screen.getAllByRole('button')
    
    expect(title).toHaveTextContent('Titulo')
    expect(buttons.length).toBe(4)
    expect(buttons[1]).toHaveClass('LModalHeader__close')
    expect(buttons[2]).toHaveTextContent('Cancelar')
    expect(buttons[3]).toHaveTextContent('Confirmar')
  })

  it('renders WithoutHeader template', async () => {
    const { container } = renderComponent(WithoutHeader())
    const buttonDialog  = screen.getByRole('button')

    await userEvent.click(buttonDialog)

    const header = container.querySelector('.LModalHeader')
    const buttons = screen.getAllByRole('button')
    
    expect(header).not.toBeInTheDocument()
    expect(buttons.length).toBe(3)
    expect(buttons[1]).toHaveTextContent('Cancelar')
    expect(buttons[2]).toHaveTextContent('Confirmar')
  })

  it('renders WithoutFooter template', async () => {
    const { container } = renderComponent(WithoutFooter())
    const buttonDialog  = screen.getByRole('button')

    await userEvent.click(buttonDialog)

    const title = container.querySelector('.LModalHeader__title')
    const buttons = screen.getAllByRole('button')
    const footer = container.querySelector('.LModalFooter')
    
    expect(footer).not.toBeInTheDocument()
    expect(title).toHaveTextContent('Titulo')
    expect(buttons.length).toBe(2)
    expect(buttons[1]).toHaveClass('LModalHeader__close')
  })

  it('renders WithoutCloseButton template', async () => {
    const { container } = renderComponent(WithoutCloseButton())
    const buttonDialog  = screen.getByRole('button')

    await userEvent.click(buttonDialog)

    const title = container.querySelector('.LModalHeader__title')
    const buttons = screen.getAllByRole('button')
    const closeButton = container.querySelector('.LModalHeader__close')
    const footer = container.querySelector('.LModalFooter')
    
    expect(title).toHaveTextContent('Titulo')
    expect(buttons.length).toBe(1)
    expect(closeButton).not.toBeInTheDocument()
    expect(footer).not.toBeInTheDocument()
  })

  it('renders WithoutFooterButtons template', async () => {
    const { container } = renderComponent(WithoutFooterButtons())
    const buttonDialog  = screen.getByRole('button')

    await userEvent.click(buttonDialog)

    const buttons = screen.getAllByRole('button')
    const footer = container.querySelector('.LModalFooter')
    
    expect(buttons.length).toBe(1)
    expect(footer).toBeInTheDocument()
  })

  it('renders CustomContent template', async () => {
    const { container } = renderComponent(CustomContent())
    const buttonDialog  = screen.getByRole('button')

    await userEvent.click(buttonDialog)

    const header = container.querySelector('.LModalHeader')
    const footer = container.querySelector('.LModalFooter')
    const buttons = screen.getAllByRole('button')
    
    expect(header).not.toBeInTheDocument()
    expect(footer).not.toBeInTheDocument()
    expect(buttons.length).toBe(1)
  })
})
