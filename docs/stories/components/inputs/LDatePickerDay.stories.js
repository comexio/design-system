import LDatePickerDay from "@components/inputs/LDatePickerDay.vue";

export default {
  title: "Components/Inputs/LDatePickerDay",
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
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LDatePickerDay },
  template:
    '<l-date-picker-day v-bind="$props" style="max-width: 300px;" />'
})

export const WithoutData = Template.bind({});
WithoutData.args = {
}

export const Filled = Template.bind({});
Filled.args = {
  value: ["2020-12-08","2020-12-18"],
  limit: { min: '2020-10-01', max: '2021-01-25' },
  rangeDays: 15,
  itemsColor: '#FF8F1C'
}

