<template>
  <v-skeleton-loader
    :loading="loading"
    transition="fade-transition"
    type="card"
  >
    <v-card
      class="LCard"
      v-bind="$attrs"
      :class="vCardClasses"
      :min-height="height"
      :width="width"
      v-on="$listeners"
    >
      <l-card-header
        v-if="hasTitleOrDescription"
        class="LCard__header"
        :title="title"
        :description="description"
        :generate-id="generateId"
        @togglecard="$emit('close')"
      />
      <div
        class="LCard__content"
        :class="contentClasses"
      >
        <v-divider v-if="hasTitleOrDescription" />
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
    contentClasses: {
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
    },
    vCardClasses () {
      return {
        'LCard--withoutShadow' : !this.hasShadow,
        'LCard--grid': this.hasTitleOrDescription      
      }
    },
    hasTitleOrDescription () {
      return this.title || this.description ? true : false
    }
  }
}
</script>
<style lang="scss" scoped>
.LCard {
  position: relative;
  display: grid;
  border-radius: 5px!important;
  
}
.LCard--grid {
  grid-template-rows: 45px 1fr;
}
.LCard--withoutShadow {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.04) !important;
}
::v-deep {
  .LCard__adversity img {
    max-height: 190px;
  }
}
</style>
