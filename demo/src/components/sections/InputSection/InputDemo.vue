<template>
  <div class="input-demo">
      <h3>
          {{ title }}
      </h3>
      <div class="input-group">
          <slot />
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Default'
        }
    }
}
</script>

<style lang="scss" scoped>
.input-group {
    display: grid;
    grid-gap: 10px;
}
</style>