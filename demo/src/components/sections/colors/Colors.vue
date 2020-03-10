<template>
  <div>
    <div class="colors-background" />
    <section class="all-colors">
      <color-box
        v-for="[name, hex] in [...brandColors, ...systemColors]"
        :key="name"
        :hex="hex"
        :title="name"
      /> 
    </section>
    <system-usage />
  </div>
</template>

<script>
import SystemUsage from './SystemUsage'
export default {
    components:{
        SystemUsage
    },
    data () {
        return {
            brandColors: [
                ['Purple', '#5C068C'],
                ['Orange', '#FF8F1C'],
            ],
            systemColors: [
                ['Martinique', '#2E264D'],
                ['Alto', '#D4D4D4'],
                ['Gallery', '#F1EFEF'],
                ['Wisteria', '#9F6CBB'],
                ['Moon Raker', '#E2DAF8'],
                ['Magnolia', '#FAF6FF'],
                ['Royal Purple', '#8345A5'],
                ['Texas Rose', '#FFAB56'],
                ['Blue Chalk', '#F9EFFF'],
                ['Silver', '#B8B8B8'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.all-colors {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 40px;
    grid-row-gap: 70px;
    $topValue: 50px;
    & > :nth-child(3), & > :first-child, & > :nth-child(9) {
        position: relative;
        &::before {
            top: -$topValue;
            position: absolute;
            font-size: 1.3em;
            font-weight: bold;
            color: #313131;
        }
    }
    & > :nth-child(3)::before {
        content: 'System';
    }
    & > :nth-child(9)::before {
        content: 'Hover';
    }
    & > :nth-child(1)::before {
        content: 'Brand';
    }
}
.colors-background{
    background-image: url('colors.jpg');
    height: 385px;
    width: calc(100% + 100px);
    margin-left: -50px;
    margin-top: -50px;
}
</style>
