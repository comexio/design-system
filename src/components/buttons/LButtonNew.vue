<template>
  <v-btn
    v-bind="buttonProps"
    :class="buttonClass"
    :style="buttonStyle"
    :height="buttonHeight"
    class="LButton"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
import { getButtonHeight } from '~/utils/size.util'
import { PRIMARY, SECONDARY, TERTIARY } from '~/enum/buttonColors.enum'

export default {
  name: 'LButton',
  props: {
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    large: Boolean,
    small: Boolean,
    roundedIcon: Boolean,
    uppercase: {
      type: Boolean,
      default: true
    },
    buttonColors: {
      type: Object,
      default: () => ({
        background: null,
        backgroundOnHover: null,
        backgroundDisabled: null,
        color: null,
        colorOnHover: null,
        colorDisabled: null,
        border: null,
        borderOnHover: null,
        borderDisabled: null
      })
    }
  },
  computed: {
    buttonProps () {
      return {
        outlined: this.secondary,
        text: this.tertiary,
        ...this.$attrs
      }
    },
    buttonClass () {
      return {
        'LButton--primary': this.primary,
        'LButton--secondary': this.secondary,
        'LButton--tertiary': this.tertiary,
        'LButton--customColors': this.hasCustomColors,
        'LButton--roundedIcon': this.roundedIcon,
        'LButton--uppercase': this.uppercase,
        'LButton--withoutUppercase': !this.uppercase,
        'LButton--large': this.large,
        'LButton--small': this.small
      }
    },
    buttonStyle () {
      const colorPresets = {
        primary: { isActive: this.primary, colors: PRIMARY },
        secondary: { isActive: this.secondary, colors: SECONDARY },
        tertiary: { isActive: this.tertiary, colors: TERTIARY }
      }

      const selectedPreset = Object.keys(colorPresets).find(preset => colorPresets[preset].isActive)
      const selectedPresetColors = selectedPreset ? colorPresets[selectedPreset].colors : selectedPreset

      return selectedPresetColors || {
        '--backgroundColor': this.buttonColors.background,
        '--backgroundColorOnHover': this.buttonColors.backgroundOnHover,
        '--backgroundColorDisabled': this.buttonColors.backgroundDisabled,
        '--color': this.buttonColors.color,
        '--colorOnHover': this.buttonColors.colorOnHover,
        '--colorDisabled': this.buttonColors.colorDisabled,
        '--borderColor': this.buttonColors.border,
        '--borderColorOnHover': this.buttonColors.borderOnHover,
        '--borderColorDisabled': this.buttonColors.borderDisabled
      }
    },
    buttonHeight () {
      const { large, small, $attrs } = this

      return getButtonHeight({large, small, custom: $attrs.height})
    },
    hasCustomColors () {
      return !!Object.values(this.buttonColors).filter(value => value !== null).length
    }
  }
}
</script>

<style lang="scss" scoped>
.LButton {
  box-shadow: none;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  font-size: 1.077rem;
}

.LButton--large {
  font-size: 1.231rem;
}

.LButton--small {
  font-size: 0.923rem;
}

.LButton--roundedIcon {
  border-radius: 50%;
}

.LButton--uppercase {
  text-transform: uppercase;
}

.LButton--withoutUppercase {
  text-transform: none;
}

.LButton--primary,
.LButton--secondary,
.LButton--tertiary,
.LButton--customColors {
  &.theme--light {
    background-color: var(--backgroundColor) !important;
    border-color: var(--borderColor) !important;
    color: var(--color) !important;

    &:hover {
      background-color: var(--backgroundColorOnHover, var(--backgroundColor)) !important;
      border-color: var(--borderColorOnHover, var(--borderColor)) !important;
      color: var(--colorOnHover, var(--color)) !important;
      transition: 0.3s !important;
    }
  }
  &.theme--dark {
    background-color: var(--backgroundColor);
    border-color: var(--borderColor);
    color: var(--color);

    &:hover {
      background-color: var(--backgroundColorOnHover, var(--backgroundColor));
      border-color: var(--borderColorOnHover, var(--borderColor));
      color: var(--colorOnHover, var(--color));
      transition: 0.3s;
    }
  }
}

:is(.LButton--secondary, .LButton--tertiary, .LButton--customColors).v-btn:before {
  &.theme--light {
    background-color: unset !important;
  }
  &.theme--dark {
    background-color: unset;
  }
}

.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined):is(.LButton--primary, .LButton--customColors),
.v-btn.v-btn--disabled:is(.LButton--secondary, .LButton--tertiary, .LButton--customColors) {
  &.theme--light {
    background-color: var(--backgroundColorDisabled, var(--backgroundColor)) !important;
    border-color: var(--borderColorDisabled, var(--borderColor)) !important;
    color: var(--colorDisabled, var(--color)) !important;
  }
  &.theme--dark {
    background-color: var(--backgroundColorDisabled, var(--backgroundColor));
    border-color: var(--borderColorDisabled, var(--borderColor));
    color: var(--colorDisabled, var(--color));
  }
}

.v-btn {
  min-width: unset !important;
}
</style>

<style lang="scss">
.LButton .v-btn__content {
  & .v-icon--left {
    margin-left: unset !important;
    margin-right: 5px !important;
  }

  & .v-icon--right {
    margin-left: 5px !important;
    margin-right: unset !important;

  }
}

.LButton.v-btn--disabled .v-btn__content .v-icon {
  color: unset !important;
}
</style>
