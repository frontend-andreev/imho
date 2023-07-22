<template>
  <div class="publications-new-table main-content">
    <div class="publications-new-table__top main-table_white">
      <div class="publications-new-table__row">
        <div class="publications-new-table__parameter main-table__column">
          <p>Id</p>
        </div>
        <div class="publications-new-table__parameter main-table__column">
          <p>Заголовок</p>
        </div>
        <div class="publications-new-table__parameter main-table__column">
          <p>Страны</p>
        </div>
        <div class="publications-new-table__parameter main-table__column">
          <p>Автор</p>
        </div>
        <div class="publications-new-table__parameter main-table__column">
          <p>Опубликовать</p>
        </div>
        <div class="publications-new-table__parameter main-table__column">
          <p>Создано</p>
        </div>
      </div>
    </div>
    <div class="publications-new-table__body">
      <router-link
        class="publications-new-table__row"
        v-for="item in paginatedItems"
        :key="item.id"
        :to="{ name: 'PublicationsArticle', params: { id: item.id } }"
      >
        <div class="publications-new-table__value main-table__column">
          <p>{{ item.id.toLocaleString() }}</p>
        </div>
        <div
          class="publications-new-table__value main-table__title main-table__column"
        >
          <p>{{ item.title }}</p>
        </div>
        <div class="publications-new-table__value main-table__column">
          <ul class="main-table__list main-table__list_direction">
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
        <div
          class="publications-new-table__value main-table__column main-table__column_start"
        >
          <div class="main-table-author">
            <div class="main-table-author__image">
              <img src="@/assets/images/users/avatar2.png" alt="user" />
            </div>
            <div class="main-table-author__info">
              <p class="main-table-author__name">
                {{
                  getAuthor(item.authorId) ? getAuthor(item.authorId).name : ""
                }}
                {{
                  getAuthor(item.authorId)
                    ? getAuthor(item.authorId).surname
                    : ""
                }}
              </p>
              <p class="main-table-author__tag">
                {{
                  getAuthor(item.authorId) ? getAuthor(item.authorId).tag : ""
                }}
              </p>
              <ul class="main-table-author__list">
                <li
                  v-for="role in getAuthor(item.authorId)
                    ? getAuthor(item.authorId).roles
                    : []"
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
        <div class="publications-new-table__value main-table__column">
          <p>
            {{ new Date(item.publish).toLocaleDateString() }}
            {{ new Date(item.publish).toLocaleTimeString().slice(0, -3) }}
          </p>
        </div>
        <div class="publications-new-table__value main-table__column">
          <p>{{ new Date(item.created).toLocaleDateString() }}</p>
        </div>
      </router-link>
    </div>
    <Paginator
      :items="filteredPublications"
      @changePaginatedItems="changeData"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Paginator from "@/components/main/Paginator";
export default {
  props: {
    publications: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      paginatedItems: [],
    };
  },
  mounted() {
    this.changePeriod();
  },
  components: {
    Paginator,
  },
  computed: {
    ...mapGetters({
      getAuthor: "Main/getAuthorById",
      getRange: "Main/getRange",
      CurrentUser: "Users/getCurrentUser",
      getTextForPeriod: "Main/getTextForPeriod",
      availableCountries: "Main/getAvailableCountries",
    }),
    filteredPublications() {
      return this.publications.filter(
        (item) =>
          item.status == "undefined" &&
          item.availableCountries.some((element) =>
            this.availableCountries.includes(element)
          )
        // new Date(item[this.getTextForPeriod]).getTime() >=
        //   this.getRange.start &&
        // new Date(item[this.getTextForPeriod]).getTime() <=
        //   this.getRange.end &&
        // item.availableCountries.some((e) =>
        //   this.CurrentUser.availableCountries.includes(e)
        // )
      );
    }
  },
  methods: {
    changeData(data) {
      this.paginatedItems = data;
    },
    changePeriod() {
      this.$store.commit(
        "Main/changeRangeForPeriod",
        this.minmax(this.publications, this.getTextForPeriod)
      );
    },
    minmax(someArrayOfObjects, someKey) {
      const values = someArrayOfObjects.map((value) =>
        new Date(value[someKey]).getTime()
      );
      return {
        start: Math.min.apply(null, values),
        end: Math.max.apply(null, values),
      };
    },
  },
  watch: {
    getTextForPeriod() {
      this.changePeriod();
    },
  },
};
</script>
<style lang="scss">
.publications-new-table {
  &__top {
    text-transform: uppercase;
    background: #b90c0c;
  }
  &__parameter {
    color: #fff !important;
    font-weight: 700;
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 13fr 3fr 5fr 3fr 2fr;
    color: #353132;
  }
  &__value {
    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1600px) {
    &__row {
      grid-template-columns: 1fr 9fr 2fr 5fr 3fr 2fr;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__row {
      grid-template-columns: 1fr 5fr 2fr 5fr 3fr 2fr;
    }
    &__moder img {
      width: 24px;
    }
  }
}
</style>