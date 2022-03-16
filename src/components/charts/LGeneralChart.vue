<template>
  <div class="LGeneralChart d-flex align-center flex-wrap py-3 px-5">
    <div class="py-3 pr-5 ml-4">
      <v-img
        v-if="image"
        :src="image"
        :alt="imgAlt"
        class="LGeneralChart__image"
      />
    </div>
    <div>
      <div class="LGeneralChart__value font-bd">
        {{ data.total }} {{ typeValue }}
      </div>
      <div class="LGeneralChart__subtitle font-md">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LGeneralChart',
  props: {
    data: {
      type: [Object, Array],
      default: null
    },
    imgAlt: {
      type: String,
      default: 'container'
    },
    subtitle: {
      type: String,
      default: null
    },
    typeValue: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.LGeneralChart {
  .LGeneralChart__image {
    width: 60px;
    max-width: 100%;
  }
  .LGeneralChart__value {
    font-size: 1.9rem;
    color: $martinique;
  }
  .LGeneralChart__subtitle {
    font-size: 0.9rem;
    color: $doveGray;
  }
}
</style>
