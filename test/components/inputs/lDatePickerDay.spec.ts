import { getByText, screen, waitFor } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import userEvent from '@testing-library/user-event'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LDatePickerDay.stories'

const {
  Default,
  Filled,
  FilledOverRange,
  FilledEnglish,
  AllowedTyping,
  AllowedTypingEnglish,
  Bordered,
  DefaultWithSlot
} = composeStories(stories)

const checkDefaultDatepickerOpened = async () => {
  const activator = screen.getByTestId('activator')
  await userEvent.click(activator)
  expect(screen.getByTestId('firstDatepicker')).toBeInTheDocument()
  expect(screen.getByTestId('secondDatepicker')).toBeInTheDocument()
}

describe('LDatePickerDay', () => {
  it('renders Default datepicker', async () => {
    renderComponent(Default())

    const date = new Date()
    const toLocaleOptions: Record<string, string> = { month: 'long', year: 'numeric' }
    const currentMonthLocale = date.toLocaleDateString('pt-BR', { ...toLocaleOptions })
    date.setMonth(date.getMonth() - 1)
    const pastMonthLocale = date.toLocaleDateString('pt-BR', { ...toLocaleOptions })

    await checkDefaultDatepickerOpened()
    await waitFor(() => expect(screen.getByText(currentMonthLocale)).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText(pastMonthLocale)).toBeInTheDocument())
  })

  it('renders Filled datepicker', async () => {
    renderComponent(Filled())

    await checkDefaultDatepickerOpened()
    await waitFor(() => expect(screen.getByText('08/12/2020 - 18/12/2020')).toBeInTheDocument())
  })

  it('renders FilledOverRange datepicker', async () => {
    renderComponent(FilledOverRange())

    await checkDefaultDatepickerOpened()
    expect(screen.queryByText('01/03/2020 - 31/05/2020')).toBeNull()
  })

  it('renders Filled datepicker', async () => {
    renderComponent(FilledEnglish())

    await checkDefaultDatepickerOpened()
    await waitFor(() => expect(screen.getByText('12/08/2020 - 12/18/2020')).toBeInTheDocument())
  })

  it('renders AllowedTyping datepicker', async () => {
    renderComponent(AllowedTyping())

    await checkDefaultDatepickerOpened()

    const dateValid = '01/11/2020 - 22/12/2020'
    const dateOutOfLimit = '10/01/2021 - 26/01/2021'

    const input = screen.getByRole('textbox')

    userEvent.clear(input)
    userEvent.type(input, dateValid)

    expect(input.value).toBe(dateValid)

    userEvent.clear(input)
    userEvent.type(input, dateOutOfLimit)
    await new Promise(resolve => setTimeout(() => { resolve(1) }, 1))

    expect(input.value).toEqual('10/01/2021 - 25/01/2021')
  })

  it('renders AllowedTypingEnglish datepicker', async () => {
    renderComponent(AllowedTypingEnglish())

    await checkDefaultDatepickerOpened()

    const dateValid = '11/01/2020 - 11/30/2020'
    const dateOutOfLimit = '01/04/2021 - 01/26/2021'

    const input = screen.getByRole('textbox')

    userEvent.clear(input)
    userEvent.type(input, dateValid)

    expect(input.value).toBe(dateValid)

    userEvent.clear(input)
    userEvent.type(input, dateOutOfLimit)
    await new Promise(resolve => setTimeout(() => { resolve(1) }, 1))

    expect(input.value).toBe('01/04/2021 - 01/25/2021')
  })

  it('renders Bordered datepicker', async () => {
    renderComponent(Bordered())

    await checkDefaultDatepickerOpened()
    await waitFor(() => expect(screen.getByText('08/12/2020 - 18/12/2020')).toBeInTheDocument())
  })

  it('renders default datepicker (with slot)', async () => {
    renderComponent(DefaultWithSlot())

    await checkDefaultDatepickerOpened()
  })

  it('renders default datepicker (with slot Footer)', async () => {
    renderComponent(DefaultWithSlot())

    await checkDefaultDatepickerOpened()
    
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })

  it('renders default datepicker (with slot Footer)', async () => {
    renderComponent(DefaultWithSlot())

    await checkDefaultDatepickerOpened()
    const footerItem = screen.getByText('Footer content')
    
    expect(footerItem).toBeInTheDocument()

    await userEvent.click(footerItem)
  })
})
