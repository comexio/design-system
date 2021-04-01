<template>
  <v-skeleton-loader
    :loading="loading"
    transition="fade-transition"
    type="card"
  >
    <v-card
      class="LCard"
      v-bind="$att"
      :class="{LCard__shadow: !hasShadow}"
      :min-height="height"
      :width="width"
    >
      <l-card-header
        v-if="title && description"
        class="LCard__header"
        :title="title"
        :description="description"
        :generate-id="generateId"
        @togglecard="$emit('close')"
      />
      <div
        class="LCard__content"
        :class="contentClass"
      >
        <v-divider v-if="title && description" />
        <slot v-if="showSlot" />
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
      default: null
    },
    description: {
      type: String,
      default: null
    },
    error: {
      type: [Error, Boolean],
      default: false
    },
    contentClass: {
      type: String,
      default: null
    },
    data: {
      type: [Array, Object],
      default: null
    },
    loading: {
      type: Boolean
    },
    hasShadow: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '100%'
    },
    generateId: {
      type: Boolean,
      default: false
    },
    forceShowSlot : {
      type: Boolean
    }
  },
  computed: {
    showSlot () {
      return this.data || this.forceShowSlot
    }
  }
}
</script>
<style lang="scss" scoped>
.LCard {
  position: relative;
  display: grid;
  grid-template-rows: 45px 1fr;
  min-height: 272px;
  border-radius: 5px!important;
}
.LCard__shadow {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.04) !important;
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