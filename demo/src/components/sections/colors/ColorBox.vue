<template>
  <div class="color-box text-center d-flex flex-column align-items-center">
    <div
      :style="{ backgroundColor: hex }"
      class="hex-demo d-flex justify-center align-center mb-1"
      @click="copy"
    >
      <div class="overlay" />
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
    <textarea
      v-show="isUpdating"
      ref="copy"
      :value="hex"
    />
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
    },
    data () {
        return {
            isUpdating: false
        }
    },
    methods: {
        async copy() {
            this.isUpdating = true
            await this.$nextTick()
            this.$refs.copy.select()
            document.execCommand('copy')
            this.isUpdating = false
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
    pointer-events: none;
    color: 000;
    z-index: 1;
}

.hex-demo {
    height: 90px;
    width: 100%;
    cursor: pointer;
    position: relative;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    opacity: 0;
    transition: opacity .15s ease-in;
    &:hover {
        &+.icon-copy {
            opacity: 1;
        }
        opacity: 0.5;
    }
}
</style>
