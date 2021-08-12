<template>
  <div
    :class="{ focused: isFocused }"
    class="LInputBorder"
    @click="focus"
  >
    <input
      ref="focused"
      class="hidden-input"
      @blur="isFocused = false"
    >
    <div class="LInputBorder__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LInputBorder',
  data () {
    return {
      isFocused: false
    }
  },
  methods: {
    focus () {
      this.isFocused = true
      this.$refs.focused.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.LInputBorder {
  position: relative;
  border: 1px solid $silver;
  border-radius: 5px;
  transition: border-color ease .2s;
  &:hover {
    border-color: $purpleHaze;
  }
  &.focused {
    border-color: $purpleHaze;
  }
  overflow: hidden;
}

.hidden-input {
  position: absolute;
  width: 0;
  height: 0;
  outline: none;
}
</style>
