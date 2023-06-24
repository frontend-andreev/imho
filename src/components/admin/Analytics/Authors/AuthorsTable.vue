<template>
  <div class="analytics-authors-table">
    <div class="analytics-authors-table__top">
      <div class="analytics-authors-table__row main-table_white">
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="filteredItems.sort(sort_by('id', parseInt))"
        >
          <p>Id</p>
          <div class="analytics-authors-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="
            filteredItems.sort(sort_by('availableCountries', (a) => a.length))
          "
        >
          <p>Страна</p>
          <div class="analytics-authors-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="filteredItems.sort(sort_by('name', (a) => a.toUpperCase()))"
        >
          <p>Автор</p>
          <div class="analytics-authors-table__icon">
            <ArrowDownIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="
            filteredItems.sort(
              sort_by('lastActive', (a) => new Date(a).getTime())
            )
          "
        >
          <p>Посл. актив</p>
          <div class="analytics-authors-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="filteredItems.sort(sort_by('publications', (a) => a.length))"
        >
          <p>Кол-во Публ.</p>
          <div class="analytics-authors-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="filteredItems.sort(sort_by('reports', parseInt))"
        >
          <p>Жалобы</p>
          <div class="analytics-authors-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="filteredItems.sort(sort_by('humanComments', parseInt))"
        >
          <div class="analytics-authors-table__icon">
            <CommentIcon />
          </div>
          <div class="analytics-authors-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="filteredItems.sort(sort_by('comments', parseInt))"
        >
          <p>Р. Спикера</p>
          <div class="analytics-authors-table__icon">
            <CommentIcon />
          </div>
        </div>
        <div
          class="analytics-authors-table__parameter analytics-authors-table__column main-table__column"
          @click="filteredItems.sort(sort_by('favourite', (a) => a.length))"
        >
          <div class="analytics-authors-table__icon">
            <HeartIcon />
          </div>
          <div class="analytics-authors-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
      </div>
    </div>
    <div class="analytics-authors-table__body main-content">
      <div
        class="analytics-authors-table__row"
        v-for="item in paginatedItems"
        :key="item.id"
      >
        <div class="analytics-authors-table__value main-table__column">
          <p>{{ item.id }}</p>
        </div>
        <div class="analytics-authors-table__value main-table__column">
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
        <div class="analytics-authors-table__value main-table__column">
          <div class="main-table-author">
            <div class="main-table-author__image">
              <img src="@/assets/images/users/avatar2.png" alt="user" />
            </div>
            <div class="main-table-author__info">
              <p class="main-table-author__name">
                {{ item.name }} {{ item.surname }}
              </p>
              <p class="main-table-author__tag">{{ item.tag }}</p>
              <ul class="main-table-author__list">
                <li
                  v-for="role in item.roles"
                  :key="role"
                  :style="[
                    role == 'Лидер мнений'
                      ? { background: '#CEE9FF' }
                      : { background: '#E2E2E2' },
                  ]"
                >
                  <p>{{ role }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="analytics-authors-table__value main-table__column">
          <p>{{ item.lastActive }}</p>
        </div>
        <div
          class="analytics-authors-table__value main-table__column"
          @click="sort = 'publications'"
        >
          <p>{{ item.publications.length }}</p>
        </div>
        <div class="analytics-authors-table__value main-table__column">
          <p>{{ item.reports }}</p>
        </div>
        <div class="analytics-authors-table__value main-table__column">
          <p>{{ item.humanComments }}</p>
        </div>
        <div
          class="analytics-authors-table__value main-table__column"
          @click="sort = 'comments'"
        >
          <p>{{ item.comments }}</p>
        </div>
        <div class="analytics-authors-table__value main-table__column">
          <p>{{ item.favourite.length }}</p>
        </div>
      </div>
    </div>
    <Paginator :items="filteredItems" @changePaginatedItems="changeData" />
  </div>
</template>
  <script>
import FilterArrowsIcon from "@/assets/images/icons/filterArrows.svg?inline";
import ArrowDownIcon from "@/assets/images/icons/arrowDown.svg?inline";
import CommentIcon from "@/assets/images/icons/comment.svg?inline";
import HeartIcon from "@/assets/images/icons/heart.svg?inline";
import Paginator from "@/components/main/Paginator";
import { mapGetters } from "vuex";
export default {
  props: {
    authors: {
      type: Array,
      defulat: () => [],
    },
  },
  components: {
    FilterArrowsIcon,
    ArrowDownIcon,
    CommentIcon,
    HeartIcon,
    Paginator,
  },
  data() {
    return {
      paginatedItems: [],
      sort: "",
      filteredItems: [],
      reverseSort: {
        id: false,
        availableCountries: false,
        name: false,
        lastActive: false,
        publications: false,
        reports: false,
        humanComments: false,
        comments: false,
        favourite: false,
      },
    };
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
    changeFilteredItems(array = this.authors) {
      this.filteredItems = array.filter((item) => {
        return (
          item.availableCountries.some((element) =>
            this.availableCountries.includes(element)
          ) && item.id != this.currentUser.id
        );
      });
    },
  },
  mounted() {
    this.changeFilteredItems(this.authors);
  },
  computed: {
    ...mapGetters({
      availableCountries: "Main/getAvailableCountries",
      currentUser: "Users/getCurrentUser",
    }),
  },
  watch: {
    authors(newValue) {
      this.changeFilteredItems(newValue);
    },
    availableCountries() {
      this.changeFilteredItems(this.authors);
    },
  },
};
</script>
  <style lang="scss">
.analytics-authors-table {
  &__top {
    background: #b90c0c;
    color: #fff;
  }
  &__row {
    display: grid;
    grid-template-columns: 2fr 9fr 8fr 5fr 5fr 4fr 2fr 4fr 2fr;
    justify-items: center;
    align-items: center;
  }
  &__column {
    height: 100%;
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__parameter {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    column-gap: 10px;
    p {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 700;
    }
  }
  &__icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
  }
  &__value {
    color: #231f20;
    font-weight: 500;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    &__parameter {
      column-gap: 8px;
      font-size: 14px;
    }
    &__row {
      grid-template-columns: 2fr 4fr 6fr 5fr 5fr 4fr 2fr 4fr 2fr;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1600px) {
    &__parameter {
      column-gap: 8px;
      p {
        font-size: 14px;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__row {
      grid-template-columns: 2fr 3fr 6fr 4fr 4fr 3fr 2fr 3fr 2fr;
    }
  }
}
</style>