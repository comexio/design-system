<template>
  <section class="status">
      <slot />
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.status {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
}
@media screen and (max-width: 768px) {
    .status {
        grid-template-columns: 1fr 1fr;
    }
}
</style>