<template>
  <div>
    <div class="text-center">
      <h1 class="strong">
        {{ totalValue }}
      </h1>
      <h5>
        {{ title }}
      </h5>
    </div>

    <div class="d-flex full-height">
      <l-linear-chart
        v-bind="$attrs"
        :data="normalList"
        :colors="generatedColors"
        :is-expandable="isExpandable"
        :is-expanded="isExpanded"
        :charts-indicator="chartsIndicator"
        :translation-line="translateObject"
        :apply-cursor-pointer="false"
      />
    </div>
  </div>
</template>

<script>
import { formatDecimalPlaces } from "~/utils/currency.util";
import { generateHexColorByString } from "~/utils/color.util";
import LLinearChart from "~/src/components/charts/LLinearChart";
import {
  TYPES_OF_VALUES_FORMAT,
  CHARTS_INDICATOR,
  CHARTS_POSSIBLE_GUYS
} from "~/enum/linearChart.enum";

export default {
  name: "LLinearChartTotalValue",
  components: {
    LLinearChart
  },
  props: {
    data: {
      type: Array,
      default: () => ([]),
    },
    title: {
      type: String,
      default: '',
    },
    totalValue: {
      type: String,
      default: '',
    },
    generateColor: {
      type: Boolean,
      default: false,
    },
    isTagChart: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      notInformed: {},
      totalOthers: 0,
      colors: ["#7d8aff", "#ffa57d", "#ff7da9", "#51a59a", "#7851a5"],
      isExpanded: false,
      isExpandable: false,
      chartsIndicator: CHARTS_INDICATOR.FOB,
    };
  },
  computed: {
    treatedData() {
      const data = this.data
        .filter((item) => !(!item.hasOwnProperty('shipmentQuantity') && item.label === "total"))
        .filter((item) => !(item.label === CHARTS_POSSIBLE_GUYS.NOT_INFORMED && data.length >= 5))
        .map((item) => {
          const { label, percentage, quantity } = item;

          const newItem = {
            label,
            percentage,
            quantity,
            value: this.getItemValue(item),
            total: this.quantityData(item),
          };

          if (item.label === CHARTS_POSSIBLE_GUYS.NOT_INFORMED) {
            this.notInformed = newItem;
          }

          if (item.label === CHARTS_POSSIBLE_GUYS.OTHERS) {
            this.totalOthers = item.quantity;
          }

          return newItem;
        });

      if (
        this.notInformed.label === CHARTS_POSSIBLE_GUYS.NOT_INFORMED &&
        data.length >= 5
      ) {
        const otherLines = this.totalOthers + 4;
        if (otherLines === data.length) {
          data.push(this.notInformed);
        }
      }

      return data;
    },
    normalList() {
      const data = this.treatedData;
      if (data.length <= 4) {
        return data;
      }
      if (data.length >= 5) {
        data[4].label = this.$t("ayla.others");
      }

      return data.slice(0, 5);
    },
    generatedColors() {
      return this.normalList.map((item, index) => {
        const color = this.colors ? this.colors[index] : null;

        return this.colorize(color, item.label);
      });
    },
    translateObject() {
      const translate = {
        value: this.$t("ayla.value"),
        records: this.$t("ayla.records"),
        seeMore: this.$t("ayla.seeMore"),
      };
      if (this.chartsIndicator === CHARTS_INDICATOR.WEIGHT) {
        translate.records = this.$t("ayla.weight");
      }
      return translate;
    },
  },
  methods: {
    removeModalFromArray(modalArray, modalToRemove) {
      const arrayWithModalRemoved = [...modalArray];
      const indexOfModalToRemove = arrayWithModalRemoved.indexOf(modalToRemove);
      arrayWithModalRemoved.splice(indexOfModalToRemove, 1);
      return arrayWithModalRemoved;
    },

    colorize(color, text) {
      return this.$props.generateColor ? generateHexColorByString(text) : color;
    },
    quantityData(data) {
      if ("shipmentQuantity" in data) {
        return this.chartsIndicator === CHARTS_INDICATOR.WEIGHT
          ? formatDecimalPlaces(
              data.weightValue,
              TYPES_OF_VALUES_FORMAT.weight,
              0
            )
          : formatDecimalPlaces(data.shipmentQuantity);
      }

      return null;
    },
    getItemValue(item) {
      if ("valueShipment" in item) {
        return formatDecimalPlaces(
          item.valueShipment,
          TYPES_OF_VALUES_FORMAT.MONEY
        );
      }

      return formatDecimalPlaces(item.total, TYPES_OF_VALUES_FORMAT.MONEY);
    },
  },
};
</script>

<style lang="scss" scoped>
.LLinearChart {
  flex-basis: 50%;
}

.modalAutomaticFilter {
  color: white;
}

::v-deep {
  .LLinearChartLine {
    & .LLinearChartLine__result {
      font-size: 0.8rem;
      color: #b8b8b8;
      white-space: nowrap;
    }
  }

  .modalAutomaticFilter__modal__title,
  .modalAutomaticFilter__modal__text {
    color: $martinique;
    text-align: center;
  }
  .modalAutomaticFilter__modal__title {
    font-size: 1.2rem;
  }
  .modalAutomaticFilter__modal {
    min-width: 415px !important;
  }
  .modalAutomaticFilter__modal__text,
  .modalAutomaticFilter__modal__remaining {
    font-size: 1rem;
  }
  .modalAutomaticFilter__modal__remaining {
    color: $silver;
    text-align: center;
  }
  .v-card__text {
    padding-bottom: 0 !important;
  }
  .v-image__image--cover {
    background-size: 65% !important;
  }
}
</style>
