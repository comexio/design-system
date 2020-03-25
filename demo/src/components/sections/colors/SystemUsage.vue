<template>
  <section class="system-usage">
    <h2 class="system-usage_title">
      System Colors Usage
    </h2>
    <div class="system-usage-content">
      <section class="all-usage">
        <div
          v-for="[title, hex] in [...colors, ...colors2]"
          :key="hex"
          class="system-color"
        >
          <div
            :style="{ backgroundColor: hex }"
            class="system-color-box"
          />
          <div class="system-color-hex">
            <b>{{ hex }}</b>
          </div>
          <div class="system-color-title">
            <p>{{ title }}</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
    data () {
        return {
            colors: [
                ['Header, sidebar icons, active checkbox icons, selection buttons', '#5C068C'],
                ['Call to action buttons', '#FF8F1C'],
                ['System font', '#2E264D'],
                ['Grey and cancel buttons', '#D4D4D4'],
                ['Separation lines (hr or vertical lines)', '#F1EFEF'],
                ['System icons', '#9F6CBB'],
            ],
            colors2: [
                ['Tags color', '#E2DAF8'],
                ['System background', '#FAF6FF'],
                ['Button hover', '#8345A5'],
                ['Call to action hover', '#FFAB56'],
                ['Sidebar selected items', '#F9EFFF'],
                ['Grey and cancel buttons hover', '#B8B8B8'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
$colorBoxSize: 40px;
.all-usage {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 2fr 2fr;
}
.system-color-box {
    width: $colorBoxSize;
    height: $colorBoxSize;
    border-radius: 3px;
}
.system-color {
    display: grid;
    grid-template-columns:  15px 50px 2fr;
    grid-gap: 40px;
    margin-bottom: 18px;
    align-items: center;
}
.system-usage_title {
    margin-top: 90px;
    margin-bottom: 20px;
    font-size: 1.3em;
    font-weight: bold;
    color: #313131;
}
.system-color-title p {
    margin: 0;
}
</style>
