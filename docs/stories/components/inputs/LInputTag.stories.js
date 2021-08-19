import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LInputTag from '~/src/components/inputs/LInputTag.vue';

export default {
  title: 'Deprecated/Inputs/Filters Input/Tag Input',
  component: LInputTag,
  argTypes: {
    value: { control: 'array', description: 'Array of input items' },
    expand: { control: 'boolean', description: 'Indicates if input is expandable or not' },
    labelPointer: { control: 'boolean', description: 'Sets pointer cursor on label' },
    hideDetails: { control: 'boolean', description: 'Indicates if input should hide details or not' },
    label: { control: { disable: true }, description: 'Label content' },
    disabled: { control: 'boolean', description: 'Indicates the disabled state of the input' },
    large: { control: 'boolean', description: 'Sets the input to its large size: 40px' },
    small: { control: 'boolean', description: 'Sets the input to its small size: 25px' },
    input: { action: 'input', description: 'Emitted when input is received'},
    clickAppendOuter: { action: 'clickAppendOuter', description: 'Emitted when expand button is clicked' }
  },
};

const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LInputTag },
  template: `
    <l-input-tag 
      v-bind="$props" 
      @input="input" 
      @clickAppendOuter="clickAppendOuter" 
      style="width: 600px" 
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: ['First item', 'Second item', 'Third item'],
  expand: false
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  large: true
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  small: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

export const Expandable = Template.bind({});
Expandable.args = {
  ...Default.args,
  expand: true
};

export const ShowDetails = Template.bind({});
ShowDetails.args = {
  ...Default.args,
  hideDetails: false
};
