<template>
  <v-tooltip
    ref="vtooltip"
    v-model="inputValue"
    :content-class="tooltipClass"
    v-bind="boundProps"
    v-on="$listeners"
  >
    <template
      v-for="(index, name) in $scopedSlots"
      v-slot:[name]="data"
    >
      <slot
        :name="name"
        v-bind="data"
      />
    </template>
  </v-tooltip>
</template>

<script>
import { formatObjectClassToString } from '~/utils/string.util'

export default {
  name: 'LTooltip',
  props: {
    value: Boolean,
    top: Boolean,
    bottom: Boolean
  },
  data () {
    return {
      customNudgeRight: null
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        if (value) {
          this.forceCentralizeHorizontally()
        }

        this.$emit('input', value)
      }
    },
    tooltipClass () {
      const { top, bottom } = this
      const { left, right } = this.$attrs

      const availableClasses = {
        'LTooltip LTooltip--pointer': true,
        'LTooltip--pointer-left': left,
        'LTooltip--pointer-right': right,
        'LTooltip--pointer-top': top,
        'LTooltip--pointer-bottom': bottom
      }

      return formatObjectClassToString(availableClasses)
    },
    boundProps () {
      const { top, bottom, customNudgeRight } = this

      return {
        top,
        bottom,
        nudgeRight: customNudgeRight,
        ...this.$attrs
      }
    }
  },
  methods: {
    forceCentralizeHorizontally () {
      if (!this.top && !this.bottom) {
        return
      }

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const normalizePadding = 12

          const { offsetWidth } = mutation.target
          this.customNudgeRight = (offsetWidth / 2) - normalizePadding
        })
      })

      this.$nextTick(() => {
        const vTooltip = this.$refs.vtooltip
        if (!vTooltip) {
          return
        }

        const { content } = vTooltip.$refs
        if (!content) {
          return
        }

        observer.observe(content, { attributes: true })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.LTooltip {
  background-color: $martinique;
  padding: 4px 12px;
  &.menuable__content__active {
    opacity: 1 !important;
  }
  ::v-deep {
    span {
      display: block;
      font-size: 0.92rem;
      line-height: 14px;
    }
    .v-divider {
      border-color: $white;
    }
  }
}

.LTooltip--pointer::after {
  content: "";
  position: absolute;
  font: normal normal normal 30px "Material Design Icons";
  color: $martinique;
}

.LTooltip--pointer-left::after {
  content: "\F035F";
  top: calc(50% - 15px);
  right: -17px;
}

.LTooltip--pointer-right::after {
  content: "\F035E";
  top: calc(50% - 15px);
  left: -17px;
}

.LTooltip--pointer-top::after {
  content: "\F035D";
  bottom: -17px;
  left: -2px;
}

.LTooltip--pointer-bottom::after {
  content: "\F0360";
  top: -18px;
  left: -2px;
}
</style>
