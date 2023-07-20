<template>
  <div class="analytics-users-table main-table main-content">
    <div class="analytics-users-table__top main-table_white">
      <div class="analytics-users-table__row">
        <div class="analytics-users-table__parameter main-table__column">
          <p>№</p>
          <div class="analytics-users-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-users-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('id', parseInt))"
        >
          <p>Id</p>
          <div class="analytics-users-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-users-table__parameter main-table__column"
          @click="
            filteredItems.sort(sort_by('availableCountries', (a) => a.length))
          "
        >
          <p>Страна</p>
          <div class="analytics-users-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-users-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('name', (a) => a.toUpperCase()))"
        >
          <p>Автор</p>
          <div class="analytics-users-table__icon">
            <ArrowDownIcon />
          </div>
          <span class="analytics-users-table__author">
            Александр Тиханский
          </span>
        </div>
        <div
          class="analytics-users-table__parameter main-table__column"
          @click="changeType"
        >
          <p>Тип</p>
          <div class="analytics-users-table__icon">
            <ArrowDownIcon />
          </div>
        </div>
        <div
          class="analytics-users-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('talker', parseInt))"
        >
          <p>Говорун</p>
          <div class="analytics-users-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-users-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('boor', parseInt))"
        >
          <p>Хам</p>
          <div class="analytics-users-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-users-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('diplomat', parseInt))"
        >
          <p>Дипломат</p>
          <div class="analytics-users-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
      </div>
    </div>
    <div
      class="analytics-users-table__body analytics-users-table__row"
      v-for="(item, index) in paginatedItems"
      :key="item.id"
    >
      <div class="analytics-users-table__value main-table__column">
        <p>{{ index + 1 }}</p>
      </div>
      <div class="analytics-users-table__value main-table__column">
        <p>{{ item.id }}</p>
      </div>
      <div class="analytics-users-table__value main-table__column">
        <ul class="main-table__list">
          <li v-for="country in item.availableCountries" :key="country">
            <div class="main-table__icon">
              <img
                :src="
                  require(`@/assets/images/icons/flags/${country.toLowerCase()}.svg`)
                "
                alt=""
              />
            </div>
            <p class="main-table__text main-table__text_bold">
              {{ country }}
            </p>
          </li>
        </ul>
      </div>
      <div class="analytics-users-table__value main-table__column">
        <p>{{ item.name }} {{ item.surname }}</p>
      </div>
      <div class="analytics-users-table__value main-table__column">
        <p>{{ item.type }}</p>
      </div>
      <div class="analytics-users-table__value main-table__column">
        <p>{{ item.talker.toLocaleString() }}</p>
      </div>
      <div class="analytics-users-table__value main-table__column">
        <p>{{ item.boor.toLocaleString() }}</p>
      </div>
      <div class="analytics-users-table__value main-table__column">
        <p>{{ item.diplomat.toLocaleString() }}</p>
      </div>
    </div>
    <Paginator :items="filteredItems" @changePaginatedItems="changeData" />
  </div>
</template>
<script>
import FilterArrowsIcon from "@/assets/images/icons/filterArrows.svg?inline";
import ArrowDownIcon from "@/assets/images/icons/arrowDown.svg?inline";
import Paginator from "@/components/main/Paginator";
import { mapGetters } from "vuex";
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filteredItems: [],
      paginatedItems: [],
      reverseSort: {
        id: false,
        availableCountries: false,
        name: false,
        talker: false,
        boor: false,
        diplomat: false,
      },
      currentType: "РЧК",
    };
  },
  mounted() {
    this.changeFilteredItems();
  },
  components: {
    FilterArrowsIcon,
    ArrowDownIcon,
    Paginator,
  },
  methods: {
    changeFilteredItems(array = this.users) {
      this.filteredItems = array.filter((item) => {
        let type = item.type == this.currentType;
        let countries = item.availableCountries.some((element) =>
          this.availableCountries.includes(element)
        );
        return type == true && countries == true;
      });
    },
    changeData(data) {
      this.paginatedItems = data;
    },
    changeType() {
      if (this.currentType == "РЧК") {
        this.currentType = "ВЧК";
      } else {
        this.currentType = "РЧК";
      }
      this.changeFilteredItems();
    },
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
  },
  computed: {
    ...mapGetters({
      availableCountries: "Main/getAvailableCountries",
    }),
  },
  watch: {
    users(newValue) {
      this.changeFilteredItems(newValue);
    },
    availableCountries() {
      this.changeFilteredItems();
    },
  },
};
</script>
<style lang="scss">
.analytics-users-table {
  &__top {
    background: #b90c0c;
  }
  &__parameter {
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 4fr 2fr 2fr 2fr 2fr;
  }
  &__author {
    font-size: 14px;
    margin-left: 16px;
    text-transform: none;
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
}
</style>