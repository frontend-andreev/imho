<template>
  <div
    class="moderator-page__top"
    :class="{
      'main-line': $route.name == 'ModeratorPublicationsArticle',
    }"
  >
    <h2 class="moderator-page__title">Модерация</h2>
    <ModeratorSearch v-if="$route.name != 'ModeratorPublicationsArticle'" />
    <div
      class="main-filter moderator-page__filter main-color"
      v-if="$route.name != 'ModeratorPublicationsArticle'"
    >
      <router-link
        :to="{ name: 'ModeratorPublicationsTableNew' }"
        class="main-filter__button main-filter__button_long"
        :class="{
          'main-filter__button_active': ~$route.name.indexOf(
            'ModeratorPublicationsTable'
          ),
        }"
      >
        Таблица
      </router-link>
      <router-link
        :to="{ name: 'ModeratorPublicationsCalendarNew' }"
        class="main-filter__button main-filter__button_long"
        :class="{
          'main-filter__button_active': ~$route.name.indexOf(
            'ModeratorPublicationsCalendar'
          ),
        }"
      >
        Календарь
      </router-link>
    </div>
    <div
      class="main-submit"
      v-if="$route.name == 'ModeratorPublicationsArticle'"
    >
      <button>Сохранить</button>
    </div>
  </div>
</template>
<script>
import ModeratorSearch from "@/components/moderator/Search.vue";
export default {
  components: {
    ModeratorSearch,
  },
};
</script>
  <style lang="scss">
.moderator-page {
  &__content {
    padding-bottom: 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #231f20;
  }
  &__filter {
    .main-filter__button:last-child {
      &::after {
        display: none;
      }
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__title {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__top {
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    }
    &__title {
      font-size: 16px;
    }
    &__filter {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .main-filter__button {
        text-align: center;
      }
    }
  }
}
</style>