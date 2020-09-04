<template>
  <div class="LResumeChart">
    <div class="LResumeChart__content">
      <div
        v-for="(item, key) in data"
        :key="key"
      >
        <l-resume-line
          class="py-3"
          :title="item.title"
          :description="item.description"
        />
        <v-divider
          v-if="data.length !== key + 1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LResumeLine from './LResumeLine'

export default {
  components: {
    LResumeLine
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
.LResumeChart__content {
  padding: 0 15px;
}
</style>
