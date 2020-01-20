<template>
  <section class="system-usage">
      <h2>
          System Colors Usage
      </h2>
      <div class="system-usage-content">
          <div
            v-for="[title, hex] in colors"
            :key="hex"
            class="system-color">
              <div
                :style="{ backgroundColor: hex }"
                class="system-color-box"></div>
              <div class="system-color-hex">
                  <b>{{ hex }}</b>
              </div>
              <div class="system-color-title">
                  <b>{{ title }}</b>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data () {
        return {
            colors: [
                ['Header, sidebar icons, active checkbox icons, selection buttons', '#5C068C'],
                ['Button hover', '#8345A5'],
                ['System icons', '#9F6CBB'],
                ['System font', '#2E264D'],
                ['Call to action buttons', '#FF8F1C'],
                ['Call to action hover', '#FFAB56'],
                ['Grey and cancel buttons', '#D4D4D4'],
                ['Grey and cancel buttons hover', '#B8B8B8'],
                ['Separation lines (hr or vertical lines)', '#F1EFEF'],
                ['Tags color', '#E2DAF8'],
                ['Sidebar selected items', '#F9EFFF'],
                ['System background', '#FAF6FF'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
$colorBoxSize: 50px;
.system-color-box {
    width: $colorBoxSize;
    height: $colorBoxSize;
    border-radius: 4px;
}
.system-color {
    display: grid;
    grid-template-columns: $colorBoxSize 100px 1fr;
    grid-gap: 40px;
    margin-bottom: 6px;
    align-items: center;
}
</style>