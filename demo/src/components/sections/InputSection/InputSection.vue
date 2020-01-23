<template>
  <section class="input-section">
      <h1>
          Input
      </h1>
      <div class="input-description">
          Height: 35px; Border Radius: 5px
      </div>
      <div class="inputs">
        <input-demo title="Default">
            <labeled-input />
            <labeled-input label="Name" />
            <labeled-input label="Name" placeholder="Default Value" />
        </input-demo>
        <input-demo title="Validation">
            <labeled-input
                label="New password"
                type="password"
            />
            <labeled-input
                label="New password"
                type="password"
                :rules="[rules.required, rules.min]"
                validity
            />
        </input-demo>
        <input-demo title="Dropdown">
            <v-text-field outlined />
        </input-demo>
        <input-demo title="Multiselect">
            <v-text-field outlined />
        </input-demo>
      </div>
  </section>
</template>

<script>
import InputDemo from './InputDemo'
import { LabeledInput } from '@/../../src'

export default {
    components: {
        InputDemo,
        LabeledInput
    },
    data() {
        return {
             rules: {
                required: value => !!value || 'Required.',
                min: v => v && v.length >= 8 || 'Min 8 characters'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.inputs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
}
</style>