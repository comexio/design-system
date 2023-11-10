import LDatePickerDay from "~/src/components/inputs/LDatePickerDay.vue";

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
      description: `Number of days to limit the range after selection of date.
      This prop has priority over years, if you pass rangeYears and rangeDays props, rangeDays will be used to limit selection.`
    },
    rangeYears: {
      control: "number",
      description: 'Number of years to limit the range after selection of date'
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
    dropdownIcon: { control: 'boolean', description: 'Toggles dropdown icon visibility' },
    bordered: { control: 'boolean', description: 'Toggles datepicker border and adds LDatePickerDay--bordered class' },
    borderColor: { control: 'color', description: 'Color of the border' },
    allowTypingDate: { control: 'boolean', description: 'Allow typing date manually on datepicker' },
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

const TemplateWithSlot = (args, { argTypes }) => ({
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
      style="max-width: 300px;"
    >
      <template #activator="{ on, formattedDate }">
        <span 
          v-on="on"
          data-testid="activator"
        >
          Value: {{ formattedDate }}
        </span>
      </template>
    </l-date-picker-day>
  `
})

const TemplateWithFooterSlot = (args, { argTypes }) => ({
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
      style="max-width: 300px;"
    >
      <template #activator="{ on, formattedDate }">
        <span 
          v-on="on"
          data-testid="activator"
        >
          Value: {{ formattedDate }}
        </span>
      </template>
      <template #footer="{ toggleMenu }">
        <button @click="toggleMenu"> Footer content </button>
      </template>
    </l-date-picker-day>
  `
})

export const Default = Template.bind({});
Default.args = {
  opened: () => ({}),
  closed: () => ({})
}

export const Filled = Template.bind({});
Filled.args = {
  date: ["2020-12-08","2020-12-18"],
  limit: { min: '2020-10-01', max: '2021-01-25' },
  rangeDays: 15,
  itemsColor: '#5B11BA',
  closeOnSelect: true,
  opened: () => ({}),
  closed: () => ({})
}

export const FilledOverRange = Template.bind({});
FilledOverRange.args = {
  date: ['2020-03-01', '2020-05-31'],
  itemsColor: '#5B11BA',
  rangeDays: 10,
  closeOnSelect: true,
  opened: () => ({}),
  closed: () => ({})
}

export const FilledEnglish = Template.bind({});
FilledEnglish.args = {
  ...Filled.args,
  locale: 'en'
}

export const AllowedTyping = Template.bind({});
AllowedTyping.args = {
  date: ["2020-12-08","2020-12-18"],
  limit: { min: '2020-10-01', max: '2021-01-25' },
  rangeDays: 100,
  itemsColor: '#5B11BA',
  closeOnSelect: true,
  allowTypingDate: true,
  opened: () => ({}),
  closed: () => ({})
}

export const AllowedTypingEnglish = Template.bind({});
AllowedTypingEnglish.args = {
  ...AllowedTyping.args,
  locale: 'en'
}

export const Bordered = Template.bind({});
Bordered.args = {
  ...Filled.args,
  bordered: true
}

export const DefaultWithSlot = TemplateWithSlot.bind({});
DefaultWithSlot.args = {
  opened: () => ({}),
  closed: () => ({})
}

export const DefaultWithFooterSlot = TemplateWithFooterSlot.bind({});
DefaultWithSlot.args = {
  opened: () => ({}),
  closed: () => ({})
}
