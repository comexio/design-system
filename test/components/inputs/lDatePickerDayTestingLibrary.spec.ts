import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import userEvent from '@testing-library/user-event'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/inputs/LDatePickerDay.stories'

const {
  AllowedTyping,
  AllowedTypingEnglish
} = composeStories(stories)

describe('LDatePickerDay', () => {
  it('renders AllowedTyping datepicker', async () => {
    renderComponent(AllowedTyping())

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
    const dateValid = '2020-11-01 - 2020-11-30'
    const dateOutOfLimit = '2021-01-03 - 2021-01-26'

    const input = screen.getByRole('textbox')

    userEvent.clear(input)
    userEvent.type(input, dateValid)

    expect(input.value).toBe(dateValid)

    userEvent.clear(input)
    userEvent.type(input, dateOutOfLimit)
    await new Promise(resolve => setTimeout(() => { resolve(1) }, 1))

    expect(input.value).toBe('2021-01-03 - 2021-01-25')
  })
})
