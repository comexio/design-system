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

export const Informational = TemplateInformational.bind({});
Informational.args = {
  value: false,
  bookmarkColor: '#4B66C6'
};

export const ErrorFull = TemplateError.bind({});
ErrorFull.args = {
  value: false,
  bookmarkColor: '#CC2C28'
};

export const Success = TemplateSuccess.bind({});
Success.args = {
  value: false,
  bookmarkColor: '#31880C'
};

export const Warning = TemplateWarning.bind({});
Warning.args = {
  value: false,
  bookmarkColor: '#F6B334'
};
