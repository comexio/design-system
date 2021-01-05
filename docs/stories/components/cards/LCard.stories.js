import LCard from '@components/cards/LCard.vue';

export default {
  title: 'Design System/Components/Cards/Card',
  component: LCard,
  argTypes: {
    title: {control: 'text', description: 'Card title'},
    description: {control: 'text', description: 'Card description'},
    data: {control: 'object', description: 'Data object that will be used in the card content. It must exist so you can use the default slot'},
    height: {control: 'text', description: 'Card height'},
    default: {description: 'Card content slot'},
    close: {table: {disable: true}},
    error: {table: {disable: true}}

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCard },
  template: '<l-card v-bind="$props" style="width: 200px"><p style="text-align: center">Card content</p></l-card>',
});

export const Default = Template.bind({});
Default.args = {
    title: 'Card Title',
    description: 'Card description',
    data: {"key":0},
    height: '150px',
}