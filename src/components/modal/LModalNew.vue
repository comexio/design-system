<template>
  <v-dialog
    v-model="inputValue"
    content-class="LModalNew"
    :overlay-color="globalColors.wisteria"
    overlay-opacity="0.60"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:activator="scope">
      <slot
        name="activator"
        v-bind="scope"
      />
    </template>
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
      v-slot:[name]="data"
    >
      <slot
        :name="name"
        v-bind="data"
      />
    </template>
  </v-dialog>    
</template>

<script>
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LModalNew',
  mixins: [colorsMixin],
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
    box-shadow: none;
    border-radius: 10px;
  }
}
</style>
