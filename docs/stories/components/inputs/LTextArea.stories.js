import LTextArea from '~/src/components/inputs/LTextArea.vue'

export default {
  title: 'Components/Inputs/Text Area',
  component: LTextArea
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTextArea },
  template: `
    <div style="padding: 20px 50px">
      <l-text-area
        v-bind="$props"
      />
    </div>
  ` 
})

const TemplateWithSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTextArea },
  template: `
    <div style="padding: 20px 50px">
      <l-text-area
        v-bind="$props"
      >
        <template v-slot:append>
          <v-icon
            data-testid="LTextArea__icon"
            size="16px"
            color="#5B11BA"
          >
            mdi-information
          </v-icon>
        </template>
      </l-text-area>
    </div>
  ` 
});

export const Default = Template.bind({});
Default.args = {
  outlined: true,
  dense: true,
  label: 'Label'
}

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  ...Default.args,
  disabled: true
}

export const DefaultWithError = Template.bind({});
DefaultWithError.args = {
  ...Default.args,
  error: true
}

export const DefaultWithSlot = TemplateWithSlot.bind({});
DefaultWithSlot.args = {
  ...Default.args
}
