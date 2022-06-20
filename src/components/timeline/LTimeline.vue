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
            v-if="timeLineScroll.initial || isExtraSmall"
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
            v-if="timeLineScroll.final || isExtraSmall"
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
      </div>
    </l-card>
  </div>
</template>

<script>
import LCard from '~/src/components/cards/LCard.vue';
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LTimeline',
  components: {
    LCard
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
    setTimeLineScroll (quantity) {
      const timeLine = this.$refs.LTimeline__cardContent

      timeLine.scrollLeft = timeLine.scrollLeft + quantity
    },
    buildButtonsScrollTimeLine () {
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

@media screen and (max-width: 2000px) {
  ::v-deep .LTimeline__cardContent {
    max-width: 1152px;
    margin: 0 8px;
  }
}

@media screen and (max-width: 1400px) {
  ::v-deep .LTimeline__cardContent {
    max-width: 868px;
    margin: 0 8px;
  }
}

@media screen and (max-width-: 1280px) {
  ::v-deep .LTimeline__cardContent {
    max-width: 768px;
    margin: 0 8px;
  }
}

@media screen and (max-width: 600px) {
  ::v-deep .LTimeline__cardContent {
    max-width: 200px;
    margin: 0 6px;
  }
}
</style>
