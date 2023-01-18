import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LDatePickerMonth from '~/src/components/inputs/LDatePickerMonth.vue'
import * as stories from '~/docs/stories/components/inputs/LDatePickerMonth.stories.js'
import { screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'

const { DefaultFilledWithYearMonth } = composeStories(stories)

const checkDefaultDatepickerOpened = async () => {
  const activator = screen.getByTestId('activator')
  await userEvent.click(activator)
  expect(screen.getByTestId('Datepicker')).toBeInTheDocument()
}

const initialDateLimit = {
  min: '2020-03-01',
  max: '2020-05-31'
}

const updatedDateLimit = {
  min: '2019-03-01',
  max: '2020-05-31'
}
const orderedPeriodAscTextMock = 'Mar/20 - Mai/20'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    limit: {
      ...initialDateLimit,
    },
    enabledPeriods: ['last_6_months', 'last_9_months', 'last_12_months'],
    value: ['2020-05', '2020-03'],
    monthsList: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
  },
  data () {
    return {
      monthsPeriod: ['2020-03', '2020-05']
    }
  },
  computed: {
    i18nLocale () {
      return 'pt'
    }
  }
}

describe('LDatePickerMonth', () => {
  it('renders Filled datepicker', async () => {
    renderComponent(DefaultFilledWithYearMonth())

    await checkDefaultDatepickerOpened()
    await waitFor(() => expect(screen.getByText('Jan/20 - Fev/21')).toBeInTheDocument())
  })

  it('renders last 9 months datepicker', async () => {
    renderComponent(DefaultFilledWithYearMonth())

    await checkDefaultDatepickerOpened()
    const last9month = screen.getByText('Últimos 9 meses')
    await userEvent.click(last9month)
    await waitFor(() => expect(screen.getByText('Abr/21 - Dez/21')).toBeInTheDocument())
  })
})

describe('datePicker component', () => {
  addElemWithDataAppToBody()
  let datePicker: Wrapper<LDatePickerMonth>

  beforeAll(() => {
    datePicker = mount(LDatePickerMonth, {
      ...defaultParams
    })
  })

  it('check datepicker limit', async () => {
    expect(datePicker.exists()).toBeTruthy()
    const activator = () => datePicker.find('.activator')

    activator().trigger('click')
    await datePicker.vm.$nextTick()

    const calendar = () => datePicker.find('.v-date-picker-table')
    expect(calendar().exists()).toBeTruthy()

    const datePickerVuetify = () => datePicker.findComponent({ name: 'v-date-picker' })
    expect(datePickerVuetify().exists()).toBeTruthy()
    expect(datePickerVuetify().vm.$props.min).toBe(initialDateLimit.min)
    expect(datePickerVuetify().vm.$props.max).toBe(initialDateLimit.max)

    datePicker.setProps({ limit: updatedDateLimit })
    await datePicker.vm.$nextTick()

    expect(datePickerVuetify().vm.$props.min).toBe(updatedDateLimit.min)
    expect(datePickerVuetify().vm.$props.max).toBe(updatedDateLimit.max)
  })

  it('renders bordered datepicker', async () => {
    expect(datePicker.find('.LDatePickerMonth--bordered').exists()).toBe(false)

    datePicker.setProps({ bordered: true })
    await datePicker.vm.$nextTick()

    expect( datePicker.find('.LDatePickerMonth--bordered').exists()).toBe(true)
  })

  it('renders right amount of disabled periods', async () => {
    expect(datePicker.findAll('.v-chip--disabled').length).toBe(1)
  })

  it('renders period in asc order', async () => {
    const inputText = datePicker.find('.formatted-months').text()
    expect(inputText).toEqual(orderedPeriodAscTextMock)
  })
})
