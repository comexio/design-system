<template>
  <div class="LTextArea">
    <v-textarea
      v-bind="$attrs"
      class="LTextArea__input"
      :class="inputClass"
      v-on="$listeners"
    >
      <template
        v-for="(index, name) in $scopedSlots"
        #[name]="scope"
      >
        <slot
          :name="name"
          v-bind="scope"
        />
      </template>

      <template
        v-for="(index, name) in $slots"
        #[name]
      >
        <slot :name="name" />
      </template>
    </v-textarea>
  </div>
</template>

<script>
export default {
  name: 'LTextArea',
  computed: {
    inputClass () {
      return {
        'LTextField--disabled': this.$attrs.disabled,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/inputs';
</style>
