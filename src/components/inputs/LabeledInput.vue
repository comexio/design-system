<template>
  <div
    :class="validityClass"
    class="labeled-input"
  >
      <div class="top-border">
          <div class="labeled-input__separator"></div>
          <div
            :class="title ? '' : 'labeled-input__separator'"
            class="labeled-input__title"
          >
              {{ title }}
          </div>
          <div class="labeled-input__separator"></div>
      </div>
      <input
        v-bind="$attrs"
        v-on="$listeners"
        type="text"
        class="labeled-input__input"
      >
      <!-- <span
        v-if="suffix"
        class="labeled-input__suffix">
            <i
              v-if="isFieldValid"
              class="labeled-input__suffix__icon">
                &#10003;
            </i>
            <i v-else class="labeled-input__suffix__icon">
                &#128712;
            </i>
      </span> -->
      <span
        v-if="message"
        class="labeled-input__message">
          {{ message }}
      </span>
      <div 
        v-if="validity !== ''"
        class="validation-icon"
      >
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        validity: {
            type: [String, Boolean],
            default: ''
        },
        warning: {
            type: Boolean
        }
    },
    data () {
        return {
            message: 'Mínimo de 6 caracteres; Pelo menos um número e um caractere especial.'
        }
    },
    computed: {
        showValidity () {
            return this.validity !== ''
        },
        validityClass () {
            if (this.warning) {
                return 'warning'
            }
            if (!this.showValidity) {
                return
            }
            return this.validity ? 'valid' : 'invalid'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

.validation-icon {
    width: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 8px;
    pointer-events: none;
    background-repeat: no-repeat;
    background-position: center;
}

.top-border {
    display: grid;
    grid-template-columns: 15px auto 1fr;
    align-items: end;
    .labeled-input__separator {
        border-top: 1px solid $purpleMartinique;
        transform: translateY(2px);
        height: 3px;
        &:first-child {
            border-top-left-radius: 4px;
        }
        &:last-child {
            border-top-right-radius: 4px;
        }
    }
}

.labeled-input__title {
    padding: 0 5px;
    height: 0;
    z-index: 1;
    transform: translateY(-.5em);
    font-size: 14px;
}
.labeled-input__input {
    font-size: 18px;
    padding: 0 5px;
    height: 35px;
    width: 100%;
    border: 1px solid $purpleMartinique;
    border-radius: 4px;
    border-top: none;
    outline: none;
}

.labeled-input__message {
    font-size: 12px;
    position: absolute;
    left: 0px;
    bottom: -15px;
}

.labeled-input--valid {
    .labeled-input__suffix__icon {
        color: $orangeWestSide;
    }
}

.labeled-input {
    position: relative;
    &.valid .validation-icon {
        background-image: url(../../assets/icons/icon-correct.svg);
    }
    &.invalid {
        .labeled-input__input, .labeled-input__separator {
            border-color: $redCarantion;
        }
        .validation-icon {
            background-image: url(../../assets/icons/icon-error.svg);
        }
        .labeled-input__message {
            color: $redCarantion;
        }
    }
    &.warning {
        .validation-icon {
            background-image: url(../../assets/icons/icon-warning.svg);
        }
    }
}
</style>