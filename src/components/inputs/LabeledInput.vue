<template>
  <div class="labeled-input">
      <svg
        viewBox="0 0 100 150"
        id="labeled-input__border"
      >
        <rect fill="#000" x="0" y="0" width="50" height="50"  />
        <rect fill="#fff" x="0" y="0" width="100" height="150"  />
      </svg>
      <input
        v-bind="$attrs"
        v-on="$listeners"
        type="text"
        class="labeled-input__input"
      >
      Labeled Inputt
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.labeled-input-border {

}
.labeled-input {
    position: relative;
}
.labeled-input__input {
    height: 35px;
    border: 1px solid green;
    // mask: url(#labeled-input__border);
    outline: none;
}
#labeled-input__border {
    // position: absolute;
    width: 100%;
    height: 150%;
    // display: none;
}
</style>