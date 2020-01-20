<template>
  <div class="labeled-input">
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>