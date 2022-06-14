<template>
  <div class="LTimeline">
    <l-card-new
      class="LTimeline__card"
      width="100%"
    >
      <l-card-header-new
        :title="title"
        :subtitle="description"
      />
      <div class="d-flex flex-column my-4 mx-2">
        <slot name="header-content" />
        <div
          class="d-flex justify-space-around align-center"
        >
          <v-avatar
            v-if="timeLineScroll.initial"
            :color="globalColors.magnoliaDark"
            size="20"
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
            :color="globalColors.magnoliaDark"
            size="20"
            class="pointer mt-n11"
            @click="handleScrollRight"
          >
            <v-icon color="blurred">
              mdi-chevron-right
            </v-icon>
          </v-avatar>
        </div>
      </div>
    </l-card-new>
  </div>
</template>

<script>
import LCardNew from '~/src/components/cards/LCardNew.vue'
import LCardHeaderNew from '~/src/components/cards/LCardHeaderNew.vue'
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LTimeline',
  components: {
    LCardNew,
    LCardHeaderNew
  },
  mixins: [colorsMixin],
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
        final: false
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

      if (timeLine.scrollWidth > timeLine.clientWidth) {
        this.timeLineScroll.final = true
      }

      timeLine.addEventListener('scroll', () => {
        this.handleShowButtonsByScroll(timeLine)
      })
    },
    handleShowButtonsByScroll (timeLine) {
      this.handleShowButtonLeft(timeLine.scrollLeft)
      this.handleShowButtonRight(timeLine.scrollLeft)
    },
    handleShowButtonLeft (scrollLeft) {
      if (scrollLeft === 0) {
        return this.$set(this.timeLineScroll, 'initial', false)
      }

      return this.$set(this.timeLineScroll, 'initial', true)
    },
    handleShowButtonRight (scrollLeft) {
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
