<template>
  <div class="air-status">
      <h2>Air Status</h2>
      <status class="air-colors">
          <color-box
            v-for="[name, hex] in statusColors"
            :key="hex + name"
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
                ['', '#8CB8F3'],
                ['', '#E5BF42'],
                ['', '#B8A2FC'],
                ['', '#FF8D75'],
                ['', '#E8F1FD'],
                ['', '#FFF7E8'],
                ['', '#F1ECFF'],
                ['', '#FFE8E3'],
                ['', '#67C7D4'],
                ['', '#DF7895'],
                ['', '#59B78C'],
                ['', '#FF6E6E'],
                ['', '#E0F4F7'],
                ['', '#F9E4EA'],
                ['', '#DEF1E8'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.air-colors {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
}
</style>