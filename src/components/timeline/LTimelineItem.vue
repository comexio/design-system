<template>
  <div class="LTimelineItem d-flex flex-column align-center">
    <div class="LTimelineItem__header d-flex flex-column align-center">
      <slot name="top-content" />
    </div>
    <div
      class="LTimelineItem__line mt-4"
      :style="colorsLine"
    >
      <v-avatar
        :size="circleSize"
        class="LTimelineItem__circle"
        :style="circleCentrilize"
        :color="colors"
      >
        <slot name="circle-content" />
      </v-avatar>
    </div>
    <div class="d-flex flex-column text-center mt-4">
      <slot name="bottom-content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LTimelineItem',
  props: {
    colors: {
      type: String,
      required: true
    },
    initial: {
      type: Boolean,
      default: false
    },
    final: {
      type: Boolean,
      default: false
    },
    circleSize: {
      type: Number,
      required: true
    }
  },
  computed: {
    circleCentrilize () {
      const calculatedCentrilize = `calc(50% - ${this.circleSize / 2}px)`

      return {
        left: calculatedCentrilize,
        top: calculatedCentrilize
      }
    },
    colorsLine () {
      return this.getLocalizeColors()
    }
  },
  methods: {
    getLocalizeColors () {
      if (!this.initial && !this.final) {
        return { backgroundColor: this.colors }
      }

      return this.initial
        ? this.getLocalizeCircleBackground('left')
        : this.getLocalizeCircleBackground('right')
    },
    getLocalizeCircleBackground (localize) {
      return `background: linear-gradient(to ${localize}, ${this.colors} 50%, rgba(0, 0, 0, 0) 50%)`
    }
  }
}
</script>

<style lang="scss" scoped>
.LTimelineItem {
  &__line {
    height: 6px;
    width: 192px;
    position: relative;
  }

  &__circle {
    position: absolute;
  }
}
</style>
