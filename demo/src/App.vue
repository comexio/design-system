<template>
  <div id="app">
    <the-header />
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
export default {
    components: {
        TheHeader
    }
}
</script>

<style lang="scss">
@import './scss/_global.scss';
#app {
    font-family: Rubik;
}
</style>
