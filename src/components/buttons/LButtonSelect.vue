<template>
  <v-btn
    v-bind="$attrs"
    text
    :ripple="false"
    class="LButtonSelect"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'LButtonSelect'
}
</script>

<style lang="scss" scoped>
.LButtonSelect {
  color: $martinique;
  ::v-deep {
    .v-icon {
      color: $wisteria;
    }

    .v-btn__content {
      min-height: 32px;
      border-bottom: 1px solid $wisteria;
    }
  }

  &:hover::before, &:focus::before  {
    opacity: 0;
  }
}
</style>
