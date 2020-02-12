<template>
  <v-menu
    v-model="menuState"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        :label="label"
        outlined
        dense
        v-on="on"
      >
        <template v-slot:append>
          <!-- Todo: add datepicker icon -->
          <div />
        </template>
      </v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      v-bind="$attrs"
      no-title
      color="secondary"
    />
  </v-menu>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            menuState: false,
            date: null
        }
    }
}
</script>

<style>

</style>
