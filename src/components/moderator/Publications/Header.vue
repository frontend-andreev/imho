<template>
  <div class="moder-publications-top">
    <div class="moder-publications-top__content">
      <div class="moder-publications-top__block">
        <div class="main-filter main-color">
          <div class="main-period__button">
            <select name="color" v-model="textForPeriod">
              <option value="publish">Опубликовано</option>
              <option value="created">Создано</option>
            </select>
          </div>

          <div class="main-filter__block">
            <Period
              :layout="
                $route.name.includes('Calendar')
                  ? { rows: 3, columns: 4 }
                  : { rows: 1, column: 1 }
              "
            />
          </div>
        </div>
      </div>
      <div
        class="moder-publications-top__block moder-publications-top__block_scroll"
      >
        <div class="main-filter">
          <div class="main-filter__block">
            <router-link
              :to="{
                name: ~$route.name.indexOf('ModeratorPublicationsTable')
                  ? 'ModeratorPublicationsTableNew'
                  : 'ModeratorPublicationsCalendarNew',
              }"
              class="main-filter__button"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModeratorPublicationsTableNew' ||
                  $route.name == 'ModeratorPublicationsCalendarNew',
              }"
            >
              Новый
            </router-link>
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{
                name: ~$route.name.indexOf('ModeratorPublicationsTable')
                  ? 'ModeratorPublicationsTableApproved'
                  : 'ModeratorPublicationsCalendarApproved',
              }"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModeratorPublicationsTableApproved' ||
                  $route.name == 'ModeratorPublicationsCalendarApproved',
              }"
              class="main-filter__button"
              >Одобрен</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{
                name: ~$route.name.indexOf('ModeratorPublicationsTable')
                  ? 'ModeratorPublicationsTableRejected'
                  : 'ModeratorPublicationsCalendarRejected',
              }"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModeratorPublicationsTableRejected' ||
                  $route.name == 'ModeratorPublicationsCalendarRejected',
              }"
              class="main-filter__button"
              >Не одобрен</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{
                name: ~$route.name.indexOf('ModeratorPublicationsTable')
                  ? 'ModeratorPublicationsTableArchive'
                  : 'ModeratorPublicationsCalendarArchive',
              }"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModeratorPublicationsTableArchive' ||
                  $route.name == 'ModeratorPublicationsCalendarArchive',
              }"
              class="main-filter__button"
              >Архив</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{
                name: ~$route.name.indexOf('ModeratorPublicationsTable')
                  ? 'ModeratorPublicationsTableEditorial'
                  : 'ModeratorPublicationsCalendarEditorial',
              }"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModeratorPublicationsTableEditorial' ||
                  $route.name == 'ModeratorPublicationsCalendarEditorial',
              }"
              class="main-filter__button"
              >Выбор редакции</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{
                name: ~$route.name.indexOf('ModeratorPublicationsTable')
                  ? 'ModeratorPublicationsTableHot'
                  : 'ModeratorPublicationsCalendarHot',
              }"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModeratorPublicationsTableHot' ||
                  $route.name == 'ModeratorPublicationsCalendarHot',
              }"
              class="main-filter__button"
              >Горячие новости</router-link
            >
          </div>
          <div class="main-filter__block">
            <router-link
              :to="{
                name: ~$route.name.indexOf('ModeratorPublicationsTable')
                  ? 'ModeratorPublicationsTableAll'
                  : 'ModeratorPublicationsCalendarAll',
              }"
              :class="{
                'main-filter__button_active':
                  $route.name == 'ModeratorPublicationsTableAll' ||
                  $route.name == 'ModeratorPublicationsCalendarAll',
              }"
              class="main-filter__button"
              >Все</router-link
            >
          </div>
        </div>
      </div>
      <div class="moder-publications-top__block">
        <div class="moder-publications-top__filter">
          <button><RefreshIcon /></button>
          <button><PenIcon /></button>
          <button><DotsIcon /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Period from "@/components/main/Period.vue";
// import ArrowDownIcon from "@/assets/images/icons/arrowDown.svg?inline";
import PenIcon from "@/assets/images/icons/pen.svg?inline";
import RefreshIcon from "@/assets/images/icons/refresh.svg?inline";
import DotsIcon from "@/assets/images/icons/dots.svg?inline";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      textForPeriod: "publish",
    };
  },
  components: {
    Period,
    // ArrowDownIcon,
    PenIcon,
    RefreshIcon,
    DotsIcon,
  },
  mounted() {
    let scroll = document.querySelector(
      ".moder-publications-top__block_scroll"
    );
    let child = document.querySelector(
      ".moder-publications-top__block .main-filter .main-filter__button_active"
    );
    if (child.getBoundingClientRect().right > this.Container.right) {
      scroll.scrollBy(
        child.getBoundingClientRect().right - this.Container.right,
        0
      );
    }
  },
  computed: {
    ...mapGetters({
      Container: "Main/getSizeOfContainer",
    }),
  },
  watch: {
    textForPeriod(newValue) {
      this.$store.commit("Main/changeTextForPeriod", newValue);
    },
  },
};
</script>
<style lang="scss">
.moder-publications-top {
  margin-bottom: 20px;
  &__content {
    display: flex;
    // justify-content: space-between;
  }
  &__block {
    display: flex;
    align-items: center;
    .main-filter {
      margin-right: 40px;
    }
    &:last-child {
      margin-left: auto;
    }
  }
  &__icon {
    path {
      fill: #231f20;
    }
    margin-left: 5px;
  }
  &__filter {
    display: flex;
    align-items: center;
    button {
      display: flex;
      align-items: center;
    }
    button:not(:last-child) {
      margin-right: 10px;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    &__block {
      .main-filter {
        column-gap: 8px;
        margin-right: 6px;
      }
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      row-gap: 16px;
    }
    &__block {
      align-items: start;
      &:first-child {
        grid-row: 1;
        grid-column: 1;
      }
      &:nth-child(2) {
        grid-column: 1 / 3;
        .main-filter {
          margin-right: 0;
        }
      }
      &:last-child {
        grid-row: 1;
        grid-column: 2;
      }
    }
  }
  @media screen and (min-width: 500px) and (max-width: 1280px) {
    &__block {
      &:nth-child(2) {
        justify-content: center;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__content {
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    }
    &__filter {
      svg {
        width: 13px;
        height: 13px;
      }
      button:not(:last-child) {
        margin-right: 5px;
      }
    }
    &__block:first-child {
      .main-filter {
        margin-right: 0;
      }
    }
    &__block {
      &:nth-child(2) {
        grid-row: 2;
        grid-column: 1 / 3;
        .main-filter {
          margin-top: 8px;
          min-width: 488px;
          margin-right: 0;
          &__button {
            &::after {
              height: 18px;
              right: -10px;
            }
          }
        }
      }
    }
    &__button {
      padding: 2px 4px;
      max-width: 56px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      select {
        max-width: 50px;
        font-size: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>