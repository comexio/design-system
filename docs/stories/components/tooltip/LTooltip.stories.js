import LTooltip from '~/src/components/tooltip/LTooltip.vue'
import LButtonNew from '~/src/components/buttons/LButtonNew.vue'

export default {
  title: 'Components/Tooltip/Tooltip',
  component: LTooltip
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTooltip, LButtonNew },
  template: `
    <l-tooltip
      v-bind="$props"
    >
      <template v-slot:activator="{ on, attrs }">
        <l-button-new
          primary
          small
          style="width: 200px; margin: auto"
          v-bind="attrs"
          v-on="on"
        >Left</l-button-new>
      </template>
      <div>
        <span>Left tooltip</span>
        <v-divider />
        <span>Left tooltip</span>
      </div>
    </l-tooltip>
  `
})

const TemplateMultipleTooltips = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTooltip, LButtonNew },
  template: `
    <div class="text-center d-flex align-center justify-space-around" style="height: 100%">
      <l-tooltip
        left
        v-bind="$props"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >Left</l-button-new>
        </template>
        <div>
          <span>Left tooltip</span>
          <v-divider />
          <span>Left tooltip</span>
        </div>
      </l-tooltip>
      <l-tooltip
        top
        v-bind="$props"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >Top</l-button-new>
        </template>
        <div>
          <span>Top tooltip</span>
          <v-divider />
          <span>Top tooltip</span>
        </div>
      </l-tooltip>

      <l-tooltip
        bottom
        v-bind="$props"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >Bottom</l-button-new>
        </template>
        <div>
          <span>Bottom tooltip</span>
          <v-divider />
          <span>Bottom tooltip</span>
        </div>
      </l-tooltip>
      <l-tooltip
        right
        v-bind="$props"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >Right</l-button-new>
        </template>
        <div>
          <span>Right tooltip</span>
          <v-divider />
          <span>Right tooltip</span>
        </div>
      </l-tooltip>
    </div>
  `
})

export const Default = Template.bind({})
Default.args = {
  left: true,
  top: false,
  bottom: false,
  right: false
}

export const MultipleTooltips = TemplateMultipleTooltips.bind({})
MultipleTooltips.args = {}
