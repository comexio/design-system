<template>
  <div class="LTimeline">
    <l-card
      class="LTimeline__card"
      :data="{'key':0}"
      :title="title"
      :description="description"
      force-show-slot
      style="width: 100%"
    >
      <div class="d-flex flex-column my-4 mx-2">
        <slot name="header-content" />

        <div
          class="d-flex justify-space-around align-center"
        >
          <v-avatar
            v-if="timeLineScroll.initial"
            size="20"
            color="#F9EFFF"
            class="pointer mt-n11"
            @click="handleScrollLeft"
          >
            <v-icon color="blurred">
              mdi-chevron-left
            </v-icon>
          </v-avatar>

          <div
            ref="LTimeline__cardContent"
            class="LTimeline__cardContent d-flex pb-4"
          >
            <slot />
          </div>

          <v-avatar
            v-if="timeLineScroll.final"
            size="20"
            color="#F9EFFF"
            class="pointer mt-n11"
            @click="handleScrollRight"
          >
            <v-icon color="blurred">
              mdi-chevron-right
            </v-icon>
          </v-avatar>
        </div>
      </div>
    </l-card>
  </div>
</template>

<script>
import LCard from "~/src/components/cards/LCard.vue";

export default {
  name: 'LTimeline',
  components: {
    LCard
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  data () {
    return {
      timeLineScroll: {
        initial: false,
        final: true
      },
    }
  },
  mounted () {
    this.buildButtonsSrollTimeLine()
  },
  methods: {
    handleScrollLeft () {
      const itemSize = this.getTimeLineItemSize()
      this.setTimeLineScroll(-itemSize)
    },
    handleScrollRight () {
      const itemSize = this.getTimeLineItemSize()
      this.setTimeLineScroll(itemSize)
    },
    getTimeLineItemSize () {
      return this.$el.querySelector('.LTimelineItem').clientWidth
    },
    setTimeLineScroll (quantity) {
      const timeLine = this.$refs.LTimeline__cardContent

      timeLine.scrollLeft = timeLine.scrollLeft + quantity
    },
    buildButtonsSrollTimeLine () {
      const timeLine = this.$refs.LTimeline__cardContent

      timeLine.addEventListener('scroll', () => {
        this.handleShowBottonsByScroll(timeLine)
      })
    },
    handleShowBottonsByScroll (timeLine) {
      this.handleShowBottonLeft(timeLine.scrollLeft)
      this.handleShowBottonRight(timeLine.scrollLeft)
    },
    handleShowBottonLeft (scrollLeft) {
      if (scrollLeft === 0) {
        return this.$set(this.timeLineScroll, 'initial', false)
      }

      return this.$set(this.timeLineScroll, 'initial', true)
    },
    handleShowBottonRight (scrollLeft) {
      if (scrollLeft > this.getTimeLineItemSize()) {
        return this.$set(this.timeLineScroll, 'final', false)
      }

      return this.$set(this.timeLineScroll, 'final', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.LTimeline {
  display: flex;
  font-family: Rubik, sans-serif;
  font-size: 0.923076923rem;

  &__card {
    padding-top: 15px;
  }

  &__cardContent {
    width: 960px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
     height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(black, 0.1);
      border-radius: 16px;
    }
  }
}

@media (min-width: 1400px) {
  .LTimeline__cardContent {
    width: 1150px;
  }
}
</style>
