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
  DefaultMultiple,
  DefaultWithSlot,
  DefaultWithScopedSlot
} = composeStories(stories)

describe('LSelect', () => {
  it('renders default select', async () => {
    const { container } = renderComponent(Default())

    const selectWithClass = container.getElementsByClassName(
      'LSelect--dropdownIcon'
    )
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

    const selectWithClass =
      container.getElementsByClassName('LSelect--large')
    expect(selectWithClass.length).toBe(1)
  })

  it('renders small select with correct class', () => {
    const { container } = renderComponent(DefaultSmall())

    const selectWithClass =
      container.getElementsByClassName('LSelect--small')
    expect(selectWithClass.length).toBe(1)
  })

  it('renders disabled select with correct class', () => {
    const { container } = renderComponent(DefaultBorderedDisabled())

    const selectWithClass = container.getElementsByClassName(
      'LSelect--disabled'
    )
    expect(selectWithClass.length).toBe(1)
  })

  it('renders multiple select with correct class', () => {
    const { container } = renderComponent(DefaultMultiple())

    const selectWithClass = container.getElementsByClassName(
      'LSelect--allowHeightGrow'
    )
    expect(selectWithClass.length).toBe(1)
  })

  it('renders select with slot', () => {
    const { container } = renderComponent(DefaultWithSlot())

    const selectWithClass = container.getElementsByClassName(
      'LSelect--dropdownIcon'
    )
    expect(selectWithClass.length).toBe(0)

    const icon = screen.getByTestId('LSelect__icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  it('renders icon passed with scoped slot on option click', async () => {
    const { container } = renderComponent(DefaultWithScopedSlot())

    await userEvent.click(screen.getByRole('textbox'))

    const options = screen.getAllByRole('option', { hidden: true })

    expect(options.length).toBe(3)

    await userEvent.click(options[0])

    expect(container.querySelector('.mdi-check')).toBeInTheDocument()
  })

  it('finds only one select by id', () => {
    const { container } = renderComponent(DefaultLarge())

    expect(container.querySelectorAll('#defaultLarge').length).toBe(1)
  })
})
