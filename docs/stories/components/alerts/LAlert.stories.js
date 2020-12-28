import LAlert from '@components/alerts/LAlert.vue';

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
  template: '<l-alert v-bind="$props" style="align: center; margin-left: 40%; margin-top: -20%"> </l-alert>',
});

export const Action = Template.bind({});
Action.args = {
    msg: 'Im an action alert!',
};