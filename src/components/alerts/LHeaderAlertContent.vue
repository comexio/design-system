<template>
  <div class="LHeaderAlertContent d-flex justify-space-between align-center">
    <div class="d-flex align-center">
      <v-icon 
        :size="26"
        :color="iconsColor"
        class="mr-5 LHeaderAlertContent__icon"
      >
        {{ iconName }}
      </v-icon>
      <span class="LHeaderAlertContent__text">
        <slot />
      </span>
    </div>
    <l-button-new
      v-if="dismissible"
      :height="22" 
      :width="22"
      :color="iconsColor"
      class="LHeaderAlertContent__closeButton"
      icon
      @click="$emit('click:dismiss')"
    >
      <v-icon :size="20">
        mdi-close
      </v-icon>
    </l-button-new>
  </div>
</template>

<script>
import alertMixin from '~/mixins/alert.mixin'
import LButtonNew from '~/src/components/buttons/LButtonNew.vue'

export default {
  name: 'LHeaderAlertContent',
  components: { LButtonNew },
  mixins: [alertMixin],
  props: {
    type: {
      type: String,
      default: ''
    },
    dismissible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    iconName () {
      return this.getAlertIcon(this.type)
    },
    iconsColor () {
      return this.getAlertFeedbackColor(this.type)
    }
  }
}
</script>

<style lang="scss" scoped>
.LHeaderAlertContent {
  width: 100%;

  &__text {
    color: $martinique;
    font-size: 1.4rem;
    line-height: 19px;
    font-weight: 400;

    @media screen and (min-width: 600px) {
      font-size: 1.077rem;
    }
  }
}
</style>
