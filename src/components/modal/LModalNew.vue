<template>
  <v-dialog
    v-model="inputValue"
    content-class="LModalNew"
    v-bind="$attrs"
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
    <template
      v-for="(index, name) in $slots"
      v-slot:[name]
    >
      <slot :name="name" />
    </template>
  </v-dialog>    
</template>

<script>
export default {
  name: 'LModalNew',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }    
}
</script>

<style lang="scss" scoped>
::v-deep {
  .LModalNew {
    background: $white;
  }
}
</style>
