import LCheckboxNew from '~/src/components/inputs/LCheckboxNew.vue';

export default {
  title: 'Components/Inputs/Checkbox',
  component: LCheckboxNew,
  argTypes: {
    value: {
      control: 'boolean',
      description: `Toggles checkbox state. This prop is used to create an inner v-model so you can retrieve its value`
    },
    itemValue: {
      description: `Toggles checkbox state. This prop value is propagated to the value prop from VCheckbox,
      so instead of setting value="someValue" on your component, use item-value="someValue". It can receive any type`
    },
    label: {
      table: { disable: true }
    },
    color: {
      table: { disable: true }
     },
    input: {
      table: { disable: true }
    }
  },
};


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCheckboxNew },
  template: `<l-checkbox-new id="checkbox" v-bind="$props"></l-checkbox-new>`
});

const TemplateMultipleCheckboxes = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCheckboxNew },
  template: `
    <div>
      <l-checkbox-new
        v-bind="$props"
        v-for="checkbox in 3"
        :key="checkbox"
      >
      </l-checkbox-new>
    </div>
  `
});


export const Default = Template.bind({});
Default.args = {
  value: false,
  label: 'Checkbox'
};

export const WithColor = Template.bind({});
WithColor.args = {
  value: true,
  label: 'Checkbox',
  color: '#f2f'
};

export const MultipleCheckboxes = TemplateMultipleCheckboxes.bind({},);
MultipleCheckboxes.args = {
  label: 'Checkbox',
  itemValue: 'Checkbox value'
};
