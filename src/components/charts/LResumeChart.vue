<template>
  <l-card
    :title="title"
    :description="description"
    height="auto"
    class="LResumeChart"
  >
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
  </l-card>
</template>

<script>
import LCard from '~/src/components/cards/LCard'
import LResumeLine from './LResumeLine'

export default {
  components: {
    LCard,
    LResumeLine
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.LResumeChart__content {
  padding: 0 15px;
}
</style>
