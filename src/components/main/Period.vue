<template>
  <v-date-picker
    :select-attribute="attr"
    :drag-attribute="attr"
    v-model="range"
    :masks="masks"
    is-range
    :rows="layout.rows"
    :columns="layout.columns"
    :is-dark="checkMode"
    :disabled-dates="{ weekdays: [1, 7] }"
  >
    <template v-slot="{ inputValue, inputEvents }">
      <div class="period main-color">
        <div class="period__text">
          <p>с</p>
        </div>

        <div class="period__item">
          <input
            class="period__input"
            :value="inputValue.start"
            v-on="inputEvents.start"
            readonly
          />
        </div>
        <div class="period__text">
          <p>по</p>
        </div>
        <div class="period__item">
          <input
            class="period__input"
            :value="inputValue.end"
            v-on="inputEvents.end"
            readonly
          />
        </div>
      </div>
    </template>
  </v-date-picker>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    layout: {
      type: Object,
      default: () => {
        return {
          rows: 1,
          columns: 1,
        };
      },
    },
  },
  data() {
    return {
      range: {
        start: "",
        end: "",
      },
      masks: {
        input: "DD.MM.YYYY",
      },
      attr: {
        highlight: "red",
      },
    };
  },
  computed: {
    ...mapGetters({
      getRange: "Main/getRange",
    }),
    checkMode() {
      console.log(12323);
      return document.body.classList.contains("dark");
    },
  },
  methods: {
    getCustomDay(date) {
      const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
      let i = new Date(date).getDay(date);
      console.log(i);
      return daysOfWeek[i];
    },
  },
  watch: {
    getRange(newValue) {
      this.range = newValue;
    },
    range(newValue) {
      this.$store.commit("Main/changeRangeForPeriod", newValue);
    },
  },
};
</script>
<style lang="scss">
.period {
  display: flex;
  align-items: center;
  &__item {
    max-width: 80px;
    padding: 2px 8px;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 4px;
    }
  }
  &__input {
    max-width: 100%;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
  &__text {
    margin-right: 4px;
    font-size: 14px;
    font-weight: 400;
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__text,
    &__input {
      font-size: 10px;
    }
    &__item {
      display: flex;
      align-items: center;
      max-width: 63px;
      padding: 2px 4px;
    }
  }
}
</style>