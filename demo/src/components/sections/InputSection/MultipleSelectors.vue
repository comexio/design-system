<template>
  <section class="multiple-selectors">
    <input-demo title="Comments">
      <v-textarea
        label="Comments"
        outlined
      />
    </input-demo>
    <input-demo title="Checkbox">
      <div>
        <v-checkbox
          hide-details
          label="Not selected"
        />
        <v-checkbox
          label="Selected"
          hide-details
          :input-value="true"
        />
      </div>
    </input-demo>
    <input-demo title="Radio">
      <v-radio-group value="radio">
        <v-radio label="Not selected" />
        <v-radio
          value="radio"
          label="Selected"
        />
      </v-radio-group>
    </input-demo>
    <input-demo title="Date">
      <l-date-picker label="Date input" />
    </input-demo>
  </section>
</template>

<script>
import InputDemo from './InputDemo'
import { LDatePicker } from '../../../../../src'
export default {
    components: {
        InputDemo,
        LDatePicker
    }
}
</script>

<style lang="scss" scoped>
.multiple-selectors {
    display: flex;
    justify-content: space-between;
}
</style>