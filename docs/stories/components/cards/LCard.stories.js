import LCard from '~/src/components/cards/LCard.vue';

export default {
  title: 'Deprecated/Cards/Card',
  component: LCard,
  argTypes: {
    title: { control: 'text', description: 'Card title' },
    description: { control: 'text', description: 'Card description' },
    data: {
      control: 'object',
      description:
        'Data object that will be used in the card content. It must exist so you can use the default slot'
    },
    height: { control: 'text', description: 'Card height' },
    default: { description: 'Card content slot' },
    header: { description: 'LCardHeader content slot' },
    close: { table: { disable: true } },
    error: { table: { disable: true } },
    generateId: { control: 'boolean', description: 'Controls if component will generate id selector for HTML elements' },
    hasShadow: { control: 'boolean', description: 'Controls if component has shadow' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCard },
  template:
    '<l-card v-bind="$props" style="width: 200px"><p style="text-align: center">Card content</p></l-card>'
});

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'Card description',
  data: { key: 0 },
  height: '150px'
};

export const WithoutTitleAndDescription = Template.bind({});
WithoutTitleAndDescription.args = {
  data: { key: 0 },
  height: '150px',
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  title: 'Card Title',
  description: 'Card description',
  data: { key: 0 },
  height: '150px',
  hasShadow: true
};

export const WithoutTitleAndWithShadow = Template.bind({});
WithoutTitleAndWithShadow.args = {
  description: 'Card description',
  data: { key: 0 },
  height: '150px',
  hasShadow: true
};

const TemplateWithSlotHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCard },
  template:`
    <l-card v-bind="$props" style="width: 200px">
      <template v-slot:header>
        <v-icon
          size="16px"
          color="#5B11BA"
        >
          mdi-information
        </v-icon>
      </template>
    </l-card>
  `
});

export const DefaultWithSlotHeader = TemplateWithSlotHeader.bind({});
DefaultWithSlotHeader.args = {
  ...Default.args
}
