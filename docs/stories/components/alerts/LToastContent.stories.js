import LToastContent from '~/src/components/alerts/LToastContent.vue';

export default {
  title: 'Components/Base/Alert/ToastContent',
  component: LToastContent,
  argTypes: {
    type: {
      control: 'text',
      description: 'Content type that will set the icons style. Must be one of the ALERT_TYPE enum'
    },
    title: {
      control: 'text',
      description: 'Content title'
    },
    description: {
      control: 'text',
      description: 'Content description'
    },
    dismissible: {
      control: 'boolean',
      description: 'Toggles dismissible button rendering'
    },
    actionButton: {
      control: 'boolean',
      description: 'Toggles actionButton button rendering'
    },
    actionButtonText: {
      control: 'text',
      description: 'Text to render in actionButton. Requires actionButton true to be rendered'
    },
    clickAction: { 
      action: 'click:action', 
      table: { disable: true }
    },
    clickDismiss: { 
      action: 'click:dismiss', 
      table: { disable: true }
    },
    'click:action': { 
      description: 'Emitted when action button is clicked'
    },
    'click:dismiss': { 
      description: 'Emitted when close button is clicked'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LToastContent },
  template: `
    <l-toast-content 
      v-bind="$props" 
      @click:dismiss="clickDismiss"
      @click:action="clickAction"
    />
  `
});

export const InformationalTitleOnly = Template.bind({});
InformationalTitleOnly.args = {
  title: 'Informational alert',
  type: 'Informational',
  dismissible: false
};

export const InformationalTitleAndDescription = Template.bind({});
InformationalTitleAndDescription.args = {
  ...InformationalTitleOnly.args,
  description: 'Alert description here'
};

export const InformationalWithAction = Template.bind({});
InformationalWithAction.args = {
  ...InformationalTitleAndDescription.args,
  actionButton: true,
  actionButtonText: 'Action'
};

export const InformationalDismissible = Template.bind({});
InformationalDismissible.args = {
  ...InformationalWithAction.args,
  dismissible: true
};

export const ErrorTitleOnly = Template.bind({});
ErrorTitleOnly.args = {
  type: 'Error',
  title: 'Error alert',
  dismissible: false
};

export const ErrorTitleAndDescription = Template.bind({});
ErrorTitleAndDescription.args = {
  ...ErrorTitleOnly.args,
  description: 'Alert description here'
};

export const ErrorWithAction = Template.bind({});
ErrorWithAction.args = {
  ...ErrorTitleAndDescription.args,
  actionButton: true,
  actionButtonText: 'Action'
};

export const ErrorDismissible = Template.bind({});
ErrorDismissible.args = {
  ...ErrorWithAction.args,
  dismissible: true
};

export const SuccessTitleOnly = Template.bind({});
SuccessTitleOnly.args = {
  type: 'Success',
  title: 'Success alert',
  dismissible: false,
};

export const SuccessTitleAndDescription = Template.bind({});
SuccessTitleAndDescription.args = {
  ...SuccessTitleOnly.args,
  description: 'Alert description here'
};

export const SuccessWithAction = Template.bind({});
SuccessWithAction.args = {
  ...SuccessTitleAndDescription.args,
  actionButton: true,
  actionButtonText: 'Action'
};

export const SuccessDismissible = Template.bind({});
SuccessDismissible.args = {
  ...SuccessWithAction.args,
  dismissible: true
};

export const WarningTitleOnly = Template.bind({});
WarningTitleOnly.args = {
  type: 'Warning',
  title: 'Warning alert',
  dismissible: false
};

export const WarningTitleAndDescription = Template.bind({});
WarningTitleAndDescription.args = {
  ...WarningTitleOnly.args,
  description: 'Alert description here',
  dismissible: false
};

export const WarningWithAction = Template.bind({});
WarningWithAction.args = {
  ...WarningTitleAndDescription.args,
  actionButton: true,
  actionButtonText: 'Action'
};

export const WarningDismissible = Template.bind({});
WarningDismissible.args = {
  ...WarningWithAction.args,
  dismissible: true
};
