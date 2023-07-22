<template>
  <div class="analytics-themes-table main-content">
    <div class="analytics-themes-table__top main-table_white">
      <div class="analytics-themes-table__row">
        <div class="analytics-themes-table__parameter main-table__column">
          <p>№</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('theme', (a) => a.toUpperCase()))"
        >
          <p>Тема</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('tag', (a) => a.toUpperCase()))"
        >
          <p>Тэг</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('publications', (a) => a.length))"
        >
          <p>Кол-во публ</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('rus', parseInt))"
        >
          <p>Rus</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('bel', parseInt))"
        >
          <p>Bel</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('ltu', parseInt))"
        >
          <p>Ltu</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('lat', parseInt))"
        >
          <p>Lat</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('kaz', parseInt))"
        >
          <p>Kaz</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('est', parseInt))"
        >
          <p>Est</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('ukr', parseInt))"
        >
          <p>Ukr</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('pol', parseInt))"
        >
          <p>Pol</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-themes-table__parameter main-table__column"
          @click="items.sort(sort_by('mda', parseInt))"
        >
          <p>Mda</p>
          <div class="analytics-themes-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
      </div>
    </div>
    <div class="analytics-themes-table__body">
      <div
        class="analytics-themes-table__row"
        v-for="(item, index) in paginatedItems"
        :key="index"
      >
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ index + 1 }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.theme.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.tag.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.publications.length }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.rus.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.bel.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.ltu.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.lat.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.kaz.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.est.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.ukr.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.pol.toLocaleString() }}</p>
        </div>
        <div
          class="analytics-themes-table__column analytics-themes-table__value main-table__column"
        >
          <p>{{ item.mda.toLocaleString() }}</p>
        </div>
      </div>
    </div>
    <Paginator :items="items" @changePaginatedItems="changeData" />
  </div>
</template>
<script>
import FilterArrowsIcon from "@/assets/images/icons/filterArrows.svg?inline";
import Paginator from "@/components/main/Paginator";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      paginatedItems: [],
      reverseSort: {
        theme: false,
        tag: false,
        publications: false,
        rus: false,
        bel: false,
        ltu: false,
        lat: false,
        kaz: false,
        est: false,
        ukr: false,
        pol: false,
        mda: false,
      },
    };
  },
  components: {
    FilterArrowsIcon,
    Paginator,
  },
  methods: {
    sort_by(field, primer) {
      let reverse = !this.reverseSort[field];
      const key = primer
        ? function (x) {
            return primer(x[field]);
          }
        : function (x) {
            return x[field];
          };
      this.reverseSort[field] = reverse;

      reverse = !reverse ? 1 : -1;
      return function (a, b) {
        return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
      };
    },
    changeData(data) {
      this.paginatedItems = data;
    },
  },
};
</script>
<style lang="scss">
.analytics-themes-table {
  &__top {
    background: #b90c0c;
    text-transform: uppercase;
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 2fr repeat(9, 1fr);
    align-items: center;
    justify-content: center;
  }
  &__parameter {
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
  }
  &__icon {
    display: flex;
    align-items: center;
    margin-left: 9px;
  }
  &__value {
    font-size: 14px;
    font-weight: 500;
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    &__parameter {
      font-size: 11px;
    }
    &__value {
      font-size: 12px;
    }
    &__row {
      grid-template-columns: 1fr 2fr 2fr 2fr repeat(9, 1fr);
    }
  }
}
</style>