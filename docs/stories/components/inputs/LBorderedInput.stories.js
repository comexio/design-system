import LBorderedInput from '~/src/components/inputs/LBorderedInput.vue';

export default {
  title: 'Components/Inputs/Bordered',
  component: LBorderedInput,
  argTypes: {
    default: {control: {disable: true}, description: 'Input content slot'},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LBorderedInput },
  template: '<l-bordered-input v-bind="$props" style="width: 150px">Im a bordered input!</l-bordered-input>',
});

export const Default = Template.bind({});