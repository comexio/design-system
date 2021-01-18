import LCircularChart from "@components/charts/LCircularChart.vue";

export default {
  title: "Components/Charts/Donut",
  component: LCircularChart,
  argTypes: {
    items: {
      control: "object",
      description:
        "Chart items array of objects: label, value, percentage, options object (color, img, tooltip)"
    },
    clickableItems: {
      control: "array",
      description:
        "Receives an array with items that are used to control if click event should be emitted"
    },
    showTooltip: {
      control: "boolean",
      description: "Tooltip enabled: true / disabled: false",
      default: true
    },
    size: { control: "text", description: "Chart size" },
    useCursorPointer: {
      control: "boolean",
      description: "Boolean control to use css rule to apply cursor pointer"
    },
    eventClick: { action: 'eventClick', description: 'Trigger a click event' },
    default: { table: { disable: true } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCircularChart },
  template: '<l-circular-chart v-bind="$props"> </l-circular-chart>'
});

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "Label",
      value: "value",
      percentage: "65",
      options: {
        color: "#6E84C2",
        img:
          "https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj"
      },
      tooltip: {
        label: "Details"
      }
    },
    {
      label: "Label",
      value: "value",
      percentage: "30",
      options: {
        color: "#F87045",
        img:
          "https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj"
      },
      tooltip: {
        label: "Details"
      }
    },
    {
      label: "Label",
      value: "value",
      percentage: "85",
      options: {
        color: "#E875A7",
        img:
          "https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj"
      },
      tooltip: {
        label: "Details"
      }
    }
  ],
  showTooltip: true
};
