<template>
  <div class="LLinearChart flex-grow-1">
    <div class="">
      <v-list>
        <v-list-item
          v-for="(item, index) in data"
          :key="index"
          class="LLinearChart__list__item"
          dense
        >
          <l-linear-chart-line
            :apply-cursor-pointer="isClickable(item)"
            :data="item"
            :index="index"
            :color="colors[index]"
            :last-item="isLastItem(index)"
            :is-expandable="isExpandable"
            :translation-line="translationLine"
            :items-without-details="itemsWithoutDetails"
            :show-tool-tip="showToolTip"
            :label-max-length="labelMaxLength"
            :description-max-length="descriptionMaxLength"
            :magnify-items-quantity="magnifyItemsQuantity"
            @expand="expandList"
            @eventClick="eventClick"
          >
            <template #sectionAfterValue="slotProps">
              <slot
                name="sectionAfterValue"
                :value="slotProps.value"
              />
            </template>
            <template
              v-if="!isLastItem(index) && index < magnifyItemsQuantity"
            >
              <slot
                name="magnifyItemDetail"
                :data="item"
              >
                <span>
                  <l-button-new
                    :color="globalColors.wisteria"
                    class="LLinearChart__list__item__magnify"
                    text
                    icon
                    height="9px"
                    min-width="20px"
                    @click="linearChartItemDetail(item)"
                  >
                    <v-icon
                      size="14px"
                    >
                      mdi-magnify
                    </v-icon>
                  </l-button-new>
                </span>
              </slot>
            </template>
          </l-linear-chart-line>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
import LLinearChartLine from '~/src/components/charts/LLinearChartLine'
import LButtonNew from '~/src/components/buttons/LButtonNew.vue'
import colorsMixin from '~/mixins/colors.mixin'

export default {
  name: 'LLinearChart',
  components: {
    LLinearChartLine,
    LButtonNew
  },
  mixins: [colorsMixin],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    scroller: {
      type: Object,
      default: null
    },
    colors: {
      type: Array,
      default: () => []
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    isExpandable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: null
    },
    loadingExpand: {
      type: Boolean,
      default: false
    },
    generateColor: {
      type: Boolean,
      default: false
    },
    isTagChart: {
      type: Boolean,
      default: false
    },
    maxQuantity: {
      type: Number,
      default: 4
    },
    translationLine: {
      type: Object,
      default: () => ({
        value: null,
        records: null,
        seeMore: null
      })
    },
    itemsWithoutDetails: {
      type: Array,
      default: () => []
    },
    applyCursorPointer: {
      type: Boolean,
      default: false
    },
    showToolTip: {
      type: Boolean,
      default: false
    },
    labelMaxLength: {
      type: Number,
      default: 23
    },
    descriptionMaxLength: {
      type: Number,
      default: 39
    },
    nonClickableItems: {
      type: Array,
      default: () => []
    },
    magnifyItemsQuantity: {
      type: Number,
      default: 0
    }
  },
  methods: {
    isLastItem (index) {
      return index === this.maxQuantity
    },
    isClickable(item) {
      const hasNonClickableItems = this.nonClickableItems.find(label => label === item.label)

      if (hasNonClickableItems) {
        return false
      }

      return this.applyCursorPointer
    },
    expandList () {
      this.$emit('expandList', this.type)
    },
    eventClick (value) {
      const hasNonClickableItems = this.nonClickableItems.find(label => label === value)

      if (hasNonClickableItems) {
        return
      }

      this.$emit('eventClick', value)
    },
    linearChartItemDetail (item) {
      this.$emit('linear-chart-item-detail', item)
    }
  }
}
</script>

<style lang="scss" scoped>

.LLinearChart__list__item{
  padding: 3px 10px;
  }
.LLinearChart__list__item__magnify {
  margin-left: 5px;
}
@media screen and (min-width: 1500px) {
  .LLinearChart__list__item {
    min-height: auto;
    padding: 10px 20px;
  }
}
</style>
