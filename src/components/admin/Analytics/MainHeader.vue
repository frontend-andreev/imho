<template>
  <div
    class="admin-analytics__header"
    :class="{ 'admin-analytics__header_long': getQuery }"
  >
    <div class="main-filter main-filter_above admin-analytics__filter">
      <div class="admin-analytics__nav">
        <div
          class="main-filter__block"
          :class="{
            'main-filter__block_active':
              getNamePage == 'AdminAnalyticsAuthorsPage',
          }"
        >
          <router-link
            :to="{
              name: 'AdminAnalyticsAuthorsPage',
              query: { filter: 'authors' },
            }"
            class="main-filter__button"
            :class="{ 'main-filter__button_active': getQuery == 'authors' }"
            >Автор</router-link
          >
          <router-link
            v-if="getNamePage == 'AdminAnalyticsAuthorsPage'"
            :to="{
              query: { filter: 'geography' },
            }"
            class="main-filter__button"
            :class="{
              'main-filter__button_active': getQuery == 'geography',
            }"
            >География и Демография</router-link
          >
        </div>
        <div
          class="main-filter__block"
          :class="{
            'main-filter__block_active':
              getNamePage == 'AdminAnalyticsPublicationsPage',
          }"
        >
          <router-link
            :to="{
              name: 'AdminAnalyticsPublicationsPage',
              query: { filter: 'publications' },
            }"
            class="main-filter__button"
            :class="{
              'main-filter__button_active': getQuery == 'publications',
            }"
            >Публикации</router-link
          >
          <router-link
            v-if="getNamePage == 'AdminAnalyticsPublicationsPage'"
            :to="{
              query: { filter: 'themes' },
            }"
            class="main-filter__button"
            :class="{
              'main-filter__button_active': getQuery == 'themes',
            }"
            >Тема и теги</router-link
          >
        </div>
        <div
          class="main-filter__block"
          :class="{
            'main-filter__block_active':
              getNamePage == 'AdminAnalyticsUsersPage',
          }"
        >
          <router-link
            :to="{
              name: 'AdminAnalyticsUsersPage',
              query: { filter: 'users' },
            }"
            class="main-filter__button"
            :class="{ 'main-filter__button_active': getQuery == 'users' }"
            >Пользователи</router-link
          >
          <router-link
            v-if="getNamePage == 'AdminAnalyticsUsersPage'"
            :to="{
              query: { filter: 'geography' },
            }"
            class="main-filter__button"
            :class="{
              'main-filter__button_active': getQuery == 'geography',
            }"
            >География и Демография</router-link
          >
          <router-link
            v-if="getNamePage == 'AdminAnalyticsUsersPage'"
            :to="{
              query: { filter: 'activity' },
            }"
            class="main-filter__button"
            :class="{
              'main-filter__button_active': getQuery == 'activity',
            }"
            >Активность</router-link
          >
        </div>
      </div>
    </div>
    <div class="admin-analytics__filter">
      <div class="main-filter">
        <div class="main-filter__block">
          <button class="main-filter__button">Неделя</button>
        </div>
        <div class="main-filter__block">
          <button class="main-filter__button">Месяц</button>
        </div>
        <div class="main-filter__block">
          <button class="main-filter__button">Год</button>
        </div>
        <div class="main-filter__block">
          <button class="main-filter__button main-filter__button_active">
            Все
          </button>
        </div>
      </div>
    </div>
    <div class="admin-analytics__filter">
      <div class="main-filter main-filter_margin">
        <Period />
      </div>
    </div>
    <div class="admin-analytics__filter">
      <div class="admin-analytics__events">
        <div class="admin-analytics__icon">
          <RefreshIcon />
        </div>
        <div class="admin-analytics__icon">
          <DotsIcon />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RefreshIcon from "@/assets/images/icons/refresh.svg?inline";
import DotsIcon from "@/assets/images/icons/dots.svg?inline";
import Period from "@/components/main/Period.vue";
import { mapGetters } from "vuex";
export default {
  props: {
    current: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  components: {
    RefreshIcon,
    DotsIcon,
    Period,
  },
  mounted() {
    let scroll = document.querySelector(
      ".admin-analytics__header_long .main-filter_above"
    );
    let child = document.querySelector(
      ".admin-analytics__nav .main-filter__button_active"
    );
    if (child && scroll) {
      if (child.getBoundingClientRect().right > this.Container.right) {
        scroll.scrollBy(
          child.getBoundingClientRect().right - this.Container.right,
          0
        );
      }
    }
  },
  computed: {
    getQuery() {
      return this.$route.query.filter || "";
    },
    getNamePage() {
      return this.$route.name;
    },
    ...mapGetters({
      Container: "Main/getSizeOfContainer",
    }),
  },
};
</script>
<style lang="scss">
.admin-analytics {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__nav {
    display: flex;
    align-items: center;
  }
  &__events {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  &__icon svg {
    height: 24px;
    width: 24px;
  }
  &__nav {
    column-gap: 8px;
    .main-filter__block_active {
      margin-right: 10px;
      width: auto;
      .main-filter__button {
        &::after {
          right: 0;
        }
        &_active::after {
          right: -5px;
        }
        &:last-child::after {
          right: -11px;
        }
      }
    }
  }
  &__nav .main-filter__button::after {
    right: -8px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    &__header {
      display: grid;
      grid-template-columns: 2fr 1fr;
      row-gap: 16px;
    }
    &__filter {
      display: inline-flex;
      &:first-child,
      &:nth-child(3) {
        justify-self: start;
      }
      &:nth-child(2),
      &:nth-child(4) {
        justify-self: flex-end ;
      }
      .main-filter_margin {
        margin: 0 !important;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__nav {
      .main-filter_margin {
        margin: 0;
      }
    }
    &__filter {
      .main-filter_margin {
        margin: 0;
      }
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__header {
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
      justify-items: start;
      justify-content: start;
      row-gap: 15px;
      &_long {
        grid-template: repeat(2, 1fr) / repeat(3, 1fr);
        column-gap: 10px;
      }
    }
    &__filter {
      .main-filter_margin {
        margin: 0;
      }
      &:nth-child(2),
      &:nth-child(4) {
        justify-self: end;
      }
    }
    &__header_long {
      .admin-analytics__filter {
        &:first-child {
          grid-column: 1 / 4;
          justify-self: center;
        }
        &:nth-child(2) {
          justify-self: start;
        }
        &:nth-child(3) {
          justify-self: center;
        }
      }
    }
    &__icon {
      svg {
        width: 26px;
        height: 26px;
      }
      display: flex;
      align-items: center;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__header {
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(2, 1fr);
      justify-items: start;
      row-gap: 15px;
    }
    &__filter {
      &:first-child {
        .main-filter__button {
          white-space: nowrap;
        }
      }
      &:first-child,
      &:nth-child(2) {
        grid-column: 1 / 3;
        justify-self: center;
      }
      &:last-child {
        justify-self: end;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__filter:first-child {
      .main-filter__block {
        display: flex;
      }
    }
  }
}
</style>