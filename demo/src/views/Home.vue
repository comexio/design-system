<template>
  <div class="home">
    <colors />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import Colors from '@/components/sections/colors/Colors'

export default {
  name: 'Home',
  components: {
      Colors,
  }
}
</script>
<style lang="scss">
.home {
    padding: 50px;
    display: grid;
    grid-gap: 50px;
    background-color: #FCFCFC;
}
.status {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 90px;
}
@media screen and (max-width: 768px) {
    .status {
        display: block;
    }
}
</style>
