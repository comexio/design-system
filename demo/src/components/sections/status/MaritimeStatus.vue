<template>
  <div class="maritime-status">
      <h2>Maritime Status</h2>
      <status class="maritime-colors">
          <color-box
            v-for="[name, hex] in statusColors"
            :key="hex"
            :hex="hex"
            :title="name"
          />  
      </status>
  </div>
</template>

<script>
import Status from './Status'

export default {
    components: {
        Status
    },
    data () {
        return {
            statusColors: [
                ['Arm. n Tratado', '#BF75BA'],
                ['Buscar Emb.', '#4ECEF9'],
                ['Pend. Embarq.', '#9F6CBB'],
                ['Em Transb.', '#6DD866'],
                ['Arm. n Tratado', '#F2E3F1'],
                ['Buscar Emb.', '#DBF5FE'],
                ['Pend. Embarq.', '#FDE9DE'],
                ['Em Transb.', '#E2F7E0'],
                ['Em Trans. Final', '#F25C69'],
                ['Descarg. Final', '#8681EB'],
                ['Saída de Carga', '#47ABA7'],
                ['Devolver Vazio', '#F876B3'],
                ['Em Trans. Final', '#FDDEE1'],
                ['Descarg. Final', '#E7E6FB'],
                ['Saída de Carga', '#DAEEED'],
                ['Devolver Vazio', '#FEE3F0'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>