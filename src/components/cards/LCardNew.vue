<template>
  <v-card
    :class="cardClass"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template
      v-for="(index, name) in $slots"
      v-slot:[name]
    >
      <slot :name="name" />
    </template>
    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'LCardNew',
  props: {
    customShadow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    cardClass () {
      return {
        'LCard': true,
        'LCard--customShadow': this.customShadow
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LCard {
  border-radius: 3px;
}

.LCard--customShadow {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.039) !important;
}
</style>
