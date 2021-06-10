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
        :data="normalList"
        :colors="generatedColors"
        :is-expandable="canExpand"
        :is-expanded="isExpanded"
        :charts-indicator="chartsIndicator"
        :translation-line="translateObject"
        :apply-cursor-pointer="hasCursorPointer"
        v-bind="$attrs"
        @expandList="expandList"
        @eventClick="setFilterLabel($event)"
      />
      <l-linear-chart-expand
        v-if="isExpanded"
        :data="expandedList"
        :loading="loadingExpand"
        :headers="headers"
        :apply-cursor-pointer="hasCursorPointer"
        @expand="expandList"
        @search="search"
        @eventClick="setFilterLabel($event)"
      />
      <v-dialog
        v-if="dialog"
        v-model="dialog"
        persistent
        width="50%"
        content-class="rounded-dialog"
      >
        <modal
          :dialog="dialog"
          :disabled-confirm="false"
          :cancel-text="$t('ayla.modalAutomaticFilter.btnCancel')"
          :confirm-text="$t('ayla.modalAutomaticFilter.btnAddFilter')"
          @close="$emit('close')"
          @confirm="filterModal(data.label)"
        >
          <l-modal-content
            class="imgSize"
            :img="getImageFilter()"
            :title="getFilterTitle"
            :subtitle="$t('ayla.modalAutomaticFilter.newSearch')"
          />
        </modal>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { formatDecimalPlaces } from "~/utils/currency.util";
import { generateHexColorByString } from "~/utils/color.util";
import {
  TYPES_OF_VALUES_FORMAT,
  CHARTS_INDICATOR,
  CHARTS_POSSIBLE_GUYS,
  CHARTS_TYPES_NAMES,
  AUTOMATIC_FILTERS_FIELD,
  FILTER_ACTIONS,
} from "~/enum/linearChart.enum";

export default {
  name: "LLinearChartTotalValue",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    totalValue: {
      type: String,
      required: true,
    },
    currentQuery: {
      type: Object,
      default: () => ({}),
    },
    filterModal: {
      type: Function,
      required: true,
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
      input: null,
      headers: [
        this.$t("ayla.cardExpanded.position"),
        this.$t("ayla.cardExpanded.companies"),
        this.$t("ayla.cardExpanded.value"),
        this.$t("ayla.cardExpanded.quantity"),
      ],
      notInformed: {},
      totalOthers: 0,
      dialog: false,
      itemToFilter: AUTOMATIC_FILTERS_FIELD,
      selectedModal: {
        label: "",
      },
      chartName: "",
      chartsTypes: CHARTS_TYPES_NAMES,
      scroller: null,
      colors: ["#7d8aff", "#ffa57d", "#ff7da9", "#51a59a", "#7851a5"],
      isExpanded: false,
      isExpandable: true,
      type: null,
      loadingExpand: false,
      chartsIndicator: CHARTS_INDICATOR.FOB,
      filterAction: FILTER_ACTIONS.ADD,
      imageAddFilter: true,
    };
  },
  computed: {
    getImageFilter() {
      return this.getImageAddFilter
        ? "/images/add_filter.svg"
        : "/images/remove_filter.svg";
    },
    treatedData() {
      let data = this.data
        .filter(function (item) {
          return !(!("shipmentQuantity" in item) && item.label === "total");
        })
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

      data = data.filter(function (item) {
        return !(
          item.label === CHARTS_POSSIBLE_GUYS.NOT_INFORMED && data.length >= 5
        );
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
    expandedList() {
      return this.treatedData.slice(5);
    },
    canExpand() {
      return !!this.expandedList.length && this.isExpandable;
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

      console.log(translate);

      return translate;
    },
    hasCursorPointer() {
      return (
        this.type === this.chartsTypes.POSSIBLE_IMPORTERS ||
        this.type === this.chartsTypes.POSSIBLE_EXPORTERS
      );
    },
    getFilterAction() {
      return this.filterAction;
    },
    getImageAddFilter() {
      return this.imageAddFilter;
    },
    getFilterTitle() {
      return this.$t("ayla.modalAutomaticFilter.filterTitle", {
        chart: this.chartName,
        field: this.selectedModal.label,
      });
    },
  },
  created() {
    const currentQuery = this.currentQuery;
    const selectedModalToFilter = this.selectedModal.label;
    if (
      currentQuery[this.filterField] &&
      currentQuery[this.filterField].includes(selectedModalToFilter)
    ) {
      this.buttonActionText = this.$t(
        "ayla.modalAutomaticFilter.btnRemoveFilter"
      );
      this.filterAction = FILTER_ACTIONS.REMOVE;
      this.imageAddFilter = false;
      this.filterTitle = this.$t(
        "ayla.modalAutomaticFilter.removeFilterTitle",
        { chart: this.chartName, field: this.selectedModal.label }
      );
    }
  },
  methods: {
    removeModalFromArray(modalArray, modalToRemove) {
      const arrayWithModalRemoved = [...modalArray];
      const indexOfModalToRemove = arrayWithModalRemoved.indexOf(modalToRemove);
      arrayWithModalRemoved.splice(indexOfModalToRemove, 1);
      return arrayWithModalRemoved;
    },
    expandList() {
      this.$emit("toggleExpand", this.type);
    },
    search() {
      const { scroller } = this;
      if (!scroller) {
        return;
      }

      const page = scroller.page + 1;
      this.$emit("updateChart", {
        name: this.type,
        scroller: { ...scroller, page },
      });
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
    setFilterLabel(value) {
      this.selectedModal.label = value;
      this.dialog = true;
    },
    getFilterFilterByChartType(chart) {
      if (chart === this.chartsTypes.POSSIBLE_IMPORTERS) {
        this.chartName = this.$t("ayla.likelyImporter");

        return this.itemToFilter.POSSIBLE_IMPORTER;
      }

      if (chart === this.chartsTypes.POSSIBLE_EXPORTERS) {
        this.chartName = this.$t("ayla.likelyExporter");

        return this.itemToFilter.POSSIBLE_EXPORTER;
      }

      return "";
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
