import LCardNew from '~/src/components/cards/LCardNew.vue';
import LCardHeaderNew from '~/src/components/cards/LCardHeaderNew.vue';

export default {
  title: 'Components/Cards/Body',
  component: LCardNew,
  argTypes: {
    customShadow: { 
      type: 'boolean', 
      description: 'Applies lighter custom shadow to card. When false applies default shadow from Vuetify' 
    },
    default: { 
      description: 'Default vue slot'
    },
  }
};

const TemplateDefault = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCardNew, LCardHeaderNew },
  template: `
    <l-card-new
      v-bind="$props" 
      height="300"
      width="500"
    >
      <l-card-header-new 
        title="Card Title" 
        subtitle="Card subtitle here"
      />
      <div class="d-flex justify-center mt-2">
        Card content
      </div>
    </l-card-new>
  `
});

const TemplateOnlyTitle = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCardNew, LCardHeaderNew },
  template: `
    <l-card-new
      v-bind="$props" 
      height="300"
      width="500"
    >
      <l-card-header-new 
        title="Card Title" 
      />
      <div class="d-flex justify-center mt-2">
        Card content
      </div>
    </l-card-new>
  `
});

const TemplateCustomContentOnHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCardNew, LCardHeaderNew },
  template: `
    <l-card-new
      v-bind="$props" 
      height="300"
      width="500"
    >
      <l-card-header-new 
        title="Card Title" 
      >
        <v-icon size="16">mdi-star-outline</v-icon>
      </l-card-header-new>
      <div class="d-flex justify-center mt-2">
        Card content
      </div>
    </l-card-new>
  `
});

const TemplateWithoutHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCardNew, LCardHeaderNew },
  template: `
    <l-card-new
      v-bind="$props" 
      height="300"
      width="500"
    >
      <div class="d-flex justify-center mt-2">
        Card content
      </div>
    </l-card-new>
  `
});

export const Default = TemplateDefault.bind({});
Default.args = {};

export const OnlyTitle = TemplateOnlyTitle.bind({});
OnlyTitle.args = {};

export const WithCustomContentOnHeader = TemplateCustomContentOnHeader.bind({});
WithCustomContentOnHeader.args = {};

export const WithoutHeader = TemplateWithoutHeader.bind({});
WithoutHeader.args = {};
