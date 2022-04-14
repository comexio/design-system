import LHeaderAlertContent from '~/src/components/alerts/LHeaderAlertContent.vue';

export default {
  title: 'Components/Base/Alert/HeaderAlertContent',
  component: LHeaderAlertContent,
  argTypes: {
    type: { 
      control: 'text',
      description: 'Content type that will set the icons style. Must be one of the ALERT_TYPE enum'
    },
    dismissible: { 
      control: 'boolean',
      description: 'Toggles the close button visibility'
    },
    clickDismiss: { 
      action: 'click:dismiss', 
      table: { disable: true }
    },
    'click:dismiss': { 
      description: 'Emitted when close button is clicked'
    },
    default: { 
      description: 'Default content slot'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LHeaderAlertContent },
  template: `
    <l-header-alert-content 
      v-bind="$props" 
      @click:dismiss="clickDismiss"
    >
      Alert content here
    </l-header-alert-content>
  `
});

//TODO: Validar warns por conta das actions dos eventos "clickDismiss" e "clickAction" e invalid handlers

export const Informational = Template.bind({});
Informational.args = {
  type: 'Informational'
};

export const InformationalNotDismissible = Template.bind({});
InformationalNotDismissible.args = {
  ...Informational.args,
  dismissible: false
};

export const Error = Template.bind({});
Error.args = {
  type: 'Error'
};

export const ErrorNotDismissible = Template.bind({});
ErrorNotDismissible.args = {
  ...Error.args,
  dismissible: false
};

export const Success = Template.bind({});
Success.args = {
  type: 'Success'
};

export const SuccessNotDismissible = Template.bind({});
SuccessNotDismissible.args = {
  ...Success.args,
  dismissible: false
};


export const Warning = Template.bind({});
Warning.args = {
  type: 'Warning'
};

export const WarningNotDismissible = Template.bind({});
WarningNotDismissible.args = {
  ...Warning.args,
  dismissible: false
};
