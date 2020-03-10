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
        <labeled-input
          label="Name"
          placeholder="Default Value"
        />
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
        <v-select
          dense
          outlined
          value="first"
          :items="['first', 'second', 'third']"
        />
        <v-select
          v-model="dropdown.value1"
          :items="[{ name: 'Edward', id: 2 }, { name: 'Mary', id: 3 }]"
          label="Name"
          dense
          outlined
          item-value="id"
          item-text="name"
        />
      </input-demo>
      <input-demo title="Multiselect">
        <v-select
          v-model="dropdown.value2"
          :items="[{ name: 'Edward', id: 2 }, { name: 'Mary', id: 3 }]"
          outlined
          multiple
          chips
          clearable
          deletable-chips
          dense
          :menu-props="{ offsetY: true }"
          label="Names"
          item-value="id"
          item-text="name"
        />
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
            },
            dropdown: {
                value1: 2,
                value2: [2]
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