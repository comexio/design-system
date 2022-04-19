import LToast from '~/src/components/alerts/LToast.vue';
import LToastContent from '~/src/components/alerts/LToastContent.vue';

export default {
  title: 'Components/Base/Alert/Toast',
  component: LToast,
  argTypes: {
    wrapperClass: { 
      control: 'text', 
      description: 'Adds additional classes into LToast wrapper div'
    },
    type: { 
      control: 'text',
      description: 'Overrides the bookmarkColor according to the ALERT_TYPE feedbackColor. Must be one of the ALERT_TYPE enum'
    },
    bookmarkColor: { 
      control: 'color', 
      description: 'Toast bookmark color'
    },
    clickAction: { 
      action: 'click:action', 
      table: { disable: true }
    },
    default: { 
      description: 'Default VSnackBar slot'
    }
  }
};

const defaultTemplateOptions = {
  methods: {
    closeAlert () {
      this.value = false
    }
  }
}

const TemplateInformational = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LToast, LToastContent },
  ...defaultTemplateOptions,
  template: `
    <div>
      <l-toast 
        v-bind="$props" 
        @input="closeAlert" 
      >
        <l-toast-content 
          type="Informational"
          title="Informational alert"
          description="Alert description here"
          action-button-text="action"
          action-button
          dismissible
          @click:dismiss="closeAlert"
          @click:action="clickAction"
        />
      </l-toast>
    </div>
  `
});

const TemplateError = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LToast, LToastContent },
  ...defaultTemplateOptions,
  template: `
    <div>
      <l-toast 
        v-bind="$props" 
        @input="closeAlert" 
      >
        <l-toast-content 
          type="Error"
          title="Error alert"
          description="Alert description here"
          action-button-text="action"
          action-button
          dismissible
          @click:dismiss="closeAlert"
          @click:action="clickAction"
        />
      </l-toast>
    </div>
  `
});

const TemplateSuccess = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LToast, LToastContent },
  ...defaultTemplateOptions,
  template: `
    <div>
      <l-toast 
        v-bind="$props" 
        @input="closeAlert" 
      >
        <l-toast-content 
          type="Success"
          title="Success alert"
          description="Alert description here"
          action-button-text="action"
          action-button
          dismissible
          @click:dismiss="closeAlert"
          @click:action="clickAction"
        />
      </l-toast>
    </div>
  `
});

const TemplateWarning = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LToast, LToastContent },
  ...defaultTemplateOptions,
  template: `
    <div>
      <l-toast 
        v-bind="$props" 
        @input="closeAlert" 
      >
        <l-toast-content 
          type="Warning"
          title="Warning alert"
          description="Alert description here"
          action-button-text="action"
          action-button
          dismissible
          @click:dismiss="closeAlert"
          @click:action="clickAction"
        />
      </l-toast>
    </div>
  `
});

const TemplateCustom = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LToast, LToastContent },
  ...defaultTemplateOptions,
  template: `
    <div>
      <l-toast 
        v-bind="$props"
        @input="closeAlert" 
      >
        <span style="align-self: center;">Custom content</span>
      </l-toast>
    </div>
  `
});

//TODO: Validar problema de alerta fora da Story quando value vem como true
//TODO: Validar warns por conta das actions dos eventos "clickDismiss" e "clickAction" e invalid handlers

export const Informational = TemplateInformational.bind({});
Informational.args = {
  value: false,
  type: 'Informational'
};

export const Error = TemplateError.bind({});
Error.args = {
  value: false,
  type: 'Error'
};

export const Success = TemplateSuccess.bind({});
Success.args = {
  value: false,
  type: 'Success'
};

export const Warning = TemplateWarning.bind({});
Warning.args = {
  value: false,
  type: 'Warning'
};

export const CustomWithBookmarkColor = TemplateCustom.bind({});
CustomWithBookmarkColor.args = {
  value: false,
  bookmarkColor: '#ABC'
};

export const Custom = TemplateCustom.bind({});
Custom.args = {
  value: false,
};
