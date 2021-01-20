<template>
  <div class="l-input-button">
    <v-text-field
      dense
      solo
      height="56px"
      v-bind="$attrs"
      :rules="validityRules"
      class="l-input-button--input"
      v-on="$listeners"
      @keyup.enter="$emit('button-pressed')"
    />
    <v-btn
      class="l-input-button--button"
      :loading="$attrs.loading"
      @click="$emit('button-pressed')"
    >
      {{ buttonLabel }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LInputButton',
  inheritAttrs: false,
  props: {
    validity: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Array,
      default: null
    },
    buttonLabel: {
      type: String,
      required: true
    }
  },
  computed: {
    validityRules () {
      if (!(this.validity && this.rules)) {
        return
      }

      return this.rules
    }
  }
}
</script>

<style lang="scss" scoped>
.l-input-button {
    width: 100%;
    display: flex;
    align-items: center;
    flex: 1 1 auto;

  .l-input-button--input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .l-input-button--button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 56px;
    background-color: #FF8F1C !important;
    color: #ffffff;
    font-size: 1.230769231rem;
    text-transform: uppercase;
  }
}
</style>
