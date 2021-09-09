<template>
  <div class="LModalHeader">
    <div class="d-flex justify-space-between py-4 px-5">
      <span class="LModalHeader__title font-md">
        Titulo modal
      </span>
      <l-button-new
        color="#B8B8B8"
        height="20"
        width="20"
        class="LModalHeader__close pa-0"
      >
        <v-icon
          size="20" 
          color="white"
        >
          mdi-close
        </v-icon>
      </l-button-new>
    </div>
    <v-divider class="LModalHeader__divider" />
  </div>
</template>

<script>
import LButtonNew from '~/src/components/buttons/LButtonNew.vue' 
export default {
  components: {
    LButtonNew
  }

  
}
</script>

<style lang="scss" scoped>
.LModalHeader__title {
  color: $martinique;
  font-size: 1.23rem;
}

.LModalHeader__close {
  background: $silver;
}

.LModalHeader__divider {
  border-color: $gallery;
}
</style>
