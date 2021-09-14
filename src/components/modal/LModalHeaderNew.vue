<template>
  <div class="LModalHeader">
    <div class="d-flex justify-space-between py-4 px-5">
      <span class="LModalHeader__title font-md">
        {{ title }}
      </span>
      <l-button-new
        v-if="closeButton"
        color="#B8B8B8"
        height="20"
        width="20"
        class="LModalHeader__close pa-0"
        @click="close"
      >
        <v-icon
          size="20" 
          color="white"
        >
          mdi-close
        </v-icon>
      </l-button-new>
    </div>
    <v-divider class="LModalHeader__divider" />
  </div>
</template>

<script>
import LButtonNew from '~/src/components/buttons/LButtonNew.vue' 
export default {
  components: {
    LButtonNew
  },
  props: {
    title: {
      type: String,
      default: null
    },
    closeButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.LModalHeader__title {
  color: $martinique;
  font-size: 1.23rem;
}

.LModalHeader__close {
  background: $silver;
}

.LModalHeader__divider {
  border-color: $gallery;
}
</style>
