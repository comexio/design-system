<template>
  <div class="LModalFooter d-flex flex-column justify-center align-end">
    <v-divider class="LModalFooter__divider" />
    <div class="px-5 py-4">
      <l-button-new
        v-if="cancelButtonProps"
        v-bind="cancelButtonProps"
        @click="cancel"
      >
        {{ cancelButtonProps.placeholder }}
      </l-button-new>
      <l-button-new
        v-if="confirmButtonProps"
        class="ml-3"
        v-bind="confirmButtonProps"
        @click="confirm"
      >
        {{ confirmButtonProps.placeholder }}
      </l-button-new>
    </div>
  </div>
</template>

<script>
import LButtonNew from '~/src/components/buttons/LButtonNew.vue'

export default {
  name: 'LModalFooterNew',
  components: {
    LButtonNew
  },
  props: {
    cancelButtonProps: {
      type: Object,
      default: null
    },
    confirmButtonProps: {
      type: Object,
      default: null
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss" scoped>
.LModalFooter__divider {
  width: 100%;
  border-color: $gallery;
}
</style>
