<template>
  <div class="l-labeled-input">
    <v-text-field
      dense
      outlined
      height="35px"
      v-bind="$attrs"
      :rules="validityRules"
      class="l-labeled-input--input"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  props: {
    validity: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: null
    }
  },
  computed: {
    showValidity () {
      return this.validity && this.rules
    },
    validityRules () {
      if (!this.showValidity) {
        return
      }

      return this.rules
    }
  }
}
</script>

<style lang="scss" scoped>
.l-labeled-input {
    width: 100%;
}
</style>
