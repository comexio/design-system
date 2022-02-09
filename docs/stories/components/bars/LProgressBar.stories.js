import LProgressBar from '~/src/components/bars/LProgressBar.vue';

export default {
  title: 'Components/Progress/Bar',
  component: LProgressBar,
  argTypes: {
    value: { 
      table: { disable: true }
    },
    height: { 
      table: { disable: true }
    },
    backgroundColor: { 
      table: { disable: true }
    },
    default: { 
      table: { disable: true }
    },
    showPointer: { 
      control: 'boolean',
      description: 'Toggles cursor pointer on hover and LProgressBar--withoutPointer class'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LProgressBar },
  template: `
    <l-progress-bar v-bind="$props" />
  `
});

export const Default = Template.bind({});
Default.args = {
  value: 15
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
  showPointer: false
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  value: 30,
  color: '#8345A5',
  backgroundColor: '#DAD1E9',
  showPointer: false
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  value: 45,
  height: '30px',
  showPointer: false
};
