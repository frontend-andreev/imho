<template>
  <div class="analytics-geography-table main-content">
    <div class="analytics-geography-table__top main-table_white">
      <div class="analytics-geography-table__row">
        <div
          class="analytics-geography-table__column main-table__column"
          @click="countries.sort(sortAuthors('index'))"
        >
          <p>№</p>
          <div class="analytics-geography-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-geography-table__column main-table__column"
          @click="countries.sort(sortAuthors('countries'))"
        >
          <p>Страна</p>
          <div class="analytics-geography-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-geography-table__column main-table__column"
          @click="countries.sort(sortAuthors('users'))"
        >
          <p>Всего авторов</p>
          <div class="analytics-geography-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-geography-table__column analytics-geography-table__column_direction main-table__column"
        >
          <div
            class="analytics-geography-table__subrow"
            @click="countries.sort(sortAuthors('men'))"
          >
            <div
              class="analytics-geography-table__subcolumn analytics-geography-table__subcolumn_big"
            >
              <p>Мужчины</p>
              <div class="analytics-geography-table__icon">
                <FilterArrowsIcon />
              </div>
            </div>
          </div>
          <div class="analytics-geography-table__subrow">
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>Всего</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>0-17</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>18-24</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>25-34</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>35-44</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>45-54</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>55-64</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>65+</p>
            </div>
          </div>
        </div>
        <div
          class="analytics-geography-table__column analytics-geography-table__column_direction main-table__column"
        >
          <div
            class="analytics-geography-table__subrow"
            @click="countries.sort(sortAuthors('men'))"
          >
            <div
              class="analytics-geography-table__subcolumn analytics-geography-table__subcolumn_big"
            >
              <p>Женщины</p>
              <div class="analytics-geography-table__icon">
                <FilterArrowsIcon />
              </div>
            </div>
          </div>
          <div class="analytics-geography-table__subrow">
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>Всего</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>0-17</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>18-24</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>25-34</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>35-44</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>45-54</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>55-64</p>
            </div>
            <div
              class="analytics-geography-table__subcolumn main-table__column"
            >
              <p>65+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="analytics-geography-table__content">
      <div
        class="analytics-geography-table__row"
        v-for="(country, index) in paginatedItems"
        :key="country"
      >
        <div class="analytics-geography-table__value main-table__column">
          <p class="main-table__text">{{ index + 1 }}</p>
        </div>
        <div class="analytics-geography-table__value main-table__column">
          <div class="main-table__icon">
            <img
              :src="
                require(`@/assets/images/icons/flags/${country.toLowerCase()}.svg`)
              "
              alt=""
            />
          </div>
          <p class="main-table__text_bold">{{ country }}</p>
        </div>
        <div class="analytics-geography-table__value main-table__column">
          <p class="main-table__text">{{ availableAuthors[country].length }}</p>
        </div>
        <div
          class="analytics-geography-table__subrow analytics-geography-table__value main-table__column"
        >
          <div
            class="analytics-geography-table__value analytics-geography-table__subcolumn main-table__column"
          >
            <p class="main-table__text">{{ dataAuthors("male", country) }}</p>
          </div>
          <div
            class="analytics-geography-table__value analytics-geography-table__subcolumn main-table__column"
            v-for="(item, key) in yearsByGenders"
            :key="key"
          >
            <p class="main-table__text">
              {{ dataAuthors("male", country, key) }}
            </p>
          </div>
        </div>
        <div
          class="analytics-geography-table__subrow analytics-geography-table__value main-table__column"
        >
          <div
            class="analytics-geography-table__value analytics-geography-table__subcolumn main-table__column"
          >
            <p class="main-table__text">{{ dataAuthors("female", country) }}</p>
          </div>
          <div
            class="analytics-geography-table__value analytics-geography-table__subcolumn main-table__column"
            v-for="(item, key) in yearsByGenders"
            :key="key"
          >
            <p class="main-table__text">
              {{ dataAuthors("female", country, key) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Paginator :items="countries" @changePaginatedItems="changeData" />
  </div>
</template> 
  <script>
import FilterArrowsIcon from "@/assets/images/icons/filterArrows.svg?inline";
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
      availableAuthors: {
        RUS: [],
        BLR: [],
        LTU: [],
        LAT: [],
        KAZ: [],
        EST: [],
        UKR: [],
        POL: [],
        MDA: [],
      },
      allAuthors: [],
      yearsByGenders: {
        17: "0-17",
        24: "18-24",
        34: "25-34",
        44: "35-44",
        54: "45-54",
        64: "55-64",
        65: "65+",
      },
      femaleAuthors: [],
      maleAuthors: [],
      paginatedItems: [],
      countries: [],
      reverseSort: {
        countries: false,
        authors: false,
        men: false,
        women: false,
        index: false,
      },
    };
  },
  mounted() {
    this.getTotal(this.users);
  },
  components: {
    FilterArrowsIcon,
    Paginator,
  },
  methods: {
    getTotal(users) {
      this.countries = this.availableCountries;
      users.filter((item) => {
        item.availableCountries.some((element) => {
          if (
            this.availableCountries.includes(element) &&
            !this.availableAuthors[element].some((e) => e.id == item.id)
          ) {
            this.availableAuthors[element].push(item);
          }
        });
      });
    },
    dataAuthors(gender, country, old = 0) {
      if (old == 0) {
        return this.availableAuthors[country].filter(
          (item) => item.gender == gender
        ).length;
      } // Общее количество людей одного пола
      if (old == 65) {
        return this.availableAuthors[country].filter(
          (item) => item.gender == gender && item.age >= 65
        ).length;
      }
      if (old > 0)
        return this.availableAuthors[country].filter(
          (item) => item.gender == gender && item.age <= old
        ).length;
    },
    sortAuthors(field) {
      let reverse = !this.reverseSort[field];
      const key = (x) => {
        if (field == "users") {
          return this.availableAuthors[x].length;
        } else if (field == "countries") {
          return x;
        } else if (field == "men") {
          return this.availableAuthors[x].filter((e) => e.gender == "male")
            .length;
        } else if (field == "women") {
          return this.availableAuthors[x].filter((e) => e.gender == "female")
            .length;
        } else if (field == "index") {
          // Тут должна быть сортировка по номеру, её доработаю когда будет готов бэк, ибо не знаю в каком формате будут идти данные
          // А в dom идет просто индекс массива.
        }
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
  computed: {
    ...mapGetters({
      availableCountries: "Main/getAvailableCountries",
    }),
  },
  watch: {
    users(newValue) {
      this.getTotal(newValue);
    },
    availableCountries() {
      this.getTotal(this.users);
    },
  },
};
</script>
  <style lang="scss">
.analytics-geography-table {
  &__row {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 8fr 8fr;
    justify-items: center;
    align-items: center;
  }
  &__top {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    background: #b90c0c;
    border-radius: 8px 8px 0 0;
  }
  &__column {
    cursor: pointer;
    &_direction {
      display: flex;
      flex-direction: column;
      padding: 0;
    }
  }
  &__subrow {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(8, 1fr);
    width: 100%;
    align-items: center;
    justify-items: center;
    .main-table__column p {
      font-size: 14px;
    }
  }
  &__subcolumn {
    border-radius: 0px 0px 0px 0px !important;
    &_big {
      display: flex;
      align-items: center;
      grid-column: 1/8;
      padding: 8px 0;
    }
  }
  &__icon {
    display: flex;
    margin-left: 5px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    .main-table__column p {
      font-size: 14px;
    }
    &__subcolumn p {
      font-size: 10px !important;
    }
  }
}
</style>