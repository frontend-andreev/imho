<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top__content">
          <div class="header-top__block">
            <router-link
              :to="{ name: 'UserSettings' }"
              class="header-top__user"
            >
              <img
                :src="require('@/assets/images/users/avatar1.png')"
                alt="user"
                class="header-top__image"
              />
              <p class="header-top__name">{{ user.surname }} {{ user.name }}</p>
            </router-link>
          </div>
          <div class="header-top__block" v-if="Container.width > 632">
            <div class="header-top__filter">
              <ul
                class="header-top__list"
                v-if="user.roles.includes('администратор')"
              >
                <li
                  class="header-top__country"
                  :class="{
                    'header-top__country_active':
                      availableCountries.includes(item),
                  }"
                  @click="chooseCountrie(item)"
                  v-for="item in countries"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
              <ul class="header-top__list" v-else>
                <li
                  class="header-top__country header-top__country_active"
                  v-for="item in user.availableCountries"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
              <button
                class="header-top__select button-red"
                @click="chooseCountrie()"
                v-if="user.roles.includes('администратор')"
              >
                Выбрать все
              </button>
            </div>
            <div class="main-filter header-top__filter">
              <div class="main-filter__block">
                <router-link
                  :to="{ name: 'UserKpi', query: { period: 'week' } }"
                  :class="{
                    'main-filter__button_active': $route.name == 'UserKpi',
                  }"
                  class="main-filter__button"
                  >KPI</router-link
                >
              </div>
              <div class="main-filter__block">
                <router-link
                  :to="{ name: 'UserSettings' }"
                  :class="{
                    'main-filter__button_active': $route.name == 'UserSettings',
                  }"
                  class="main-filter__button"
                  >Настройки</router-link
                >
              </div>
            </div>
          </div>
          <div
            v-else
            class="header-top__block header-top-menu main-color"
            :class="{ active: burgerIsOpen }"
          >
            <div class="header-top-menu__content">
              <div class="header-top-menu__row main-line">
                <router-link
                  :to="{ name: 'UserSettings' }"
                  class="header-top__user"
                >
                  <img
                    :src="require('@/assets/images/users/avatar1.png')"
                    alt="user"
                    class="header-top__image"
                  />
                  <p class="header-top__name">
                    {{ user.surname }} {{ user.name }}
                  </p>
                </router-link>
                <div class="main-filter">
                  <div class="main-filter__block">
                    <router-link
                      :to="{ name: 'UserKpi', query: { period: 'week' } }"
                      :class="{
                        'main-filter__button_active': $route.name == 'UserKpi',
                      }"
                      class="main-filter__button"
                      >KPI</router-link
                    >
                  </div>
                  <div class="main-filter__block">
                    <router-link
                      :to="{ name: 'UserSettings' }"
                      :class="{
                        'main-filter__button_active':
                          $route.name == 'UserSettings',
                      }"
                      class="main-filter__button"
                      >Настройки</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="header-top-menu__row main-line">
                <div
                  class="header-top-menu__block header-top-menu__block_direction"
                >
                  <ul
                    class="header-top__list"
                    v-if="user.roles.includes('администратор')"
                  >
                    <li
                      class="header-top__country"
                      :class="{
                        'header-top__country_active':
                          availableCountries.includes(item),
                      }"
                      @click="chooseCountrie(item)"
                      v-for="item in countries"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                    <li>
                      <button
                        class="header-top__select button-red"
                        @click="chooseCountrie()"
                        v-if="user.roles.includes('администратор')"
                      >
                        Выбрать все
                      </button>
                    </li>
                  </ul>
                  <ul class="header-top__list" v-else>
                    <li
                      class="header-top__country header-top__country_active"
                      v-for="item in user.availableCountries"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="header-top-menu__row">
                <div class="header-top-menu__block">
                  <div class="header-top-menu__parameter">
                    <p><SunIcon /> Ночной режим</p>
                  </div>
                  <div class="header-top-menu__value">
                    <input
                      class="main-switch"
                      type="checkbox"
                      :checked="night"
                      @click="changeMode"
                    />
                  </div>
                </div>
              </div>
              <div class="header-top-menu__row">
                <button
                  class="header-top-menu__button button-white"
                  @click="logoutFunc"
                >
                  Выйти
                </button>
              </div>
            </div>
          </div>
          <div
            class="header-top__burger"
            v-if="Container.width <= 632"
            @click="burgerIsOpen = !burgerIsOpen"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-body">
      <div class="container">
        <div class="header-body__content">
          <div class="header-body__block">
            <router-link
              :to="{ name: 'AdminAnalyticsPage' }"
              class="header-body__button"
            >
              Аналитика <arrowDownIcon />
            </router-link>
          </div>
          <div class="header-body__block">
            <router-link
              :to="{ name: 'AdminEmployeesTable' }"
              v-if="user.roles.includes('администратор')"
              class="header-body__button"
              >Пользователи</router-link
            >
            <router-link
              :to="{ name: 'ModeratorPublicationsTableNew' }"
              class="header-body__button"
              >Модерация</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import arrowDownIcon from "@/assets/images/icons/arrowDown.svg?inline";
