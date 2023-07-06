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
          v-if="!noData"
          class="d-flex justify-space-around align-center"
        >
          <v-avatar
            v-show="timeLineScroll.initial || isExtraSmall"
            id="LTimeline__arrowLeft"
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
            v-show="timeLineScroll.final || isExtraSmall"
            id="LTimeline__arrowRight"
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
        <slot
          v-if="noData"
          name="no-data"
        />
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
      required: true
    },
    description: {
      type: String,
      required: true
    },
    noData: Boolean
  },
  data () {
    return {
      timeLineScroll: {
        initial: false,
        final: true
      }
    }
  },
  computed: {
    isExtraSmall () {
      return this.$vuetify.breakpoint.xs
    }
  },
  mounted () {
    this.buildButtonsScrollTimeLine()
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
    getTimeLineContentSize () {
      return this.$el.querySelector('.LTimeline__cardContent').clientWidth
    },
    setTimeLineScroll (quantity) {
      const timeLine = this.$refs.LTimeline__cardContent
      timeLine.scrollLeft = timeLine.scrollLeft + quantity
    },
    buildButtonsScrollTimeLine () {
      if (this.noData) {
        return
      }

      const timeLine = this.$refs.LTimeline__cardContent
      timeLine.scrollLeft = this.getTimeLineContentSize()

      if (timeLine.scrollWidth <= timeLine.clientWidth) {
        this.timeLineScroll.final = false
      }

      timeLine.addEventListener('scroll', () => {
        this.handleShowButtonsByScroll(timeLine)
      })
    },
    handleShowButtonsByScroll (timeLine) {
      this.handleShowButtonLeft(timeLine.scrollLeft)
      this.handleShowButtonRight(timeLine)
    },
    handleShowButtonLeft (scrollLeft) {
      if (scrollLeft === 0) {
        return this.$set(this.timeLineScroll, 'initial', false)
      }

      return this.$set(this.timeLineScroll, 'initial', true)
    },
    handleShowButtonRight (timeLine) {
      if (this.scrollReachedRightBorder(timeLine)) {
        return this.$set(this.timeLineScroll, 'final', false)
      }

      return this.$set(this.timeLineScroll, 'final', true)
    },
    scrollReachedRightBorder ({ scrollLeft, scrollWidth }) {
      const contentSizeWithScrollSize =
        Math.round(scrollLeft) + this.getTimeLineContentSize()

      return contentSizeWithScrollSize === scrollWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.LTimeline {
  display: flex;
  font-size: 0.923076923rem;

  &__card {
    padding-top: 15px;
  }

  &__cardContent {
    width: 85%;
    margin: 0 6px;
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

@media screen and (min-width: 600px) {
  .LTimeline__cardContent {
    margin: 0 8px;
  }
}

@media screen and (min-width: 1910px) {
  .LTimeline__cardContent {
    width: 90%;
  }
}
</style>
