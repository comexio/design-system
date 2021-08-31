import LTooltip from '~/src/components/tooltip/LTooltip.vue'
import LButtonNew from '~/src/components/buttons/LButtonNew.vue'

export default {
  title: 'Components/Tooltip/Tooltip',
  component: LTooltip,
  argTypes: {
    value: {
      control: 'boolean',
      description: 'Toggles tooltip visibility'
    },
    input: {
      action: 'input',
      description: 'Emitted when tooltip shows/hide'
    },
    activator: { description: 'Slot to use to toggle tooltip on hover, otherwise you need to toogle it programatically using v-model' },
    default: { description: 'Default slot with content to shows on tooltip' }
  }
}

const TemplateMultipleTooltips = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LTooltip, LButtonNew },
  template: `
    <div class="text-center d-flex align-center justify-space-around" style="height: 100%">
      <l-tooltip
        left
        v-bind="$props"
        @input="input"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >
            Button - Tooltip on the left
          </l-button-new>
        </template>
        <div>
          <span>Tooltip content</span>
        </div>
      </l-tooltip>
      <l-tooltip
        top
        v-bind="$props"
        @input="input"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >
            Button - Tooltip on the top
          </l-button-new>
        </template>
        <div>
          <span>Tooltip content</span>
          <v-divider />
          <v-icon color="white">mdi-home</v-icon>
        </div>
      </l-tooltip>
      <l-tooltip
        bottom
        v-bind="$props"
        @input="input"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >
            Button - Tooltip on the bottom
          </l-button-new>
        </template>
        <div class="text-center">
          <span>Tooltip content</span>
          <v-divider />
          <v-icon color="white">mdi-home</v-icon>
        </div>
      </l-tooltip>
      <l-tooltip
        right
        v-bind="$props"
        @input="input"
      >
        <template v-slot:activator="{ on, attrs }">
          <l-button-new
            primary
            small
            style="width: 200px; margin: auto"
            v-bind="attrs"
            v-on="on"
          >
            Button - Tooltip on the right
          </l-button-new>
        </template>
        <div>
          <span>Tooltip content</span>
          <v-divider />
          <span>Tooltip more content</span>
        </div>
      </l-tooltip>
    </div>
  `
})

export const MultipleTooltips = TemplateMultipleTooltips.bind({})
MultipleTooltips.args = {}
