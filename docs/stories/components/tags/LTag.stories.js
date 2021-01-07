import LTag from '@components/tags/LTag.vue';

export default {
  title: 'Design System/Components/Base/LTag',
  component: LTag,
  argTypes: {
    text: { control: 'text', description: 'Text to be applied to the tag' },
    number: { control: 'text', description: 'Number displayed on the right side of the tag' },
    close: { control: 'boolean', description: 'Controller display button close' },
    link: { control: 'boolean', description: 'Control of close link functionality' },
    label: { control: 'boolean', description: 'Control to define whether the tag will be a label' },
    color: { control: 'color', description: 'Define color tag' },
    tagManager: { control: 'boolean', description: 'Not Defined', table: { disable: true } },
    select: { control: 'boolean', description: 'Not Defined',  table: { disable: true }},
    customIcon: { control: 'text', description: 'Enable customize icon' },
    outlined: { control: 'boolean', description: 'Control to define whether the tag will be a outlined' },
    colorRelation: { control: 'object', description: 'Define the contrast', table: { disable: true }},
    removeTag: { action: 'Tag removed', description: 'Event tag removed' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTag },
  template: '<l-tag v-bind="$props" @removeTag="removeTag"> </l-tag>',

});

export const Default = Template.bind({});
Default.args = {
  text: null,
  number: null,
  color: '#E2DAF8',
  customIcon: null,
  colorRelation: null,
};
