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
    border: 1px solid #000;
    border-radius: 4px;
    border-top: none;
    outline: none;
}

.labeled-input {
    position: relative;
    &.valid .validation-icon {
        background-image: url(../../assets/icons/icon-correct.svg);
    }
    &.invalid {
        .labeled-input__input, .labeled-input__separator {
            border-color: red;
        }
        .validation-icon {
            background-image: url(../../assets/icons/icon-error.svg);
        }
    }
    &.warning {
        .validation-icon {
            background-image: url(../../assets/icons/icon-warning.svg);
        }
    }
}
</style>