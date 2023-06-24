<template>
  <div class="moderator-user-kpi">
    <div class="moderator-user-kpi__title">
      <h4>ЛК модератора</h4>
    </div>
    <Header />
    <div class="moderator-user-kpi__content main-color main-content">
      <div class="moderator-user-kpi__row">
        <h5 class="moderator-user-kpi__name">
          KPI {{ currentUser.surname }} {{ currentUser.name }}
        </h5>
      </div>
      <div class="moderator-user-kpi__row">
        <div class="moderator-user-kpi__column">
          <div class="moderator-user-kpi__parameter">
            <p>Обработано</p>
          </div>
          <div class="moderator-user-kpi__value">
            <p>14 300</p>
          </div>
        </div>
        <div class="moderator-user-kpi__column">
          <div class="moderator-user-kpi__parameter">
            <p>Жалобы</p>
          </div>
          <div class="moderator-user-kpi__value">
            <p>{{ "14 300".toLocaleString() }}</p>
          </div>
        </div>
      </div>
      <div class="moderator-user-kpi__row">
        <div
          class="moderator-user-kpi__column moderator-user-kpi__column_direction"
        >
          <div class="moderator-user-kpi__subtitle">
            <h5>Продуктивность за неделю</h5>
          </div>
          <ul class="moderator-user-kpi__list">
            <li class="moderator-user-kpi__status">
              <p>Одобрено</p>
            </li>
            <li class="moderator-user-kpi__status">
              <p>Отклонено</p>
            </li>
          </ul>
          <div class="moderator-user-kpi__graph">
            <line-chart
              class="moderator-user-kpi__line"
              :styles="{ height: '300px' }"
              :style="[
                Container.width < 1068 && $route.query.period == 'month'
                  ? { width: '1728px' }
                  : Container.width <= 850 && $route.query.period == 'year'
                  ? { width: '768px' }
                  : Container.width <= 632 && $route.query.period == 'week'
                  ? { width: '600px' }
                  : false,
              ]"
            ></line-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/moderator/Kpi/Header";
import LineChart from "@/components/moderator/Kpi/Graph.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    };
  },
  components: {
    Header,
    LineChart,
  },
  computed: {
    ...mapGetters({
      currentUser: "Users/getCurrentUser",
      Container: "Main/getSizeOfContainer",
    }),
  },
};
</script>
<style lang="scss">
.moderator-user-kpi {
  p {
    color: #353132;
  }
  &__content {
    margin-top: 16px;
    padding: 16px;
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 16px;
    margin-bottom: 16px;
  }
  &__column {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border: 1px solid #c0c0c0;
    padding: 8px;
    &_direction {
      flex-direction: column;
      align-items: start;
    }
  }
  &__name {
    font-size: 24px;
    font-weight: 700;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #353132;
    margin-bottom: 16px;
  }
  &__subtitle {
    margin-bottom: 16px;
    h5 {
      font-size: 16px;
      font-weight: 700;
    }
  }
  &__parameter {
    font-weight: 700;
  }
  &__value {
    font-size: 24px;
    font-weight: 700;
  }
  &__graph {
    width: 100%;
  }
  &__list {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    li {
      margin-left: 18px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #69c4e9;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:first-child {
        margin-right: 16px;
      }
      &:last-child::before {
        background: #b5e2f5;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1600px) {
    &__row {
      &_direction {
        flex-direction: column;
        align-items: start;
      }
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__title {
      font-size: 24px;
    }
    &__name,
    &__subtitle {
      font-size: 16px;
    }
    &__parameter,
    &__value,
    &__status {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 850px) {
    &__months {
      width: 100%;
    }
    &__months .main-filter {
      width: 795px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__name {
      font-size: 14px;
    }
    &__parameter,
    &__value,
    &__status {
      font-size: 12px;
    }
    &__column {
      padding: 4px;
    }
    &__title {
      font-size: 16px;
    }
  }
}
</style>