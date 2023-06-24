<template>
  <div>
    <h4 :style="{ 'text-align': 'center', 'font-size': '20px' }">Эта страница в разработке</h4>
  </div>
</template>
<!-- <template>
  <div class="analytics-activity-table main-table">
    <div class="analytics-activity-table__top">
      <div class="analytics-activity-table__row">
        <div class="analytics-activity-table__parameter main-table__column">
          <p>№</p>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div class="analytics-activity-table__parameter main-table__column">
          <p>Id</p>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div class="analytics-activity-table__parameter main-table__column">
          <p>Имя Фамилия</p>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div class="analytics-activity-table__parameter main-table__column">
          <p>Тип</p>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div class="analytics-activity-table__parameter main-table__column">
          <div class="analytics-activity-table__icon">
            <CommentIcon />
          </div>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div class="analytics-activity-table__parameter main-table__column">
          <p>E-mail</p>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div class="analytics-activity-table__parameter main-table__column">
          <p>Дата регистрации</p>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div class="analytics-activity-table__parameter main-table__column">
          <p>Активность</p>
          <div class="analytics-activity-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
      </div>
    </div>
    <div class="analytics-activity-table__body">
      <div
        class="analytics-activity-table__row"
        v-for="(item, index) in paginatedItems"
        :key="item.id"
      >
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ item.id }}</p>
        </div>
        <div class="analytics-activity-table__value main-table__column">
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
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ item.name}} {{ item.surname }}</p>
        </div>
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="analytics-activity-table__value main-table__column">
          <p>{{ index + 1 }}</p>
        </div>
      </div>
    </div>
    <Paginator :items="filteredItems" @changePaginatedItems="changeData" />
  </div>
</template>
<script>
import FilterArrowsIcon from "@/assets/images/icons/filterArrows.svg?inline";
import CommentIcon from "@/assets/images/icons/comment.svg?inline";
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
    };
  },
  components: {
    FilterArrowsIcon,
    CommentIcon,
    Paginator,
  },
  mounted() {
    this.changeFilteredItems();
  },
  methods: {
    changeFilteredItems(array = this.users) {
      this.filteredItems = array.filter((item) => {
        return item.availableCountries.some((element) =>
          this.availableCountries.includes(element)
        );
      });
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
      this.changeFilteredItems(newValue);
    },
    availableCountries() {
      this.changeFilteredItems();
    },
  },
};
</script> -->