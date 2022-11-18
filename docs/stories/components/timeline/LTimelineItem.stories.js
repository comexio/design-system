import LTimelineItem from "~/src/components/timeline/LTimelineItem.vue"

export default {
  title: "Components/Timeline/LTimelineItem",
  component: LTimelineItem,
  argTypes: {
    circleSize: { control: "text", description: "Size of the component's center circle" },
    colors: { control: "text", description: "The color of the line and circle" },
    initial: { control: "boolean", description: "Define if the item is initial" },
    final: { control: "boolean", description: "Define if the item is final" },
    default: { description: "Card content slot" },
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTimelineItem },
  template: `
      <l-timeline-item v-bind="$props">
        <template #top-content>
          <v-chip small outlined >
            Foo
          </v-chip>
          <span class="mt-4">23/06/2021 15:34</span>
        </template>

        <template #circle-content>
          <v-icon size="20" dark> mdi-check-bold</v-icon>
        </template>

        <template #bottom-content>
          <span>Bar</span>
          <div class="mt-2" style="max-width:140px">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          </div>
        </template>
      </l-timeline-item>
  `
})

const TemplateFinal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTimelineItem },
  template: `
      <l-timeline-item v-bind="$props">
        <template #top-content>
          <v-chip small outlined >
            Foo
          </v-chip>
          <span class="mt-4">23/06/2021 15:34</span>
        </template>

        <template #bottom-content>
          <span>Bar</span>
          <div class="mt-2" style="max-width:140px">
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          </div>
        </template>
      </l-timeline-item>
  `
})

export const Initial = Template.bind({})
Initial.args = {
  colors: '#FDDF92',
  circleSize: 23,
  initial: true
}

export const Default = Template.bind({})
Default.args = {
  colors: '#FE8F1C',
  circleSize: 30
}

export const Final = TemplateFinal.bind({})
Final.args = {
  colors: '#E0E1EB',
  circleSize: 15,
  final: true
}
