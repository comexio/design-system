<template>
  <div class="resumeLine d-flex justify-space-between">
    <div class="resumeLine__title font-md">
      {{ title }}
    </div>
    <div class="resumeLine__description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LResumeLine',
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.resumeLine {
  color: $martinique;
  font-size: 0.9rem;
}

.resumeLine__title {
  position: relative;
  padding-left: 10px;
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: $prelude;
    position: absolute;
    left: 0px;
    top: 7px;
  }
}
</style>
