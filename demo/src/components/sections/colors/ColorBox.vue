<template>
  <div class="color-box text-center d-flex flex-column align-items-center">
    <div
      :style="{ backgroundColor: hex }"
      class="hex-demo d-flex justify-center align-center mb-1"
    >
      <v-icon class="icon-copy">
        mdi-content-copy
      </v-icon>
    </div>
    <div class="title-text">
      {{ title }}
    </div>
    <div class="hex-text">
      {{ hex }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        hex: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.hex-text, .title-text {
    height: 1.3em;
    color: #707070;
    text-transform: uppercase;
    font-size: 13px;
    margin-top: 2px;
}
.color-box {
    box-shadow: 0px 1px 5px #ccc;
    padding-bottom: 10px;
}

.icon-copy {
    width: 50%;
    height: 50%;
    opacity: 0;
    transition: opacity .15s ease-in;
    color: 000;
}

.hex-demo {
    height: 90px;
    width: 100%;
    cursor: pointer;
    &:hover .icon-copy {
        opacity: 1;
    }
}
.hex-demo:hover{
    opacity: 0.5;
}
</style>
