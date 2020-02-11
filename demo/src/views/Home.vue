<template>
  <div class="page-home">
    <the-header />
    <div class="home">
      <colors />
      <div class="status">
        <maritime-status />
        <air-status />
      </div>
      <system-usage />
      <typography />
      <input-section />
      <filter-section />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import Colors from '@/components/sections/colors/Colors'
import AirStatus from '@/components/sections/status/AirStatus'
import MaritimeStatus from '@/components/sections/status/MaritimeStatus'
import SystemUsage from '@/components/sections/SystemUsage'
import Typography from '@/components/sections/Typography'
import InputSection from '@/components/sections/InputSection/InputSection'
import FilterSection from '@/components/sections/FilterSection/FilterSection'

export default {
  name: 'Home',
  components: {
      Colors,
      AirStatus,
      MaritimeStatus,
      SystemUsage,
      Typography,
      InputSection,
      TheHeader,
      FilterSection
  }
}
</script>
<style lang="scss">
.home {
    padding: 50px;
    display: grid;
    grid-gap: 50px;
    padding-bottom: 50vh;
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
