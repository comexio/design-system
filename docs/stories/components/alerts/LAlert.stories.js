import LAlert from "~/src/components/alerts/LAlert.vue";
import LButton from "~/src/components/buttons/LButtonNew.vue"

export default {
  title: "Components/Base/Alert",
  component: LAlert,
  argTypes: {
    msg: { control: "text", description: "Alert message" },
    msg: { control: "text", description: "Alert message" },
    backgroundColor: { control: "text", description: "Background color" },
    colorText: { control: "text", description: "Color Text" },
    timeout: 1000,
    input: {
      action: 'input',
      description: 'Emitted when alert is closed'
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LAlert, LButton },
  data () {
    return { 
      showAlert: false 
    }
  },
  methods: {
    closeAlert(event){
      this.showAlert = event
    }
  },
  template:
    `<div>
      <l-button @click="showAlert = !showAlert">Open alert</l-button>
      <l-alert v-if="showAlert" @input="closeAlert" v-bind="$props" style="align: center; margin-left: 40%; margin-top: -20%"> </l-alert>
    </div>`
});

export const Action = Template.bind({});
Action.args = {
  msg: "Im an action alert!",
  backgroundColor: '#c00',
  colorText: '#fff',
};
