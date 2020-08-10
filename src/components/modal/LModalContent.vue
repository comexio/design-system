<template>
  <v-container class="modalContent">
    <v-row>
      <v-col cols="4">
        <v-img
          :src="img"
          aspect-ratio="1"
          :alt="imgAlt"
        />
      </v-col>
      <v-col class="d-flex flex-column justify-center">
        <div class="modalContent__title font-md mb-4">
          {{ title }}
        </div>
        <div class="modalContent__text">
          {{ subtitle }}
        </div>
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ModalContent',
  props: {
    img: {
      type: String,
      default: null
    },
    imgAlt: {
      type: String,
      default: 'imagem ilustrativa'
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    }
  }

}
</script>

<style lang="scss" scoped>
::v-deep {
  .modalContent__title, .modalContent__text {
    color: $martinique;
    text-align: center;
  }

  .modalContent__title {
    font-size: 1.2rem;
  }

  .modalContent__text, .modalContent__remaining {
    font-size: 1rem;
  }
}
</style>
