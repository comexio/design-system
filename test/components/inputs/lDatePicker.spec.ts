import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LDatePicker from '~/src/components/inputs/LDatePicker.vue'

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
    value: ['2020-03', '2020-05']
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
  let datePicker: Wrapper<LDatePicker>

  beforeAll(() => {
    datePicker = mount(LDatePicker, {
      ...defaultParams,
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

  it('check limit of dates', () => {
    const datepickers = () => datePicker.findAllComponents({ name: 'v-date-picker' })
    expect(datepickers().length).toBe(2)
    const firstDatepicker = () => datepickers().at(1)
    const secondDatepicker = () => datepickers().at(1)
    expect(secondDatepicker().vm.tableDate).toBe('2020-05')

    const prevButton = () => firstDatepicker().findAll('.v-date-picker-header .v-btn').at(0)
    expect(prevButton().props().disabled).toBe(false)

    const nextButton = () => secondDatepicker().findAll('.v-date-picker-header .v-btn').at(1)
    expect(nextButton().props().disabled).toBe(true)
  })
})
