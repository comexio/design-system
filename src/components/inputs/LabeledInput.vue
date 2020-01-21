<template>
  <div class="labeled-input"
    :class="customStyleClass"
  >
      <div class="top-border">
          <div class="labeled-input__separator"></div>
          <div class="labeled-input__title">
              eai kkk
          </div>
          <div class="labeled-input__separator"></div>
      </div>
      <input
        v-bind="$attrs"
        v-on="$listeners"
        type="text"
        class="labeled-input__input"
      >
      <span
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
      </span>
      <span
        v-if="message"
        class="labeled-input__message">
          Mínimo de 6 caracteres; Pelo menos um número e um caractere especial.
      </span>
  </div>
</template>

<script>
export default {
    props: {
        suffix: {
            type: Boolean,
            default: false
        },
        validate: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            message: 'Mínimo de 6 caracteres; Pelo menos um número e um caractere especial.'
        }
    },
    computed: {
        isFieldValid () {
            return false
        },
        customStyleClass () {
            return {
                'labeled-input--validate': this.validate,
                'labeled-input--error': this.validate && this.isFieldValid === false,
                'labeled-input--valid': this.validate && this.isFieldValid === true
            }
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

.top-border {
    display: grid;
    grid-template-columns: 15px auto 1fr;
    align-items: end;
    .labeled-input__separator {
        border-top: 1px solid #000;
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
    transform: translateY(.5em);
}
.labeled-input__input {
    font-size: 18px;
    padding: 0 5px;
    height: 35px;
    width: 100%;
    border: 1px solid #000;
    border-radius: 4px;
    border-top: none;
    outline: none;
}

.labeled-input--validate {
    position: relative;
    & .labeled-input__input {
        padding-right: 25px;
    }
}

.labeled-input__suffix {
    position: absolute;
    right: 5px;
    font-size: 24px;
    line-height: 100%;
    bottom: 5px;
    i {
        font-style: normal;
    }
}

.labeled-input__message {
    font-size: 12px;
    position: absolute;
    left: 0px;
    bottom: -15px;
}

.labeled-input--error {
    .labeled-input__separator {
        border-color: $redCarantion;
    }
    .labeled-input__input {
        border-color: $redCarantion;
    }
    .labeled-input__suffix__icon {
        color: $redCarantion;
    }
    .labeled-input__message {
        color: $redCarantion;
    }
}

.labeled-input--valid {
    .labeled-input__suffix__icon {
        color: $orangeWestSide;
    }
}
</style>