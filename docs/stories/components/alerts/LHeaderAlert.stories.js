import LHeaderAlert from '~/src/components/alerts/LHeaderAlert.vue';
import LHeaderAlertContent from '~/src/components/alerts/LHeaderAlertContent.vue';
import LButtonNew from '~/src/components/buttons/LButtonNew.vue';

export default {
  title: 'Components/Base/Alert/HeaderAlert',
  component: LHeaderAlert,
  argTypes: {
    type: { 
      control: 'text',
      description: 'Overrides the background and border colors according to the ALERT_TYPE feedbackColor. Must be one of the ALERT_TYPE enum'
    },
    backgroundColor: { 
      control: 'color',
      description: 'Background color of the alert'
    },
    borderColor: { 
      control: 'color',
      description: 'Border color of the alert'
    },
    default: { 
      description: 'Default content slot'
    }
  }
};

const defaultTemplateOptions = {
  data () {
    return { 
      showAlert: true 
    }
  },
  methods: {
    toggleAlert () {
      this.showAlert = !this.showAlert
    }
  }
}

const TemplateInformational = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LHeaderAlert, LHeaderAlertContent, LButtonNew },
  ...defaultTemplateOptions,
  template: `
    <l-header-alert 
      v-if="showAlert"
      v-bind="$props" 
    >
      <l-header-alert-content 
        type="Informational" 
        @click:dismiss="toggleAlert"
      >
        Alert content here
      </l-header-alert-content>
    </l-header-alert>
    <l-button-new v-else primary @click="toggleAlert">
      Show alert
    </l-button-new>
  `
});

const TemplateError = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LHeaderAlert, LHeaderAlertContent, LButtonNew },
  ...defaultTemplateOptions,
  template: `
    <l-header-alert 
      v-if="showAlert"
      v-bind="$props" 
    >
      <l-header-alert-content 
        type="Error"
        @click:dismiss="toggleAlert"
      >
        Alert content here
      </l-header-alert-content>
    </l-header-alert>
    <l-button-new v-else primary @click="toggleAlert">
      Show alert
    </l-button-new>
  `
});

const TemplateSuccess = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LHeaderAlert, LHeaderAlertContent, LButtonNew },
  ...defaultTemplateOptions,
  template: `
    <l-header-alert 
      v-if="showAlert"
      v-bind="$props" 
    >
      <l-header-alert-content 
        type="Success"
        @click:dismiss="toggleAlert"
      >
        Alert content here
      </l-header-alert-content>
    </l-header-alert>
    <l-button-new v-else primary @click="toggleAlert">
      Show alert
    </l-button-new>
  `
});

const TemplateWarning = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LHeaderAlert, LHeaderAlertContent, LButtonNew },
  ...defaultTemplateOptions,
  template: `
    <l-header-alert
      v-if="showAlert" 
      v-bind="$props" 
    >
      <l-header-alert-content 
        type="Warning"
        @click:dismiss="toggleAlert"
      >
        Alert content here
      </l-header-alert-content>
    </l-header-alert>
    <l-button-new v-else primary @click="toggleAlert">
      Show alert
    </l-button-new>
  `
});

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LHeaderAlert },
  template: `
    <l-header-alert 
      v-bind="$props"
    >
      <span style="align-self: center;">Custom content</span>
    </l-header-alert>
  `
});

export const Informational = TemplateInformational.bind({});
Informational.args = {
  type: 'Informational'
};

export const Error = TemplateError.bind({});
Error.args = {
  type: 'Error'
};

export const Success = TemplateSuccess.bind({});
Success.args = {
  type: 'Success'
};

export const Warning = TemplateWarning.bind({});
Warning.args = {
  type: 'Warning'
};

export const Custom = TemplateCustom.bind({});
Custom.args = {
  backgroundColor: '#FFF',
  borderColor: '#000'
};
