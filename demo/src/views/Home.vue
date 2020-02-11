<template>
  <div class="home">
    <colors />
    <!-- 
    <div class="status">
      <maritime-status />
      <air-status />
      
    </div>
    <system-usage />
    <typography />
    <input-section />
    -->
  </div>
</template>

<script>
import Colors from '@/components/sections/colors/Colors'
import AirStatus from '@/components/sections/status/AirStatus'
import MaritimeStatus from '@/components/sections/status/MaritimeStatus'
import InputSection from '@/components/sections/InputSection/InputSection'

export default {
  name: 'Home',
  components: {
      Colors,
      AirStatus,
      MaritimeStatus,
      InputSection
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