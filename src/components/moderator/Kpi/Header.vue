<template>
  <div class="moderator-top-header">
    <div class="moderator-top-header__content">
      <div class="moderator-top-header__column">
        <div class="main-filter">
          <div class="main-period__button">
            <select name="color" v-model="textForPeriod">
              <option value="publish">Опубликовано</option>
              <option value="created">Создано</option>
            </select>
          </div>
          <div class="main-filter__block">
            <Period />
          </div>
        </div>
      </div>
      <div class="moderator-top-header__column">
        <div class="main-filter">
          <div class="main-filter__block">
            <router-link
              :to="{ name: 'UserKpi', query: { period: 'week' } }"
              :class="{
                'main-filter__button_active': $route.query.period == 'week',
              }"
              class="main-filter__button"
              >Неделя</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{ name: 'UserKpi', query: { period: 'month' } }"
              :class="{
                'main-filter__button_active': $route.query.period == 'month',
              }"
              class="main-filter__button"
              >Месяц</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{ name: 'UserKpi', query: { period: 'year' } }"
              :class="{
                'main-filter__button_active': $route.query.period == 'year',
              }"
              class="main-filter__button"
              >Год</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{ name: 'UserKpi', query: { period: 'all' } }"
              :class="{
                'main-filter__button_active': $route.query.period == 'all',
              }"
              class="main-filter__button"
              >За всё время</router-link
            >
          </div>
        </div>
      </div>
      <div class="moderator-top-header__column moderator-top-header__filter" v-if="isDark">
        <button><RefreshIconDark /></button>
        <button><PenIconDark /></button>
        <button><DotsIconDark /></button>
      </div>
      <div class="moderator-top-header__column moderator-top-header__filter" v-else>
        <button><RefreshIcon /></button>
        <button><PenIcon /></button>
        <button><DotsIcon /></button>
      </div>
    </div>
  </div>
</template>
<script>
import Period from "@/components/main/Period";
import PenIcon from "@/assets/images/icons/pen.svg?inline";
import RefreshIcon from "@/assets/images/icons/refresh.svg?inline";
import DotsIcon from "@/assets/images/icons/dots.svg?inline";
import PenIconDark from "@/assets/images/icons/dark/pen.svg?inline";
import RefreshIconDark from "@/assets/images/icons/dark/refresh.svg?inline";
import DotsIconDark from "@/assets/images/icons/dark/dots.svg?inline";
export default {
  data() {
    return {
      textForPeriod: "publish",
    };
  },
  components: {
    Period,
    PenIcon,
    RefreshIcon,
    DotsIcon,
    PenIconDark,
    RefreshIconDark,
    DotsIconDark,
  },
  computed: {
    isDark(){
      return document.querySelector('body').classList.contains('dark')
    }
  }
};
</script>
<style lang="scss">
.moderator-top-header {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__column:first-child {
    .main-filter__block {
      display: flex;
      align-items: center;
      p {
      }
    }
  }
  &__filter {
    display: flex;
    align-items: center;
    column-gap: 10px;
    button {
      display: flex;
      align-items: center;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__content {
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      row-gap: 12px;
    }
    &__column {
      &:nth-child(2) {
        grid-row: 2;
        grid-column: 1 / 3;
        justify-self: center;
      }
      &:last-child {
        justify-self: flex-end;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__column:first-child {
      .main-filter {
        display: inline-flex;
      }
    }
    &__filter {
      column-gap: 5px;
      svg {
        height: 15px;
        width: 15px;
      }
    }
  }
}
</style>