<template>
  <div class="LCardHeader">
    <v-list-item-content class="pa-0">
      <v-list-item-title class="LCardHeader__title font-md">
        {{ title }}
      </v-list-item-title>
      <v-list-item-subtitle class="LCardHeader__subtitle">
        {{ description }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

.LCardHeader {
  max-width: 100%;
  overflow: hidden;
  padding: 10px 15px;
}

.LCardHeader {
  &__title {
    color: #2E264D;
    font-size: 1rem;
    overflow: hidden;
    max-width: 100%;
  }
  &__subtitle {
    font-size: 11px;
    color: #B8B8B8 !important;
    overflow: hidden;
    max-width: 100%;
  }
}
</style>
