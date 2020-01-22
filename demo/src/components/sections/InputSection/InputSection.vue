<template>
  <section class="input-section">
      <h1>
          Input
      </h1>
      <div class="input-description">
          Height: 35px; Border Radius: 5px
      </div>
      <div class="inputs">
        <!-- <input-demo title="Default">
            <labeled-input />
            <labeled-input title="Name" />
            <labeled-input title="Name2" value="Default Value" />
        </input-demo>
        <input-demo title="Validation">
            <labeled-input title="New password" :validity="false" />
            <labeled-input title="New password" :validity="true" />
        </input-demo>
        <input-demo title="Dropdown">
            <v-text-field outlined />
        </input-demo>
        <input-demo title="Multiselect">
            <input>
        </input-demo> -->
        <input-demo title="Padrão">
            <custom-input
                label="Nome"
            />
        </input-demo>
        <input-demo title="Correto">
            <custom-input
                label="Nova senha"
                type="password"
            />
        </input-demo>
        <v-icon>home</v-icon>
      </div>
  </section>
</template>

<script>
import InputDemo from './InputDemo'
import { CustomInput } from '@/../../src'

export default {
    components: {
        InputDemo,
        CustomInput
    },
    data() {
        return {
             rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters'
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