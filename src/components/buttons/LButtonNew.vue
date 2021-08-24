<template>
  <v-btn
    class="LButton"
    :class="buttonClass"
    v-bind="$attrs"
    :height="buttonHeight"
    :disabled="disabled"
    :icon="icon"
    :outlined="secondary || $attrs.outlined"
    :text="tertiary || $attrs.text"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
import { getButtonHeight } from '~/utils/size.util'

export default {
  name: 'LButton',
  props: {
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    icon: Boolean,
    purple: Boolean,
    cancel: Boolean,
    disabled: Boolean,
    large: Boolean,
    small: Boolean,
    sentenceCasedLabel: Boolean
  },
  computed: {
    buttonClass () {
      return {
        'LButton--primary': this.primary,
        'LButton--secondary': this.secondary,
        'LButton--tertiary': this.tertiary,
        'LButton--icon': this.icon,
        'LButton--purple': this.purple,
        'LButton--disabled': this.disabled,
        'LButton--cancel': this.cancel,
        'LButton--large': this.large,
        'LButton--small': this.small,
        'LButton__label--sentenceCase': this.sentenceCasedLabel
      }
    },
    buttonHeight () {
      const { large, small, $attrs } = this

      return getButtonHeight({large, small, custom: $attrs.height})
    }
  }
}
</script>

<style lang="scss" scoped>
.LButton {
  box-shadow: none;
  border-radius: 5px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  font-size: 14px;
}

.LButton--large {
  font-size: 16px;
}

.LButton--small {
  font-size: 12px;
}

.LButton__label--sentenceCase {
  text-transform: none;
}

.v-btn {
  min-width: unset !important;
}

.LButton--primary {
  background-color: $westSide !important;
  color: $white !important;
}

.LButton--primary:hover {
  background-color: $christine !important;
  transition: 0.3s;
}

.LButton--primary.LButton--cancel {
  background-color: $silver !important;
  color: $white !important;
}

.LButton--primary.LButton--cancel:hover {
  background-color: $Alto !important;
}

.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined).LButton--primary {
  color: $white !important;
  background-color: $macaroni !important;
}

.LButton--secondary {
  border-color: $westSide !important;
  color: $westSide !important;
}

.LButton--secondary:hover {
  border-color: $christine !important;
  background-color: unset !important;
  color: $christine !important;
  transition: 0.3s;
}

.LButton--secondary.LButton--cancel {
  border-color: $silver !important;
  color: $silver !important;
}

.LButton--secondary.LButton--cancel:hover {
  border-color: $Alto !important;
  color: $Alto !important;
}

.v-btn.v-btn--disabled.LButton--secondary, 
.v-btn.v-btn--disabled .v-btn__loading.LButton--secondary, 
.v-btn.v-btn--disabled .v-icon.LButton--secondary {
  color: $macaroni !important;
  border-color: $macaroni !important;
}

.LButton--tertiary {
  color: $westSide !important;
}

.LButton--tertiary:hover {
  color: $christine !important;
  transition: 0.3s;
}

.LButton--tertiary.LButton--cancel {
  color: $silver !important;
}

.LButton--tertiary.LButton--cancel:hover {
  color: $Alto !important;
}

.v-btn.v-btn--disabled.LButton--tertiary, 
.v-btn.v-btn--disabled .v-btn__loading.LButton--tertiary, 
.v-btn.v-btn--disabled .v-icon.LButton--tertiary {
  color: $macaroni !important;
}

.LButton--secondary.v-btn:before,
.LButton--tertiary.v-btn:before {
  background-color: unset !important;
}

.LButton--purple {
  background-color: $blueChalk !important;
  color: $wisteria !important;
}

.LButton--purple:hover {
  background-color: $snuff !important;
  transition: 0.3s;
}

.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn-outlined).LButton--purple {
  color: $frenchLilac !important;
  background-color: $whiteLilac !important;
}

.LButton--icon.LButton--purple.LButton--disabled {
  color: $frenchLilac !important;
}

.LButton--icon.LButton--purple:hover {
  color: $purpleHaze !important;
  background-color: $magnolia !important;
}

.LButton--icon {
  background-color: unset !important;
}

::v-deep {
  .v-btn__content {
    padding: 13px 15px !important;
  }
}
</style>

<style lang="scss">
.LButton .v-btn__content .v-icon--left {
  margin-left: unset !important;
  margin-right: 5px !important;
}

.LButton .v-btn__content .v-icon--right {
  margin-left: 5px !important;
  margin-right: unset !important;
}

.LButton--disabled.v-btn--disabled .v-btn__content .v-icon {
  color: unset !important;
}
</style>
