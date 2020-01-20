<template>
  <div>
      <h1>COLORS</h1>
      <h2>System</h2>
      <section class="system-colors">
          <color-box
            v-for="[name, hex] in systemColors"
            :key="name"
            :hex="hex"
            :title="name"
          />  
      </section>
  </div>
</template>

<script>
export default {
    data () {
        return {
            systemColors: [
                ['Purple', '#5C068C'],
                ['Purple Hover', '#8345A5'],
                ['Purple Icons', '#9F6CBB'],
                ['System Font', '#2E264D'],
                ['Orange', '#FF8F1C'],
                ['Orange Hover', '#FFAB56'],
                ['Tags Hover', '#E2DAF8'],
                ['Sidebar Hover', '#F9EFFF'],
                ['System Background', '#FAF6FF'],
                ['Grey Hover', '#B8B8B8'],
                ['Grey Button', '#D4D4D4'],
                ['Grey Lines', '#F1EFEF'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.system-colors {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 40px;
}
@media screen and (max-width: 768px) {
    .system-colors {
        grid-template-columns: 1fr 1fr;
    }
}
</style>