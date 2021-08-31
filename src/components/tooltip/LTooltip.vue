<template>
  <v-tooltip
    v-model="inputValue"
    :content-class="tooltipClass"
    v-bind="$attrs"
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
import isNil from 'ramda/src/isNil'

export default {
  name: 'LTooltip',
  props: {
    value: Boolean
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    tooltipClass () {
      const { left, right, top, bottom } = this.$attrs

      const componentClasses = {
        'LTooltip LTooltip--pointer': true,
        'LTooltip--pointer-left': left,
        'LTooltip--pointer-right': right,
        'LTooltip--pointer-top': top,
        'LTooltip--pointer-bottom': bottom
      }

      const formattedClassesNameToString = Object.keys(componentClasses).filter(className => !isNil(componentClasses[className])).join(' ')

      return formattedClassesNameToString
    }
  }
}
</script>

<style lang="scss" scoped>
.LTooltip {
  background-color: $martinique;
  padding: 4px 12px;
  ::v-deep {
    span {
      font-size: 0.92rem;
      line-height: 0.92rem;
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
