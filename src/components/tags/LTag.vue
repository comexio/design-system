<template>
  <span>
    <v-chip
      v-bind="$attrs"
      :close="close"
      class="tag my-0"
      :label="label"
      :outlined="outlined"
      :color="label ? formatColor(`${color}`, 0.4) : color"
      :text-color="label ? color : ''"
      :class="{ 'font-md': label }"
      @click:close="closeTag(text)"
      v-on="$listeners"
    >
      {{ text }}
      <span
        v-if="number !== null && number !== undefined"
        class="v-btn tag__number"
      >
        {{ number }}
      </span>
      <v-icon
        v-if="link"
        right
        class="tag__link"
      >
        {{ customIcon || 'mdi-open-in-new' }}
      </v-icon>
    </v-chip>
    <slot />
  </span>
</template>

<script>
import { stringColorToRGBA } from 'appRoot/utils/color.util.ts'

export default {
  name: 'LTag',
  props: {
    text: {
      type: String,
      default: null
    },
    number: {
      type: [Number, String],
      default: null
    },
    close: Boolean,
    link: Boolean,
    label: Boolean,
    color: {
      type: String,
      default: '#E2DAF8'
    },
    tagManager: Boolean,
    select: Boolean,
    customIcon: {
      type: String,
      default: null
    },
    outlined: Boolean,
    colorRelation: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatColor (color, alpha) {
      return stringColorToRGBA(color, this.colorRelation, alpha)
    },
    closeTag (tagName) {
      this.$emit('removeTag', tagName)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.tag {
  height: 1.8rem;
  ::v-deep {
    .v-chip__content {
      font-size: 0.9rem;
      line-height: 0.9rem;
    }
  }
  ::v-deep .v-chip__close {
    font-size: 10px;
    color: $wisteria !important;
  }

  .tag__number {
    height: 1.3rem;
    padding: 2px 4px;
    margin-left: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    color: $wisteria !important;
    font-size: 0.8rem;
    border-radius: 5px;
  }

  .tag__link {
    height: 1.3rem;
    padding: 2px 4px;
    margin-left: 5px;
    color: $wisteria !important;
    font-size: 1rem;
    border-radius: 5px;
  }
}
</style>
