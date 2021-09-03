import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LDatePickerMonth from '~/src/components/inputs/LDatePickerMonth.vue';

export default {
  title: 'Components/Inputs/DatePicker/Month',
  component: LDatePickerMonth,
  argTypes: {
    value: {
      control: 'array',
      description:
        'Array of periods'
    },
    limit: {
      control: 'object',
      description:
        'Object with min and max limits'
    },
    monthsList: {
      control: 'array',
      description:
        'List of available months to be used as placeholder'
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
    bordered: { control: 'boolean', description: 'Toggles datepicker border and adds LDatePickerMonth--bordered class' },
    borderColor: { control: 'color', description: 'Color of the border' },
    input: {
      table: {
        disable: true
      }
    }
  }
}

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  data () {
    return {
      date: null
    }
  },
  components: { LDatePickerMonth },
  template: `
    <l-date-picker-month
      v-model='date' 
      v-bind='$props' 
      style='max-width: 300px;' 
    />
  `
})

export const Default = Template.bind({});
Default.args = {
  limit: { min: '2020-01-01', max: '2021-06-28' },
  monthsList: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
}

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  date: ['2020-01','2021-02'],
  value: ['2020-01','2020-12'],
}

export const FilledEnglish = Template.bind({});
FilledEnglish.args = {
  ...Filled.args,
  locale: 'en'
}

export const Bordered = Template.bind({});
Bordered.args = {
  ...Filled.args,
  bordered: true
}
