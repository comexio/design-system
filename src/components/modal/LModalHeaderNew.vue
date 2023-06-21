<template>
  <div class="LModalHeader">
    <div class="d-flex justify-space-between py-4 px-5">
      <div class="d-flex flex-column">
        <span class="LModalHeader__title font-md">
          {{ title }}
        </span>
        <span class="LModalHeader__subtitle">
          {{ subtitle }}
        </span>
      </div>
      <l-button-new
        v-if="closeButton"
        :color="globalColors.silver"
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
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LModalHeaderNew',
  components: {
    LButtonNew
  },
  mixins: [colorsMixin],
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
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
.LModalHeader {
  &__title {
    color: $martinique;
    font-size: 1.23rem;
  }

  &__subtitle {
    font-size: 0.923rem;
    color: $doveGray;
  }

  &__close {
    background: $silver;
  }

  &__divider {
    border-color: $gallery;
  }
}
</style>
