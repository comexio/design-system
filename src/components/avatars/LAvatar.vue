<template>
  <v-avatar
    v-bind="boundProps"
  >
    <slot />
  </v-avatar>  
</template>

<script>
export default {
  name: 'LAvatar',
  props: {
    small: Boolean,
    medium: Boolean,
    large: Boolean
  },
  computed: {
    avatarSize () {
      const sizes = {
        small: 40,
        medium: 70,
        large: 100
      }

      const sizeByProp = Object.keys(sizes).find(size => this[size])

      return sizes[sizeByProp]
    },
    boundProps () {
      return {
        size: this.avatarSize,
        ...this.$attrs
      }
    }
  }
}
</script>
