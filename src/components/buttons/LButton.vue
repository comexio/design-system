<template>
  <v-btn
    :outlined="outlined"
    :color="color"
    class="LButton"
    :class="classesStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon
      v-if="iconValue"
      left
      size="20px"
    >
      {{ iconValue }}
    </v-icon>
    {{ label }}
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    iconValue: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: true
    },
    removeShadow: Boolean
  },
  computed: {
    classesStyle () {
      return {
        'LButton--noShadow': this.removeShadow
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LButton {
  font-size: 13px;
  height: 30px !important;
  padding: 0 10px !important;
}

.LButton--noShadow {
  box-shadow: none;
}

.orange {
  background-color: #FF8F1C !important;
  border-color: #FF8F1C !important;
  color: #ffffff;
}
</style>
