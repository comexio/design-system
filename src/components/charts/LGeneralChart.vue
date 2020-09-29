<template>
  <div class="LGeneralChart py-4 px-5">
    <v-row>
      <v-col
        cols="2"
        class="d-flex mr-2"
      >
        <img
          v-if="image"
          :src="image"
          alt="container"
          class="LGeneralChart__image"
        >
      </v-col>
      <v-col>
        <div class="LGeneralChart__value font-bd">
          {{ data.total }} {{ typeValue }}
        </div>
        <div class="LGeneralChart__subtitle font-md">
          {{ subtitle }}
        </div>
      </v-col>
    </v-row>
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
