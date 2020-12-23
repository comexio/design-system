import LAlert from '../../../../src/components/alerts/LAlert.vue';

export default {
  title: 'Design System/Components/Base/Alert',
  component: LAlert,
  argTypes: {
    msg: { control: 'text', description: 'Alert message'},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LAlert },
  template: '<l-alert v-bind="$props"> </l-alert>',
});

export const Default = Template.bind({});
Default.args = {
    msg: 'Im an alert!',
};