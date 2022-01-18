import LCardHeaderNew from '~/src/components/cards/LCardHeaderNew.vue';

export default {
  title: 'Components/Cards/Header',
  component: LCardHeaderNew,
  argTypes: {
    title: {
      control: 'text',
      description: 'Text to be rendered as the header title'
    },
    subtitle: {
      control: 'text',
      description: 'Text to be rendered as the header subtitle'
    },
    prepend: {
      description: 'Slot rendered before the text content'
    },
    default: { 
      description: 'Default vue slot rendered in the right side of the card'
    }
  }
};

const TemplateDefault = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCardHeaderNew },
  template: `
    <l-card-header-new 
      v-bind="$props" 
      style="maxWidth: 500px;"
    />
  `
});

const TemplateDefaultSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCardHeaderNew },
  template: `
    <l-card-header-new 
      v-bind="$props" 
      style="maxWidth: 500px;"
    >
      <v-icon size="16">mdi-star-outline</v-icon>
    </l-card-header-new>
  `
});

const TemplatePrependSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCardHeaderNew },
  template: `
    <l-card-header-new 
      v-bind="$props" 
      style="maxWidth: 500px;"
    >
      <template #prepend>
        <v-icon size="16">mdi-star-outline</v-icon>
      </template>
    </l-card-header-new>
  `
});

export const Default = TemplateDefault.bind({});
Default.args = {
  title: 'Card title',
  subtitle: 'Card subtitle here'
};

export const OnlyTitle = TemplateDefault.bind({});
OnlyTitle.args = {
  title: 'Card title'
};

export const WithCustomContentOnDefaultSlot = TemplateDefaultSlot.bind({});
WithCustomContentOnDefaultSlot.args = {
  ...Default.args
};

export const WithCustomContentOnPrependSlot = TemplatePrependSlot.bind({});
WithCustomContentOnPrependSlot.args = {
  ...Default.args
};
