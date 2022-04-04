<template>
  <v-snackbar
    class="LToast"
    v-bind="toastProps"
    v-on="$listeners"
  >
    <div 
      :class="contentClass"
      class="LToast__content d-flex" 
    >
      <div
        :style="{ '--bookmarkColor': bookmarkColor || toastProps.color }"
        class="LToast__bookmark mr-3"  
      />
      <slot />
    </div>
  </v-snackbar>
</template>

<script>
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LToast',
  mixins: [colorsMixin],
  props: {
    contentClass: {
      type: [String, Array, Object],
      default: () => ({})
    },
    bookmarkColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    toastProps () {
      return {
        color: this.globalColors.white,
        left: true,
        bottom: true,
        timeout: 10000,
        transition: 'slide-x-transition',
        ...this.$attrs
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LToast {
  &__content {
    color: $martinique;
    min-height: 59px;
  }

  &__bookmark {
    background-color:  var(--bookmarkColor);
    border-radius: 5px 0px 0px 5px;
    width: 7px;
  }
}

::v-deep {
  .v-snack__wrapper {
    border-radius: 9px 5px 5px 9px !important;
    min-height: 59px;
    max-width: 360px;

    @media screen and (min-width: 600px) {
      min-width: 429px;
      max-width: none;
    }
  }
  .v-snack__content {
    padding: 0px;
  }
}
</style>
