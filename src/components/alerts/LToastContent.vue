<template>
  <div class="LToastContent d-flex justify-space-between pr-1">
    <div class="d-flex align-center pr-5">
      <v-icon :color="iconsColor">
        {{ iconName }}
      </v-icon>
      <div class="ml-5">
        <div 
          class="LToastContent__title" 
          :class="{ 'LToastContent__title--bold': description }"
        >
          {{ title }}
        </div>
        <div 
          v-if="description" 
          class="LToastContent__description"
        >
          {{ description }}
        </div>
      </div>
    </div>
    <div class="d-flex align-center">
      <l-button-new 
        v-if="actionButtonText"
        tertiary 
        small
        @click="$emit('click:action')"
      >
        {{ actionButtonText }}  
      </l-button-new>
      <l-button-new 
        v-if="dismissible"
        :height="22" 
        :width="22"
        :color="iconsColor" 
        icon 
        @click="$emit('click:dismiss')"
      >
        <v-icon size="20">
          mdi-close
        </v-icon>
      </l-button-new>
    </div>
  </div>
</template>

<script>
import LButtonNew from '~/src/components/buttons/LButtonNew.vue'
import alertMixin from '~/mixins/alert.mixin'

export default {
  name: 'LToastContent',
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
    },
    actionButton: Boolean,
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    actionButtonText: {
      type: String,
      default: ''
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
@import '../../assets/scss/_variables.scss';

.LToastContent {
  padding: 14px 0;
  width: 100%;

  &__title { 
    color: $martinique;
    font-size: 1.4rem;
    font-weight: 400;

    &--bold { 
      font-weight: 500;
    }
  }

  &__description { 
    color: $doveGray;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 6px;
  }

  @media screen and (min-width: 600px) {
    &__title, &__description { 
      font-size: 1.077rem;
    }
  }
}
</style>
