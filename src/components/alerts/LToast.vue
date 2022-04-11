<template>
  <v-snackbar
    class="LToast"
    v-bind="toastProps"
    v-on="$listeners"
  >
    <div 
      :class="wrapperClass"
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
    wrapperClass: {
      type: [String, Array, Object],
      default: () => ({})
    },
    bookmarkColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    defaultProps () {
      return {
        color: this.globalColors.white,
        left: true,
        bottom: true,
        timeout: 10000,
        transition: 'slide-x-transition',
        elevation: 0
      }
    },
    toastProps () {
      return {
        ...this.defaultProps,
        ...this.$attrs
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LToast {
  padding: 32px;
  padding-bottom: 32px !important;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.18)); //box-shadow 3

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
    width: 360px;

    @media screen and (min-width: 600px) {
      width: 436px;
      max-width: none;
    }
  }
  .v-snack__content {
    padding: 0px;
  }
}
</style>
