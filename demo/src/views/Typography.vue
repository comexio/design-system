<template>
  <div>
    <div class="typography-tittle">
      <h1>Typography</h1>
          <p>Lorem ipsum justo habitant pharetra nec quisque leo libero himenaeos,<br> nisi varius aenean himenaeos aliquam ac hac sem.</p>
    </div>
      <div class="font-list">
          <div
            v-for="[fontName, fontFamily] in fonts"
            :style="{ fontFamily }"
            :key="fontName"
            class="font text-center"
          >
            <div class="font-demo">
                Aa
            </div>
            <div class="font-name">
                {{ fontName }}
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            fonts: [
                ['Rubik Light', 'Rubik-Light'],
                ['Rubik Regular', 'Rubik-Regular'],
                ['Rubik Medium', 'Rubik-Medium'],
                ['Rubik Bold', 'Rubik-Bold'],
                ['Rubik Black', 'Rubik-Black'],
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.typography-tittle{
  text-align: center;
  color: $Martinique;
}
.font-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 30px;
}
.font-demo {
    font-size: 60px;
}
.font {
    margin-right: 25px;
    color: #000;
    font-weight: initial;
}
@import '../scss/_fonts.scss';
@include font('Rubik-Light', '/fonts/Rubik-Light');
@include font('Rubik-Regular', '/fonts/Rubik-Regular');
@include font('Rubik-Medium', '/fonts/Rubik-Medium');
@include font('Rubik-Bold', '/fonts/Rubik-Bold');
@include font('Rubik-Black', '/fonts/Rubik-Black');
</style>