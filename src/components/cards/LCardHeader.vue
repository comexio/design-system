<template>
  <div class="LCardHeader">
    <v-list-item-content class="pa-0 p-0">
      <v-list-item-title
        :id="generateCardId(title, 'cardHeader-')"
        class="LCardHeader__title font-md"
      >
        {{ title }}
      </v-list-item-title>
      <v-list-item-subtitle
        v-if="description"
        class="LCardHeader__subtitle"
      >
        {{ description }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
import { slugify } from '~/utils/string.util'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    generateId: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateCardId (title, prefix = '') {
      if (!this.generateId) {
        return
      }

      return prefix + slugify(title)
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
    font-size: 12px;
    color: #B8B8B8 !important;
    overflow: hidden;
    max-width: 100%;
  }
}
</style>
