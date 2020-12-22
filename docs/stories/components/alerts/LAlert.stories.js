import LAlert from '../../../../src/components/alerts/LAlert.vue';

export default {
  title: 'Components/Alert',
  component: LAlert,
  argTypes: {
    msg: { control: 'text', default: null },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LAlert },
  template: '<l-alert v-bind="$props" style="align: center"> </l-alert>',
});

export const Default = Template.bind({});
Default.args = {
    msg: 'Im an alert!',
};