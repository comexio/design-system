<template>
  <div
    :class="{ focused: isFocused }"
    class="LBorderedInput"
    @click="focus"
  >
    <input
      ref="focused"
      class="hidden-input"
      @blur="isFocused = false"
    >
    <div class="LBorderedInput__slot">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LBorderedInput',
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
.LBorderedInput {
  position: relative;
  border: 1px solid rgba(0, 0, 0, .24);
  border-radius: 5px;
  transition: border-color ease .2s;
  &:hover {
    border-color: #000;
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
