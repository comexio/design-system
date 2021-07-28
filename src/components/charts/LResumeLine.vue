<template>
  <div class="resumeLine d-flex justify-space-between">
    <div class="resumeLine__title font-md">
      <img
        :src="imagePath"
        :alt="title"
        class="resumeLine__image ml-n4 mr-5"
      >
      <span>{{ title }}</span>
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
    },
    imagePath: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.resumeLine {
  color: $martinique;
}

.resumeLine__title {
  display: flex;
  position: relative;
  span {
    font-size: 0.923rem;
    font-weight: 500;
    line-height: 1rem;
    color: $doveGray;
    margin: auto;  
  }
}

.resumeLine__description {
  color: $martinique;
  margin: auto 0;
  font-size: 1.077rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1rem;
}

.resumeLine__image {
  height: auto;
  width: 52px;
}
</style>
