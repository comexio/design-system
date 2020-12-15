<template>
  <v-skeleton-loader
    :loading="loading"
    transition="fade-transition"
    type="card"
  >
    <v-card
      class="LCard"
      :class="{LCardWithoutDescription: !description}"
      :min-height="height"
    >
      <l-card-header
        class="LCard__header"
        :title="title"
        :description="description"
        @togglecard="$emit('close')"
      />
      <div class="LCard__content">
        <v-divider />
        <slot v-if="data" />
      </div>
    </v-card>
  </v-skeleton-loader>
</template>

<script>
import LCardHeader from './LCardHeader'

export default {
  components: {
    LCardHeader
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    error: {
      type: [Error, Boolean],
      default: false
    },
    data: {
      type: [Array, Object],
      default: null
    },
    loading: {
      type: Boolean
    },
    height: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.LCard {
  position: relative;
  display: grid;
  grid-template-rows: 45px 1fr;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.04) !important;
  min-height: 272px;
  border-radius: 5px!important;
}

.LCardWithoutDescription {
  grid-template-rows: 26px 1fr;
}

@media screen and (min-width: 1500px) {
  .LCard {
    min-height: 320px;
  }
}

::v-deep {
  .LCard__adversity img {
    max-height: 190px;
  }
}
</style>
