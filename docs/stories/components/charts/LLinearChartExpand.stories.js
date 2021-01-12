import LLinearChartExpand from "@components/charts/LLinearChartExpand.vue";

export default {
  title: "Components/Charts/Primary Bar/Expanded",
  component: LLinearChartExpand,
  argTypes: {
    headers: { control: "array", description: "Expanded chart headers" },
    data: {
      control: "object",
      description:
        "Expanded chart data: label, percentage, total, quantity, value"
    },
    loading: {
      control: "boolean",
      description: "Expanded chart loading: true / not loading: false"
    },
    expand: {
      action: "expand",
      description: 'Toggle chart expanded when "Recolher" clicked'
    },
    search: { action: "search", table: { disable: true } },
    sectionAfterValue: {
      description:
        "Slot can show extra content and return info to parent components to show more details"
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLinearChartExpand },
  template:
    '<l-linear-chart-expand @expand="expand" v-bind="$props"> </l-linear-chart-expand>'
});

export const Expanded = Template.bind({});
Expanded.args = {
  headers: ["Position", "Company", "Shipments", "Share of Shipments"],
  data: [
    {
      label: "EXAMPLE S/A",
      percentage: "10.03",
      total: "10.03%",
      quantity: 7750,
      value: "7.750"
    },
    {
      label: "EXAMPLE S/A",
      percentage: "4.51",
      total: "4.51%",
      quantity: 3488,
      value: "3.488"
    },
    {
      label: "EXAMPLE S/A",
      percentage: "2.90",
      total: "2.90%",
      quantity: 2237,
      value: "2.237"
    },
    {
      label: "EXAMPLE S/A",
      percentage: "1.47",
      total: "1.47%",
      quantity: 1132,
      value: "1.132"
    },
    {
      label: "EXAMPLE S/A",
      percentage: "1.32",
      total: "1.32%",
      quantity: 1017,
      value: "1.017"
    },
    {
      label: "EXAMPLE S/A",
      percentage: "1.14",
      total: "1.14%",
      quantity: 883,
      value: "883"
    }
  ]
};
