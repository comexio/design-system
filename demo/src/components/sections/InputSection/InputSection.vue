<template>
  <section class="input-section">
      <h1>
          Input
      </h1>
      <div class="input-description">
          Height: 35px; Border Radius: 5px
      </div>
      <div class="inputs">
        <input-demo title="Default">
            <input>
        </input-demo>
        <input-demo title="Check">
            <input>
        </input-demo>
        <input-demo title="Dropdown">
            <input>
        </input-demo>
        <input-demo title="Multiselect">
            <input>
        </input-demo>
      </div>
  </section>
</template>

<script>
import InputDemo from './InputDemo'

export default {
    components: {
        InputDemo
    }
}
</script>

<style lang="scss" scoped>
.inputs {
    display: grid;
    grid-template-columns: repeat(4, 1fr),
}
</style>