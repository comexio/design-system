import LDatePickerDay from "@components/inputs/LDatePickerDay.vue";

export default {
  title: "Components/Inputs/DatePicker/Day",
  component: LDatePickerDay,
  argTypes: {
    value: {
      control: "array",
      description:
        "Array of periods"
    },
    limit: {
      control: "object",
      description:
        "Object with min and max limits"
    },
    rangeDays: {
      control: "number",
      description:
        "Number of range after selection of date"
    },
    closeOnSelect: {
      control: "boolean",
      description: "Close datepicker on select two dates"
    },
    datepickerStatus: {
      control: "boolean",
      description: `Indicates the datepicker status according to parent: true (active) / false (inactive). 
      It will not update to true automatically when datepicker opens. 
      It is useful If you want to set the datepicker on/off according to parent events`
    },
    opened: {
      action: "opened",
      description: 'Emitted when datepicker is opened (full size)'
    },
    closed: {
      action: "closed",
      description: `Event avaliable when datepickerStatus is sent as false, making the datepicker get closed. 
      With this the parent component can trigger some action according to the updated datepickerStatus`
    },
    itemsColor: {
      control: 'color',
      description: 'Color of the selected dates and icon'
    },
    locale: {
      control: 'text',
      description: 'Locale of the datepicker'
    },
    input: {
      table: {
        disable: true
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      date: null
    }
  },
  components: { LDatePickerDay },
  template: `
    <l-date-picker-day
      v-model="date" 
      v-bind="$props" 
      @opened="opened"
      @closed="closed"
      style="max-width: 300px;" 
    />
  `
})

export const WithoutData = Template.bind({});
WithoutData.args = {
}

export const Filled = Template.bind({});
Filled.args = {
  date: ["2020-12-08","2020-12-18"],
  value: ["2020-12-08","2020-12-18"],
  limit: { min: '2020-10-01', max: '2021-01-25' },
  rangeDays: 15,
  itemsColor: '#FF8F1C',
  closeOnSelect: true
}

export const FilledEnglish = Template.bind({});
FilledEnglish.args = {
  date: ["2020-12-08","2020-12-18"],
  value: ["2020-12-08","2020-12-18"],
  limit: { min: '2020-10-01', max: '2021-01-25' },
  rangeDays: 15,
  itemsColor: '#FF8F1C',
  closeOnSelect: true,
  locale: 'en'
}
