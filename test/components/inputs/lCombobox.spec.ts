import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LCombobox.stories'

const { 
    DefaultLarge,
    DefaultSmall,
    DefaultLoaded,
    DefaultDropdownLoaded,
    DefaultLoading,
    DefaultWithSlot,
    WithTags
} = composeStories(stories)

describe('LCombobox', () => {
  it('renders large combobox with correct class', () => {
    const { container } = renderComponent(DefaultLarge())

    const textField = container.getElementsByClassName('LCombobox--large')
    expect(textField.length).toBe(1)
  })

  it('renders small combobox with correct class', () => {
    const { container } = renderComponent(DefaultSmall())

    const comboboxWithClass = container.getElementsByClassName('LCombobox--small')
    expect(comboboxWithClass.length).toBe(1)
  })

  it('renders default combobox loaded', async () => {
    const { container } = renderComponent(DefaultLoaded())

    const comboboxWithClass = container.getElementsByClassName('LCombobox--dropdownIcon')
    expect(comboboxWithClass.length).toBe(0)
    
    await userEvent.click(screen.getByRole('combobox'))
    
    const options = screen.getAllByRole('option', { hidden: true })
    
    expect(options.length).toBe(3)
    expect(options[0]).toHaveTextContent('First item')
    expect(options[1]).toHaveTextContent('Second item')
    expect(options[2]).toHaveTextContent('Third item')
  })

  it('renders dropdown combobox loaded', async () => {
    const { container } = renderComponent(DefaultDropdownLoaded())

    const comboboxWithClass = container.getElementsByClassName('LCombobox--dropdownIcon')
    expect(comboboxWithClass.length).toBe(1)
    
    await userEvent.click(screen.getByRole('combobox'))
    
    const options = screen.getAllByRole('option', { hidden: true })
    
    expect(options.length).toBe(3)
    expect(options[0]).toHaveTextContent('First item')
    expect(options[1]).toHaveTextContent('Second item')
    expect(options[2]).toHaveTextContent('Third item')
  })

  it('renders loading/disabled combobox with correct class', () => {
    const { container } = renderComponent(DefaultLoading())

    const comboboxWithClass = container.getElementsByClassName('LCombobox--disabled')
    const loadingBar = screen.getByRole('progressbar')
    
    expect(comboboxWithClass.length).toBe(1)
    expect(loadingBar).toBeInTheDocument()
  })

  it('renders combobox with slot', () => {
    renderComponent(DefaultWithSlot())

    const icon = screen.getByTestId('LCombobox__icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('render combobox with tags', async () => {
    const { container } = renderComponent(WithTags())

    const comboboxWithClass = container.getElementsByClassName('LCombobox--allowHeightGrow')
    expect(comboboxWithClass.length).toBe(1)

    await userEvent.click(screen.getByRole('combobox'))
    
    const closeButtons = screen.getAllByRole('button', { hidden: true })
    
    expect(closeButtons.length).toBe(5)
    expect(screen.getByText('First item')).toBeInTheDocument()
    expect(screen.getByText('Second item')).toBeInTheDocument()
    expect(screen.getByText('Third item')).toBeInTheDocument()
    expect(screen.getByText('Fourth item')).toBeInTheDocument()
    expect(screen.getByText('Fifth item')).toBeInTheDocument()
  })

  it('finds only one combobox by id', () => {
    const { container } = renderComponent(DefaultLoading())

    expect(container.querySelectorAll('#defaultLoading').length).toBe(1)
  })
})
