import LTag from '@components/tags/LTag.vue';

export default {
  title: 'Design System/Components/Base/LTag',
  component: LTag,
  argTypes: {
    text: { control: 'text', description: 'Text to be applied to the tag' },
    number: { control: 'text', description: 'Number displayed on the right side of the tag' },
    close: { control: 'boolean', description: 'Button close display: true / not-display: false' },
    link: { control: 'boolean', description: 'Button link display: true / not-display: false' },
    label: { control: 'boolean', description: 'Active label:true / not-label:false' },
    color: { control: 'color', description: 'Define color tag' },
    tagManager: { control: 'boolean', description: 'Not Defined', table: { disable: true } },
    select: { control: 'boolean', description: 'Not Defined',  table: { disable: true }},
    customIcon: { control: 'text', description: 'Enable customize icon' },
    outlined: { control: 'boolean', description: 'Control to define whether the tag will be a outlined' },
    colorRelation: { control: 'object', description: 'Define the contrast', table: { disable: true }},
    removeTag: { action: 'removeTag', description: 'Event tag removed' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTag },
  template: '<l-tag v-bind="$props" @removeTag="removeTag"> </l-tag>',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Default Tag',
  color: '#E2DAF8',
};

export const Number = Template.bind({});
Number.args = {
  text: 'Number Tag',
  number: 10,
  color: '#E2DAF8',
}
export const Closable = Template.bind({});
Closable.args = {
  text: 'Closable Tag',
  color: '#E2DAF8',
  close: true
};

export const IconCustomLink = Template.bind({});
IconCustomLink.args = {
  text: 'Icon custom',
  color: '#E2DAF8',
  customIcon: 'mdi-check-bold',
  link: true
};
