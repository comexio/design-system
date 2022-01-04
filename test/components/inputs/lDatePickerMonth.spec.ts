import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LDatePickerMonth from '~/src/components/inputs/LDatePickerMonth.vue'

const initialDateLimit = {
  min: '2020-03-01',
  max: '2020-05-31'
}

const updatedDateLimit = {
  min: '2019-03-01',
  max: '2020-05-31'
}

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    limit: {
      ...initialDateLimit
    },
    value: ['2020-03', '2020-05'],
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

  it('toggles enabledPeriods disabled', async () => {
    datePicker.setProps({ enabledPeriods: ['last_6_months', 'last_9_months', 'last_12_months'] })
    await datePicker.vm.$nextTick()

    expect(datePicker.findAll('.v-chip--disabled').length).toBe(1)
  })
})
