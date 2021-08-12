import LInputBorder from '~/src/components/inputs/LInputBorder.vue';

export default {
  title: 'Components/Inputs/Border',
  component: LInputBorder,
  argTypes: {
    default: { control: { disable: true }, description: 'Content' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LInputBorder },
  template: `
    <l-input-border 
      v-bind="$props" 
      style="width: 200px; height: 35px"
    />
  `,
});

export const Default = Template.bind({});
