import { initializeObjects } from '~/.storybook/helpers/initializeObjects'
import LTimelineItem from "~/src/components/timeline/LTimelineItem.vue"
import LTimeline from "~/src/components/timeline/LTimeline.vue"

export default {
  title: "Components/Timeline/LTimeline",
  component: LTimelineItem,
  argTypes: {
    title: { control: "text", description: "The block title" },
    description: { control: "text", description: "The block description" },
  }
}

const initialTimeline = `
  <l-timeline-item
    colors="#FDDF92"
    :circleSize="23"
  >
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
const initObjects = initializeObjects()

const Template = (args, { argTypes }) => ({
  ...initObjects,
  props: Object.keys(argTypes),
  components: { LTimeline, LTimelineItem },
  template: `
    <l-timeline v-bind="$props">
      <template #header-content>
        <p>Header content</p>
      </template>

      <l-timeline-item
        initial
        colors="#FDDF92"
        :circleSize="23"
      >
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

      ${initialTimeline.repeat(4)}

      <l-timeline-item
        colors="#FF8F1C"
        :circleSize="30"
      >
        <template #top-content>
          <v-chip small outlined >
            Foo
          </v-chip>
          <span class="mt-4">23/06/2021 15:34</span>
        </template>

        <template #circle-content>
          <v-icon size="20" dark>mdi-map-marker</v-icon>
        </template>

        <template #bottom-content>
          <span>Bar</span>
          <div class="mt-2" style="max-width:140px">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          </div>
        </template>
      </l-timeline-item>

      <l-timeline-item
        colors="#D4D4D4"
        :circleSize="16"
        final
      >
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
    </l-timeline>
  `
})

export const Default = Template.bind({})
Default.args = {
  title: 'Foo Title',
  description: 'Bar Description'
}
