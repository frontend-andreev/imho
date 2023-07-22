<template>
  <div class="moderator-user-settings">
    <div class="moderator-user-settings__title">
      <h3>Настройки</h3>
    </div>
    <div class="moderator-user-settings__content">
      <div
        class="moderator-user-settings__row moderator-user-settings__row_big"
      >
        <div class="moderator-user-settings__column main-color">
          <div class="moderator-user-settings__author">
            <div class="moderator-user-settings__info">
              <div class="moderator-user-settings__image">
                <img src="@/assets/images/users/avatar1.png" alt="avatar" />
              </div>
              <div class="moderator-user-settings__name">
                <p>
                  {{ currentUser.surname }} {{ currentUser.name }}
                  {{ currentUser.email }}
                </p>
                <ul class="main-table__list">
                  <li
                    v-for="country in currentUser.availableCountries"
                    :key="country"
                  >
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
            </div>
            <div class="moderator-user-settings__info">
              <ul class="moderator-user-settings__roles">
                <li
                  v-for="role in currentUser.roles"
                  :key="role"
                  :style="{
                    background:
                      role == 'администратор'
                        ? '#FFDDDD'
                        : role == 'модератор'
                        ? '#C0FBFF'
                        : '#D0FFD2',
                  }"
                >
                  <p>{{ role }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="moderator-user-settings__column main-color">
          <h5 class="moderator-user-settings__subtitle">Пароль</h5>
          <div class="moderator-user-settings__password">
            <div class="moderator-user-settings__field">
              <label for="moderatorUserSettingsPassword"
                >Введите новый пароль:</label
              >
              <input type="password" id="moderatorUserSettingsPassword" />
            </div>
            <div class="moderator-user-settings__field">
              <label for="moderatorUserSettingsPasswordRepeat"
                >Подтвердите пароль:</label
              >
              <input type="password" id="moderatorUserSettingsPasswordRepeat" />
            </div>
          </div>
        </div>
      </div>
      <div class="moderator-user-settings__row">
        <div class="moderator-user-settings__column main-color">
          <h5 class="moderator-user-settings__subtitle">
            Настройки интерфейса
          </h5>
          <div class="moderator-user-settings__block">
            <p class="moderator-user-settings__parameter">Язык</p>
            <select
              name="language"
              class="moderator-user-settings__select moderator-user-settings__value"
            >
              <option value="RUS">RUS</option>
              <option value="EN">EN</option>
            </select>
          </div>
          <div
            class="moderator-user-settings__block moderator-user-settings__block_direction"
          >
            <p class="moderator-user-settings__parameter">Часовой пояс:</p>
            <div class="moderator-user-settings__value">
              <select
                name="timeZone"
                class="moderator-user-settings__select moderator-user-settings__select_long"
              >
                <option value="RUS">(GMT + 02%00) Riga</option>
                <option value="EN">(GMT + 02%00) Riga</option>
              </select>
            </div>
            <div class="moderator-user-settings__checkbox">
              <div class="main-checkbox" @click="checkbox = !checkbox">
                <input
                  type="checkbox"
                  :checked="checkbox"
                  class="main-checkbox__input"
                />
                <div class="main-checkbox__checkmark"></div>
                <div class="checkbox__body"></div>
              </div>
              <p>
                Автомотически устанавливать часовой пояс в зависимости от
                текущей геопозиции
              </p>
            </div>
          </div>
          <div class="moderator-user-settings__block">
            <div class="moderator-user-settings__parameter">
              <p>
                <SunIconDark v-if="night" />
                <SunIcon v-else/>

                Ночной режим
              </p>
            </div>
            <div class="moderator-user-settings__value">
              <input
                :checked="night"
                class="main-switch"
                @click="changeMode"
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="main-submit">
        <button>Сохранить</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SunIcon from "@/assets/images/icons/sun.svg?inline";
import SunIconDark from "@/assets/images/icons/dark/sun.svg?inline";
export default {
  data() {
    return {
      checkbox: true,
      night: false,
    };
  },
  mounted() {
    this.night = JSON.parse(localStorage.getItem("mode"));
  },
  computed: {
    ...mapGetters({
      currentUser: "Users/getCurrentUser",
    }),
  },
  methods: {
    changeMode() {
      this.night = !this.night;
      this.$store.commit("Main/changeMode", this.night);
    },
  },
  components: {
    SunIcon,
    SunIconDark,
  },
};
</script>
<style lang="scss">
.moderator-user-settings {
  &__row {
    display: grid;
    gap: 16px;
    &_big {
      grid-template-columns: 1fr 1fr;
      margin-bottom: 16px;
    }
  }
  &__column {
    background: #fff;
    border-radius: 16px;
    padding: 16px;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #353132;
  }
  &__author {
    display: flex;
    flex-direction: column;
  }
  &__info {
    display: flex;
    align-items: center;
    column-gap: 8px;
    &:first-child {
      margin-bottom: 16px;
    }
  }
  &__image {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
    }
  }
  &__roles {
    li {
      padding: 2px 8px;
      border-radius: 8px;
      p {
        color: #353132;
        font-weight: 700;
      }
    }
  }
  &__name ul {
    justify-content: start;
  }
  &__subtitle,
  &__name p:first-child {
    font-size: 24px;
    font-weight: 700;
    color: #353132;
    margin-bottom: 5px;
  }
  &__subtitle {
    margin-bottom: 16px;
  }
  &__password {
    display: flex;
    align-items: center;
  }
  &__field {
    display: flex;
    flex-direction: column;
    &:first-child {
      margin-right: 16px;
    }
    label {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
      color: #353132;
    }
    input {
      font-size: 12px;
      border: 1px solid #c0c0c0;
      padding: 4px 8px;
      border-radius: 8px;
    }
  }
  &__block {
    display: flex;
    align-items: center;
    column-gap: 8px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  &__parameter {
    font-weight: 700;
    color: #353132;
    p {
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
  }
  &__select {
    padding: 2px 6px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    cursor: pointer;
  }
  &__value {
    display: flex;
    align-items: center;
  }
  &__checkbox {
    display: flex;
    align-items: center;
    margin-left: 5px;
    column-gap: 5px;
  }
  &__checkbox .main-checkbox {
    width: 20px;
    height: 20px;
    margin-left: 6px;
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__title {
      font-size: 24px;
    }
    &__row {
      &_big {
        grid-template-columns: 1fr;
      }
    }
    &__block {
      &_direction {
        flex-direction: column;
        align-items: start;
        row-gap: 10px;
      }
    }
    &__checkbox .main-checkbox,
    &__checkbox {
      margin-left: 0;
    }
    &__checkbox {
      p {
        font-size: 14px;
      }
    }
    &__select {
      &_long {
        width: 300px;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__password {
      flex-direction: column;
      align-items: start;
      row-gap: 8px;
    }
    &__field {
      margin-right: 0;
      width: 100%;
      label {
        font-size: 12px;
      }
      input {
        width: 100%;
      }
    }
    &__parameter,
    &__field label,
    &__checkbox p {
      font-size: 12px;
    }
    &__checkbox {
      p {
        line-height: 18px;
      }
      align-items: start;
    }
    &__subtitle {
      font-size: 16px;
    }
    &__name {
      p:first-child {
        font-size: 16px;
      }
      p:last-child {
        font-size: 10px;
      }
    }
    &__roles li p {
      font-size: 10px;
    }
    .main-submit,
    button {
      width: 100%;
    }
    &__select_long,
    &__block_direction &__value {
      width: 100%;
    }
    &__column {
      padding: 8px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 428px) {
    &__title {
      font-size: 16px;
    }

    &__checkbox p {
      margin-left: 5px;
    }
  }
}
</style>