import LCircularChart from '~/src/components/charts/LCircularChart.vue';

export default {
  title: 'Components/Charts/Donut',
  component: LCircularChart,
  argTypes: {
    items: {
      control: 'object',
      description:
        'Chart items array of objects: label, value, percentage, options object (color, img, icon, tooltip)'
    },
    clickableItems: {
      control: 'array',
      description:
        'Receives an array with items that are used to control if click event should be emitted. Must be used with useCursorPointer as true'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Toggles tooltip visibility',
    },
    translateLabels: {
      control: 'boolean',
      description: 
        'Toggles i18n translation of label. If true must receive translation path'
    },
    size: { 
      control: 'text', 
      description: 'Chart size' 
    },
    useCursorPointer: {
      control: 'boolean',
      description: 
        'Toggles clickable functionality, if true will apply pointer style and enable clicks from clickableItems'
    },
    eventClick: { action: 'eventClick', description: 'Trigger a click event' },
    default: { table: { disable: true } }
  }
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LCircularChart },
  template: `
    <l-circular-chart
      v-bind="$props"
      @eventClick="eventClick"
    />
  `
});

export const DefaultWithTooltip = Template.bind({});
DefaultWithTooltip.args = {
  items: [
    {
      label: 'Label',
      value: 'value',
      percentage: '65',
      options: {
        color: '#6E84C2',
        img:
          'https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj'
      },
      tooltip: {
        label: 'Details'
      }
    },
    {
      label: 'Label',
      value: 'value',
      percentage: '30',
      options: {
        color: '#F87045',
        img:
          'https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj'
      },
      tooltip: {
        label: 'Details'
      }
    },
    {
      label: 'Label',
      value: 'value',
      percentage: '85',
      options: {
        color: '#E875A7',
        img:
          'https://yt3.ggpht.com/ytc/AAUvwnhi47MYC54AxUhOCeijZ6BPB_tREGwfC8dbFzOZ=s900-c-k-c0x00ffffff-no-rj'
      },
      tooltip: {
        label: 'Details'
      }
    }
  ],
  showTooltip: true
}

export const ClickableItems = Template.bind({});
ClickableItems.args = {
  ...DefaultWithTooltip.args,
  clickableItems: ['Label'],
  useCursorPointer: true
}

export const UsingIcons = Template.bind({});
UsingIcons.args = {
  items: [
    {
      label: 'Label with Icon',
      percentage: '50',
      options: {
        color: '#6E84C2',
        icon: 'mdi-information'
      }
    }
  ]
}
