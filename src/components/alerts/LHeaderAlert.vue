<template>
  <div
    :style="{ '--backgroundColor': handledBackgroundColor, '--borderColor': handledBorderColor }"
    class="LHeaderAlert d-flex py-2 px-3"
  >
    <slot />
  </div>
</template>

<script>
import alertMixin from '~/mixins/alert.mixin'

export default {
  name: 'LHeaderAlert',
  mixins: [alertMixin],
  props: {
    type: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    handledBackgroundColor () {
      return this.type ? this.getAlertFeedbackLightColor(this.type) : this.backgroundColor
    },
    handledBorderColor () {
      return this.type ? this.getAlertFeedbackColor(this.type) : this.borderColor
    }
  }
}
</script>

<style lang="scss" scoped>
.LHeaderAlert {
  min-height: 45px;
  background-color: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  border-radius: 8px;
}
</style>
