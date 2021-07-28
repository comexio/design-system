<template>
  <div class="LResumeChart">
    <div class="LResumeChart__content">
      <div
        v-for="(item, key) in data"
        :key="key"
      >
        <l-resume-line
          :class="chartClass"
          :title="item.title"
          :description="item.description"
          :image-path="item.imagePath"
          data-testid="LResumeLine__wrapper"
          style="paddingBottom: 2px"
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
    },
    dense: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    chartClass () {
      return {
        'py-3': !this.dense
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LResumeChart__content {
  padding: 0 15px;
}
</style>
