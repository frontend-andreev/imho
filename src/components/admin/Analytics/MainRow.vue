<template>
  <div class="admin-analytics__row row-analytics">
    <div class="row-analytics__content main-color">
      <div class="row-analytics__info">
        <div class="row-analytics__title">
          <p>Всего</p>
        </div>
        <div
          class="row-analytics__features"
          v-for="(item, index) in features"
          :key="index"
        >
          <div
            class="row-analytics__property"
            :class="{ 'row-analytics__role': item.color }"
            :style="[
              item.color
                ? {
                    background: item.color,
                    'font-weight': 400,
                    'font-size': '12px',
                    padding: '4px 6px',
                  }
                : undefined,
              item.weight ? { 'font-weight': item.weight } : undefined,
            ]"
          >
            <p>{{ item.property }}</p>
          </div>
          <div class="row-analytics__value">
            <p>{{ item.value }}</p>
          </div>
        </div>
      </div>
      <div class="row-analytics__graph">
        <line-chart :styles="{ height: '150px' }"></line-chart>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "@/components/admin/Analytics/AnalyticsGraph.vue";
export default {
  props: {
    features: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    LineChart,
  },
};
</script>
<style lang="scss">
.row-analytics {
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &__content {
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    padding: 8px;
    background: #fff;
    border-radius: 8px;
  }
  &__title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  &__info {
    padding: 8px 15px 20px 8px;
  }
  &__features {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__property {
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
  }
  &__value {
    font-size: 14px;
    font-weight: 500;
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    &__content {
      grid-template-columns: 1fr 3fr;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__content {
      grid-template-columns: 1fr 2fr;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__content {
      grid-template-columns: 1fr;
    }
  }
}
</style>