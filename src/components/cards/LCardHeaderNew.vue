<template>
  <div class="LCardHeader">
    <div class="LCardHeader__content d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <div
          class="pl-5"
          :class="{ 'pr-5': hasPrepend }"
        >
          <slot name="prepend" />
        </div>
        <div class="d-flex flex-column align-start">
          <v-card-title
            class="LCardHeader__content__title pb-0 pl-0 pt-2"
            :class="{ 'pb-2': !subtitle }"
          >
            {{ title }}
          </v-card-title>
          <v-card-subtitle
            v-if="subtitle"
            class="LCardHeader__content__subtitle mt-1 pl-0 pb-2"
          >
            {{ subtitle }}
          </v-card-subtitle>
        </div>
      </div>
      <div class="pb-0 pt-0 pa-5">
        <slot />
      </div>
    </div>
    <v-divider class="LCardHeader__divider" />
  </div>
</template>

<script>
export default {
  name: 'LCardHeaderNew',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: null
    }
  },
  computed:{
    hasPrepend () {
      return this.$slots.prepend
    }
  }
}
</script>

<style lang="scss" scoped>
.LCardHeader {
  &__content__title {
    color: $martinique;
    font-size: 1.077rem;
    font-weight: 500;
    line-height: 17px;
  }
  &__content__subtitle {
    color: $doveGray !important;
    font-size: 0.923rem;
    line-height: 14px;
  }
  &__divider {
    border-color: $gallery;
  }
}
</style>
