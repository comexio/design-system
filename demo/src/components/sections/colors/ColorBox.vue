<template>
    <div class="color-box text-center d-flex flex-column align-items-center">
        <div
          :style="{ backgroundColor: hex }"
          class="hex-demo mb-1">
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
    height: 1.1em;
}
.color-box {
    box-shadow: 0px 1px 5px #ccc;
    padding-bottom: 10px;
}
.hex-demo {
    height: 90px;
    width: 100%;
}
</style>