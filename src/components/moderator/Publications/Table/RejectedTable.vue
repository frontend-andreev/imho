<template>
  <div class="publications-rejected-table main-content">
    <div class="publications-rejected-table__top main-table_white">
      <div class="publications-rejected-table__row">
        <div class="publications-rejected-table__parameter main-table__column">
          <p>Id</p>
        </div>
        <div class="publications-rejected-table__parameter main-table__column">
          <p>Заголовок</p>
        </div>
        <div class="publications-rejected-table__parameter main-table__column">
          <p>Автор</p>
        </div>
        <div class="publications-rejected-table__parameter main-table__column">
          <p>Отклонено</p>
        </div>
        <div class="publications-rejected-table__parameter main-table__column">
          <p>Причина</p>
          <FilterArrowsIcon class="publications-rejected-table__icon" />
        </div>
        <div class="publications-rejected-table__parameter main-table__column">
          <p>Модератор</p>
        </div>
      </div>
    </div>
    <div class="publications-rejected-table__body">
      <router-link
        class="publications-rejected-table__row"
        v-for="item in paginatedItems"
        :key="item.id"
        :to="{ name: 'PublicationsArticle', params: { id: item.id } }"
      >
        <div class="publications-rejected-table__value main-table__column">
          <p>{{ item.id.toLocaleString() }}</p>
        </div>
        <div class="publications-rejected-table__value main-table__column">
          <p>{{ item.title }}</p>
        </div>
        <div class="publications-rejected-table__value main-table__column">
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
        <div class="publications-rejected-table__value main-table__column">
          <p>{{ new Date(item.dateOfRejected).toLocaleDateString() }}</p>
        </div>
        <div class="publications-rejected-table__value main-table__column">
          <p>{{ item.reason }}</p>
        </div>
        <div class="publications-rejected-table__value main-table__column">
          <div class="publications-rejected-table__moderator">
            <img src="@/assets/images/users/avatar1.png" alt="" />
            <p>
              {{ UserById(item.moderId) ? UserById(item.moderId).name : {} }}
              {{ UserById(item.moderId) ? UserById(item.moderId).surname : {} }}
            </p>
          </div>
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
import FilterArrowsIcon from "@/assets/images/icons/filterArrows.svg?inline";
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
    FilterArrowsIcon,
  },
  computed: {
    ...mapGetters({
      getAuthor: "Main/getAuthorById",
      getRange: "Main/getRange",
      CurrentUser: "Users/getCurrentUser",
      UserById: "Users/getUserById",
    }),
    filteredPublications() {
      return this.publications.filter((item) => item.status == "rejected");
    },
  },
  methods: {
    changeData(data) {
      this.paginatedItems = data;
    },
    changePeriod() {
      this.$store.commit(
        "Main/changeRangeForPeriod",
        this.minmax(this.publications, "publish")
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
};
</script>
    <style lang="scss">
.publications-rejected-table {
  &__top {
    text-transform: uppercase;
    background: #b90c0c;
  }
  &__parameter p {
    color: #fff !important;
    font-weight: 700;
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 10fr 4fr 2fr 5fr 2fr;
    p {
      color: #353132;
    }
  }
  &__value {
    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
  &__icon {
    margin-left: 4px;
  }
  &__date {
    padding: 2px 8px;
    font-weight: 700;
    font-size: 12px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    &:first-child {
      margin-right: 8px;
    }
  }
  &__type {
    margin-right: 0px;
  }
  &__moderator {
    display: flex;
    align-items: center;
    p {
      font-size: 11px;
      margin-left: 4px;
      text-align: left;
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    &__row {
      grid-template-columns: 1fr 7fr 4fr 2fr 3fr 2fr;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__row {
      grid-template-columns: 1fr 7fr 4fr 2fr 3fr 2fr;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__row {
      grid-template-columns: 1fr 4fr 4fr 2fr 3fr 2fr;
    }
    &__moderator {
      img {
        width: 24px;
        height: 24px;
        p {
          font-size: 8px !important;
        }
      }
    }
  }
}
</style>