<template>
  <div class="publications-all-table main-content">
    <div class="publications-all-table__top main-table_white">
      <div class="publications-all-table__row">
        <div class="publications-all-table__parameter main-table__column">
          <p>Id</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Заголовок</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Автор</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Создано</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Страны</p>
          <FilterArrowsIcon class="publications-all-table__icon" />
        </div>
        <div
          class="publications-all-table__parameter main-table__column"
        >
          <p>Дата публ.</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Статус</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Причина</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Тип</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p>Модератор</p>
        </div>
        <div class="publications-all-table__parameter main-table__column">
          <p></p>
        </div>
      </div>
    </div>
    <div class="publications-all-table__body">
      <router-link
        class="publications-all-table__row"
        v-for="item in paginatedItems"
        :key="item.id"
        :to="{ name: 'PublicationsArticle', params: { id: item.id } }"
      >
        <div class="publications-all-table__value main-table__column">
          <p>{{ item.id.toLocaleString() }}</p>
        </div>
        <div class="publications-all-table__value main-table__column">
          <p>{{ item.title }}</p>
        </div>
        <div class="publications-all-table__value main-table__column">
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
        <div class="publications-all-table__value main-table__column">
          <p>{{ new Date(item.created).toLocaleDateString() }}</p>
        </div>
        <div class="publications-all-table__value main-table__column">
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
        <div class="publications-all-table__value main-table__column">
          <p>
            {{ new Date(item.publish).toLocaleDateString() }}
            {{ new Date(item.publish).toLocaleTimeString().slice(0, -3) }}
          </p>
        </div>
        <div class="publications-all-table__value main-table__column">
          <p
            v-if="item.status == 'approved'"
            class="publications-all-table__status publications-all-table__status_green"
          >
            Одобрено
          </p>
          <p
            v-else-if="item.status == 'rejected'"
            class="publications-all-table__status publications-all-table__status_red"
          >
            Не одобрено
          </p>
          <p
            v-else-if="item.status == 'undefined'"
            class="publications-all-table__status publications-all-table__status_purple"
          >
            Новый
          </p>
        </div>
        <div class="publications-all-table__value main-table__column">
          <p>
            {{ item.reason ? item.reason : "-" }}
          </p>
        </div>
        <div class="publications-all-table__value main-table__column">
          <ul class="main-table__list main-table__list_direction">
            <li v-for="elem in item.type" :key="elem">
              <div class="main-table__icon publications-approved-table__type">
                <img
                  :src="
                    require(`@/assets/images/icons/${elem.toLowerCase()}.svg`)
                  "
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="publications-all-table__value main-table__column">
          <div class="publications-all-table__moderator">
            <img src="@/assets/images/users/avatar1.png" alt="" />
            <p>
              {{ UserById(item.moderId) ? UserById(item.moderId).name : {} }}
              {{ UserById(item.moderId) ? UserById(item.moderId).surname : {} }}
            </p>
          </div>
        </div>
        <div class="publications-all-table__value main-table__column">
          <ArchiveIcon />
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
import ArchiveIcon from "@/assets/images/icons/archive.svg?inline";
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
  components: {
    Paginator,
    FilterArrowsIcon,
    ArchiveIcon,
  },
  computed: {
    ...mapGetters({
      getAuthor: "Main/getAuthorById",
      getRange: "Main/getRange",
      UserById: "Users/getUserById",
      availableCountries: "Main/getAvailableCountries",
    }),
    filteredPublications() {
      return this.publications.filter((item) => {
        return item.availableCountries.some((element) =>
          this.availableCountries.includes(element)
        );
      });
    },
  },
  methods: {
    changeData(data) {
      this.paginatedItems = data;
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
.publications-all-table {
  &__top {
    text-transform: uppercase;
    background: #b90c0c;
  }
  &__parameter {
    color: #fff;
    font-weight: 700 !important;
  }
  &__row {
    display: grid;
    grid-template-columns: 2fr 7fr 8fr 4fr 4fr 5fr 4fr 7fr 2fr 4fr 2fr;
    color: #353132;
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
  &__status {
    text-transform: uppercase;
    font-weight: 700 !important;
    &_green {
      color: #009688;
    }
    &_red {
      color: #e11b1b;
    }
    &_purple {
      color: #7b61ff;
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    &__row {
      grid-template-columns: 1fr 6fr 5fr 3fr 2fr 3fr 2fr 3fr 1fr 3fr 1fr;
    }
    &__icon {
      display: none;
    }
    &__value p {
      font-size: 10px;
    }
    &__parameter {
      p {
        font-size: 10px;
      }
    }
    &__moderator p {
      font-size: 10px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__icon {
      display: none;
    }
    &__row {
      grid-template-columns: 1fr 7fr 8fr 3fr 3fr 4fr 4fr 7fr 2fr 4fr 2fr;
    }
    &__moderator {
      img {
        width: 24px;
        height: 24px;
      }
      p {
        font-size: 8px !important;
      }
    }
  }
}
</style>