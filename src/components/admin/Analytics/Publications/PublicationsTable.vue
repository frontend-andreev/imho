<template>
  <div class="analytics-publications-table main-content">
    <div class="analytics-publications-table__top main-table_white">
      <div class="analytics-publications-table__row">
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('title', (a) => a.toUpperCase()))"
        >
          <p>Название</p>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('id', parseInt))"
        >
          <p>Id</p>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('author', (a) => a.toUpperCase()))"
        >
          <p>Автор</p>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="
            filteredItems.sort(sort_by('availableCountries', (a) => a.length))
          "
        >
          <p>Страна</p>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('views', parseInt))"
        >
          <div class="analytics-publications-table__icon">
            <ViewsIcon />
          </div>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('users', parseInt))"
        >
          <div class="analytics-publications-table__icon">
            <UsersIcon />
          </div>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('fire', parseInt))"
        >
          <div class="analytics-publications-table__icon">
            <FireIcon />
          </div>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('comments', parseInt))"
        >
          <div class="analytics-publications-table__icon">
            <CommentsIcon />
          </div>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('likes', parseInt))"
        >
          <div class="analytics-publications-table__icon">
            <HeartIcon />
          </div>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('share', parseInt))"
        >
          <div class="analytics-publications-table__icon">
            <ShareIcon />
          </div>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
        <div
          class="analytics-publications-table__parameter main-table__column"
          @click="filteredItems.sort(sort_by('later', parseInt))"
        >
          <div class="analytics-publications-table__icon">
            <ClockIcon />
          </div>
          <div class="analytics-publications-table__icon">
            <FilterArrowsIcon />
          </div>
        </div>
      </div>
    </div>
    <div class="analytics-publications-table__body">
      <div
        class="analytics-publications-table__row"
        v-for="item in filteredItems"
        :key="item.id"
      >
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.title }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.id.toLocaleString() || "-" }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <div class="main-table-author">
            <div class="main-table-author__image">
              <img src="@/assets/images/users/avatar2.png" alt="user" />
            </div>
            <div class="main-table-author__info">
              <p class="main-table-author__name">
                {{ getUser(item.authorId) ? getUser(item.authorId).name : "" }}
                {{
                  getUser(item.authorId) ? getUser(item.authorId).surname : ""
                }}
              </p>
              <p class="main-table-author__tag">
                {{ getUser(item.authorId) ? getUser(item.authorId).tag : "" }}
              </p>
              <ul class="main-table-author__list">
                <li
                  v-for="role in getUser(item.authorId)
                    ? getUser(item.authorId).roles
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
        <div class="analytics-publications-table__value main-table__column">
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
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.views.toLocaleString() || "-" }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.users.toLocaleString() || "-" }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.fire.toLocaleString() || "-" }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.comments.toLocaleString() || "-" }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.likes.toLocaleString() || "-" }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.share.toLocaleString() || "-" }}</p>
        </div>
        <div class="analytics-publications-table__value main-table__column">
          <p>{{ item.later.toLocaleString() || "-" }}</p>
        </div>
      </div>
    </div>
    <Paginator :items="filteredItems" @changePaginatedItems="changeData" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import { mapActions } from "vuex";
import Paginator from "@/components/main/Paginator";
import FilterArrowsIcon from "@/assets/images/icons/filterArrows.svg?inline";
import ViewsIcon from "@/assets/images/icons/views.svg?inline";
import UsersIcon from "@/assets/images/icons/whiteUsers.svg?inline";
import FireIcon from "@/assets/images/icons/fire.svg?inline";
import CommentsIcon from "@/assets/images/icons/comment.svg?inline";
import HeartIcon from "@/assets/images/icons/heart.svg?inline";
import ShareIcon from "@/assets/images/icons/share.svg?inline";
import ClockIcon from "@/assets/images/icons/clock.svg?inline";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filteredItems: [],
      authors: [],
      reverseSort: {
        title: false,
        id: false,
        author: false,
        availableCountries: false,
        views: false,
        users: false,
        fire: false,
        comments: false,
        likes: false,
        share: false,
        later: false,
      },
    };
  },
  components: {
    FilterArrowsIcon,
    ViewsIcon,
    UsersIcon,
    FireIcon,
    CommentsIcon,
    HeartIcon,
    ShareIcon,
    ClockIcon,
    Paginator,
  },
  mounted() {
    this.loadFilteredItems(this.items);
  },
  methods: {
    loadFilteredItems(array = this.items) {
      this.filteredItems = array.filter((item) => {
        return item.availableCountries.some((element) => {
          if (this.availableCountries.includes(element)) {
            this.authors.push(this.getUserById(item.authorId));
            return true;
          }
        });
      });
    },
    changeData(data) {
      this.paginatedItems = data;
    },
    getUser(id) {
      return this.getAuthors.find((x) => x.id == id);
    },
    sort_by(field, primer) {
      let reverse = !this.reverseSort[field];
      const key = primer
        ? (x) => {
            if (field == "author") {
              return primer(this.authors.find((e) => e.id == x.authorId).name);
            }
            return primer(x[field]);
          }
        : (x) => {
            if (field == "author") {
              return this.authors.find((e) => e.id == x.authorId).name;
            }
            return x[field];
          };
      this.reverseSort[field] = reverse;

      reverse = !reverse ? 1 : -1;
      return function (a, b) {
        return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
      };
    },
    // ...mapActions("Main", ["getUserById"]),
  },
  computed: {
    ...mapGetters({
      availableCountries: "Main/getAvailableCountries",
      getUserById: "Main/getAuthorById",
    }),
    getAuthors() {
      return this.authors;
    },
  },
  watch: {
    publications(newValue) {
      this.loadFilteredItems(newValue);
    },
    availableCountries() {
      this.loadFilteredItems();
    },
  },
};
</script>
<style lang="scss">
.analytics-publications-table {
  &__top {
    background: #b90c0c;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 8px 8px 0 0;
  }
  &__parameter {
    cursor: pointer;
    user-select: none;
  }
  &__row {
    display: grid;
    grid-template-columns: 6fr 1fr 4fr 2fr repeat(7, 1fr);
    align-items: center;
  }
  &__icon {
    display: flex;
    align-items: center;
    margin-left: 9px;
  }
  &__value {
    font-size: 14px;
    font-weight: 500;
    text-align-last: left;
    p {
      text-align: justify;
      line-height: 21px;
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    &__row {
      grid-template-columns: 4fr 1fr 3fr 2fr repeat(7, 1fr);
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__row {
      grid-template-columns: 4fr 1fr 4fr 2fr repeat(7, 1fr);
    }
    &__value p {
      line-height:normal;
    }
  }
}
</style>