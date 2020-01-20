<template>
  <div class="input-demo">
      <h3>
          {{ title }}
      </h3>
      <slot />
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

</style>