import SunIcon from "@/assets/images/icons/sun.svg?inline";

export default {
  data() {
    return {
      countries: [
        "RUS",
        "BLR",
        "LTU",
        "LAT",
        "KAZ",
        "EST",
        "UKR",
        "POL",
        "MDA",
      ],
      burgerIsOpen: false,
      night: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "Users/getCurrentUser", // Текущий пользователь
      availableCountries: "Main/getAvailableCountries", //Выбранные страны
      Container: "Main/getSizeOfContainer",
    }),
  },
  methods: {
    ...mapActions("Users", ["logout"]),
    chooseCountrie(item = this.countries) {
      this.$store.commit("Main/changeAvailableCountries", item);
    },
    logoutFunc() {
      this.logout();
    },
    changeMode() {
      this.night = !this.night;
      this.$store.commit("Main/changeMode", this.night);
    },
  },
  mounted() {
    this.night = JSON.parse(localStorage.getItem("mode"));

    document.addEventListener("click", (element) => {
      if (
        element.target.closest(".header-top-menu__content") == null &&
        element.target.closest(".header-top__burger") == null
      ) {
        this.burgerIsOpen = false;
      }
    });
  },
  components: {
    arrowDownIcon,
    SunIcon,
  },
};
</script>
<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  &-top {
    &__content,
    &__user,
    &__list,
    &__filter {
      display: flex;
      align-items: center;
      padding: 0;
    }
    &__content {
      padding: 8px 0;
      display: grid;
      grid-template-columns: 1fr 7fr;
    }
    &__country {
      margin-right: 8px;
      font-size: 12px;
      font-weight: 700;
      padding: 3px 8px;
      border: 1px solid transparent;
      border-radius: 8px;

      cursor: pointer;
      &_active {
        border-color: #e11b1b;
      }
    }
    &__user {
      margin-right: 8px;
    }
    &__image {
      margin-right: 8px;
    }
    &__name {
      font-size: 16px;
      font-weight: 700;
      color: #231f20;
    }
    &__block {
      display: flex;
      align-items: center;
      &:nth-child(2) {
        width: 100%;
        justify-content: space-between;
      }
    }
    &__burger {
      position: relative;
      justify-self: end;
      display: block;
      width: 24px;
      height: 18px;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #000;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        height: 2px;
        width: 100%;
        background: #000;
      }
    }
    &-menu {
      position: absolute;
      background: #f4f4f4;
      transform: translateY(-400px);
      top: 40px;
      right: 0;
      z-index: 999;
      border-radius: 16px;
      transition: all 0.5s;
      max-width: 400px;
      &.active {
        transform: translateY(0);
      }
      &__content {
        padding: 16px;
      }
      &__row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
      &__block {
        display: flex;
        align-items: center;
        &_direction {
          flex-direction: column;
        }
      }
      &__value {
        display: flex;
      }
      &__parameter {
        margin-right: 8px;
        p {
          display: flex;
          align-items: center;
          svg {
            margin-right: 5px;
          }
        }
      }
      &__button {
        width: 100%;
        font-size: 14px;
        text-align: center;
      }
    }
    @media screen and (min-width: 1200px) and (max-width: 1600px) {
      &__content {
        grid-template-columns: 1fr 5fr;
      }
    }
    @media screen and (min-width: 850px) and (max-width: 1280px) {
      &__content {
        grid-template-columns: 1fr 4fr;
      }
    }
    @media screen and (min-width: 744px) and (max-width: 1280px) {
      &__name {
        font-size: 14px;
      }
    }
    @media screen and (min-width: 320px) and (max-width: 850px) {
      &__content {
        position: relative;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
      }
      &__list {
        flex-wrap: wrap;
      }
    }
    @media screen and (min-width: 320px) and (max-width: 428px) {
      &__name {
        display: none;
      }
      &-menu {
        .header-top__name {
          display: block;
          font-size: 10px;
        }
      }
    }
  }
  &-body {
    background: #231f20;
    border-radius: 0 0 15px 15px;
    padding: 8px 6px;
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__button {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #fff;
      display: flex;
      align-items: center;
      svg {
        margin-left: 7px;
      }
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
    &__block {
      display: flex;
      align-items: center;
    }
    @media screen and (min-width: 744px) and (max-width: 1280px) {
      &__button {
        font-size: 14px;
      }
    }
    @media screen and (min-width: 320px) and (max-width: 428px) {
      &__button {
        font-size: 12px;
      }
    }
  }
}
</style>