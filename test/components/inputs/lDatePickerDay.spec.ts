import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LDatePickerDay from '~/src/components/inputs/LDatePickerDay.vue'

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
    value: ['2020-03-01', '2020-05-31']
  },
  data () {
    return {
      monthsPeriod: ['2020-03-01', '2020-05-31']
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
  let datePicker: Wrapper<LDatePickerDay>

  beforeAll(() => {
    datePicker = mount(LDatePickerDay, {
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
    const firstDatepicker = () => datepickers().at(0)
    const secondDatepicker = () => datepickers().at(1)
    expect(secondDatepicker().vm.tableDate).toBe('2020-05')

    const prevButton = () => firstDatepicker().findAll('.v-date-picker-header .v-btn').at(0)
    expect(prevButton().props().disabled).toBe(false)

    const nextButton = () => secondDatepicker().findAll('.v-date-picker-header .v-btn').at(1)
    expect(nextButton().props().disabled).toBe(true)
  })

  it('Check date limit by range', async () => {
    datePicker.setProps({ rangeDays: 30 })

    await datePicker.vm.$nextTick()

    const datepickers = () => datePicker.findAllComponents({ name: 'v-date-picker' })
    const firstDatepicker = () => datepickers().at(0)
    const dayPicker = () => firstDatepicker().find('tbody tr td .v-btn')
    expect(dayPicker().text()).toBe('1')
    dayPicker().trigger('click')

    await datePicker.vm.$nextTick()

    expect(datePicker.vm.rangeLimit).toEqual({"max": "2020-05-01", "min": "2020-03-02"})
  })

  it('check multiple click in same date', async () => {
    datePicker.setProps({ value: ['2020-05-01', '2020-05-01'] })

    await datePicker.vm.$nextTick()

    const datepickers = () => datePicker.findAllComponents({ name: 'v-date-picker' })
    const firstDatepicker = () => datepickers().at(0)
    const dayPicker = () => firstDatepicker().find('tbody tr td .v-btn')
    dayPicker().trigger('click')

    await datePicker.vm.$nextTick()

    expect(datePicker.vm.value).toStrictEqual(['2020-05-01'])
  })

  // it('check if shows ordered date when click high date first', async () => {
  //   datePicker.setProps({ value: [] })

  //   await datePicker.vm.$nextTick()

  //   const firstDatepicker = () => datePicker.findAllComponents({ name: 'v-date-picker' }).at(0)
  //   const dayPickers = () => firstDatepicker().findAll('tbody tr td .v-btn')
  //   // expect(dayPickers().at(15).html()).toBe(true)
  //   dayPickers().at(15).trigger('click')

  //   await datePicker.vm.$nextTick()

  //   dayPickers().at(10).trigger('click')

  //   await datePicker.vm.$nextTick()

  //   expect(datePicker.vm.monthsPeriod).toBe(true)
  //   expect(dayPickers().length).toBe(30)
  // })

  it('check datepicker is closed after select two dates', async () => {
    datePicker.setProps({ closeOnSelect: true })
    datePicker.setData({ monthsPeriod: ['2020-05-01', '2020-05-02'] })

    await datePicker.vm.$nextTick()

    expect(datePicker.vm.menu).toBe(false)
  })

  it('check if header is disabled when first calendar is active', async () => {
    await new Promise(resolve => setTimeout(() => { resolve(1) }, 100))

    const datepickers = () => datePicker.findAllComponents({ name: 'v-date-picker' })
    const firstHeaderButton = () => datepickers().at(0).find('.v-date-picker-header__value button')
    const secondHeaderButton = () => datepickers().at(1).find('.v-date-picker-header__value button')

    firstHeaderButton().trigger('click')

    await datePicker.vm.$nextTick()
    await new Promise(resolve => setTimeout(() => { resolve(1) }, 100))

    expect(datepickers().at(0).vm.activePicker).toBe('MONTH')
    expect(secondHeaderButton().attributes('disabled')).toBeDefined()

  })
})
