<template>
  <div class="employees-profile">
    <div class="employees-profile__content main-content main-color">
      <div class="employees-profile__top main-line">
        <div class="employees-profile__title">
          <h4 v-if="$route.name == 'AdminEmployeesView'">Просмотр профиля</h4>
          <h4 v-else>Регистрация нового сотрудника</h4>
        </div>
        <div class="main-filter" v-if="$route.name == 'AdminEmployeesView'">
          <div class="main-filter__block">
            <button
              class="main-filter__button"
              :class="{
                'main-filter__button_active':
                  $route.name == 'AdminEmployeesView',
              }"
            >
              Профиль
            </button>
          </div>
          <div class="main-filter__block">
            <button class="main-filter__button">KPI</button>
          </div>
        </div>
      </div>
      <div class="employees-profile__body">
        <div class="employees-profile__form">
          <div class="employees-profile__block" v-if="currentUser">
            <div class="employees-profile__row">
              <div class="employees-profile__image">
                <img
                  type="image"
                  class="employees-profile__image"
                  :src="require('@/assets/images/users/avatar2.png')"
                  alt="user"
                />
              </div>
              <div class="employees-profile__info">
                <p class="employees-profile__name">
                  {{ currentUser.name }} {{ currentUser.surname }}
                  {{ currentUser.email }}
                </p>
                <ul class="main-table__list main-table__list">
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
          </div>
          <div class="employees-profile__block">
            <div
              class="employees-profile__row employees-profile__row_direction"
            >
              <div
                class="employees-profile__field"
                :class="{
                  'employees-profile__field_error': errorsToSubmit.name,
                }"
              >
                <label for="EmployeesProfileName">
                  <div class="employees-profile__icon">
                    <StarIcon />
                  </div>
                  <p>Имя(имя и отчество):</p>
                </label>
                <div class="employees-profile__input">
                  <input
                    type="text"
                    id="EmployeesProfileName"
                    v-model="changedUser.name"
                    placeholder="Введите имя"
                  />
                  <div class="employees-profile__error">
                    <ErrorIcon />
                  </div>
                </div>
              </div>
              <div
                class="employees-profile__field"
                :class="{
                  'employees-profile__field_error': errorsToSubmit.surname,
                }"
              >
                <label for="EmployeesProfileSurname">
                  <div class="employees-profile__icon">
                    <StarIcon />
                  </div>
                  <p>Фамилия:</p>
                </label>
                <div class="employees-profile__input">
                  <input
                    type="text"
                    id="EmployeesProfileSurname"
                    v-model="changedUser.surname"
                    placeholder="Введите фамилию"
                  />
                  <div class="employees-profile__error">
                    <ErrorIcon />
                  </div>
                </div>
              </div>
              <div
                class="employees-profile__field"
                :class="{
                  'employees-profile__field_error': errorsToSubmit.email,
                }"
              >
                <label for="EmployeesProfileEmail">
                  <div class="employees-profile__icon">
                    <StarIcon />
                  </div>
                  <p>e-mail:</p>
                </label>
                <div class="employees-profile__input">
                  <input
                    type="text"
                    id="EmployeesProfileEmail"
                    v-model="changedUser.email"
                    placeholder="Введите E-mail"
                  />
                  <div class="employees-profile__error">
                    <ErrorIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="employees-profile__block">
            <div class="employees-profile__subtitle">
              <div class="employees-profile__icon">
                <StarIcon />
              </div>
              <h4>Доступ к публикациям</h4>
            </div>
            <div class="employees-profile__row">
              <ul
                class="main-table__list main-table__list employees-profile__access"
              >
                <li
                  v-for="country in allCountries"
                  :key="country"
                  class="employees-profile__country"
                  :class="{
                    'employees-profile__country_active':
                      changedUser.availableCountries
                        ? changedUser.availableCountries.includes(country)
                        : false,
                  }"
                  @click="changeCountry(country)"
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
                <li>
                  <button class="button-red" @click="changeCountry('Все')">
                    Выбрать все
                  </button>
                </li>
              </ul>
            </div>
            <div class="employees-profile__block">
              <div class="employees-profile__subtitle">
                <div class="employees-profile__icon">
                  <StarIcon />
                </div>
                <h4>Роли</h4>
              </div>
              <div class="employees-profile__row">
                <ul class="employees-profile__roles">
                  <li
                    v-for="role in allRoles"
                    :key="role"
                    @click="toggleArray(changedUser.roles, role)"
                  >
                    <div class="employees-profile__checkbox main-checkbox">
                      <input
                        type="checkbox"
                        :checked="
                          changedUser.roles.some((e) => e == role)
                            ? true
                            : false
                        "
                        class="main-checkbox__input"
                      />
                      <div class="main-checkbox__checkmark"></div>
                      <div class="checkbox__body"></div>
                    </div>
                    <p
                      :style="{
                        'background-color':
                          role == 'модератор'
                            ? '#C0FBFF'
                            : role == 'редактор'
                            ? '#D0FFD2'
                            : '#FFDDDD',
                      }"
                    >
                      {{ role }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="employees-profile__form">
          <div
            class="employees-profile__block employees-profile__title main-line"
          >
            <h4>Загрузить фото</h4>
          </div>
          <div class="employees-profile__block">
            <div
              class="employees-profile__subtitle employees-profile__subtitle_light"
            >
              <div class="employees-profile__icon">
                <StarIcon />
              </div>
              <h4>Обязательно для заполнения</h4>
            </div>
            <div class="employees-profile__row employees-profile__row_grid">
              <div
                class="employees-profile__image employees-profile__image_big"
              >
                <img
                  type="image"
                  :src="
                    imageToShow || require('@/assets/images/users/empty.png')
                  "
                  alt="user"
                />
              </div>
              <div class="employees-profile__require">
                <p>Требование к фото:</p>
                <p>
                  объем не более 1МБ, размер не менее 200х200 пикселей, формат
                  jpg, jpeg, png
                </p>
              </div>
              <div class="employees-profile__require">
                <p>Просьба</p>
                <p>
                  Постарайтесь, пожалуйста, подобрать фото или картинку так,
                  чтобы она хорошо читалась. Была яркая и внятная. Всегда
                  приятно при общении видеть лицо собеседника.
                </p>
              </div>
              <div class="employees-profile__button">
                <label for="uploadPhoto" class="button-red"
                  >Изменить фото</label
                >
                <input
                  type="file"
                  class="employees-profile__upload"
                  id="uploadPhoto"
                  accept="image/jpeg, image/png, image.jpg"
                  @change="uploadImage"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="employees-profile__form">
          <div
            class="employees-profile__block employees-profile__title main-line"
          >
            <h4>Пароль</h4>
          </div>
          <div class="employees-profile__block employees-profile__block">
            <div
              class="employees-profile__row employees-profile__row_direction"
            >
              <div
                class="employees-profile__field"
                :class="{
                  'employees-profile__field_error': errorsToSubmit.password,
                }"
              >
                <label for="EmployeesProfilePassword">
                  <p>Введите новый пароль:</p>
                </label>
                <div class="employees-profile__input">
                  <input
                    type="password"
                    id="EmployeesProfilePassword"
                    placeholder="Введите новый пароль"
                    v-model="changedUser.password"
                  />
                  <div class="employees-profile__error">
                    <ErrorIcon />
                  </div>
                </div>
              </div>
              <div
                class="employees-profile__field"
                :class="{
                  'employees-profile__field_error': errorsToSubmit.password,
                }"
              >
                <label for="EmployeesProfileRepeatPassword">
                  <p>Подтвердите пароль:</p>
                </label>
                <div class="employees-profile__input">
                  <input
                    type="password"
                    id="EmployeesProfileRepeatPassword"
                    placeholder="Подтвердите пароль"
                    v-model="repeatPassword"
                  />
                  <div class="employees-profile__error">
                    <ErrorIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-submit" v-if="currentUser == null">
      <button @click="saveData('newUser')">
        Зарегестрировать пользователя
      </button>
    </div>
    <div class="main-submit" v-else>
      <button @click="saveData('saveChange')">Сохранить изменения</button>
      <button @click="saveData('deleteUser')">Удалить профиль</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ErrorIcon from "@/assets/images/icons/errorSmall.svg?inline";

import StarIcon from "@/assets/images/icons/star.svg?inline";
export default {
  props: {
    currentUser: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      allCountries: [
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
      allRoles: ["модератор", "редактор", "администратор"],
      changedUser: {
        id: "",
        name: "",
        surname: "",
        email: "",
        login: "",
        roles: [],
        photo: "",
        password: "",
        availableCountries: [],
      },
      imageToShow: null,
      errorsToSubmit: {
        name: false,
        surname: false,
        email: false,
        password: false,
        roles: false,
        photo: false,
        availableCountries: false,
      },
      repeatPassword: null,
    };
  },
  components: {
    StarIcon,
    ErrorIcon,
  },
  mounted() {
    if (this.$route.name == "AdminEmployeesView" && this.currentUser) {
      this.changedUser = JSON.parse(JSON.stringify(this.currentUser));
      this.repeatPassword = this.currentUser.password;
    }
  },
  methods: {
    saveData(action) {
      this.hasError();
      for (let err in this.errorsToSubmit) {
        if (this.errorsToSubmit[err] == true) {
          console.error(`${err}: false`);
          return;
        }
      }
      if (action == "newUser") {
        this.CREATE_USER(this.changedUser);
        // this.$router.push({ path: "/admin/Employees/list" });
      } else if (action == "saveChange") {
        this.CHANGE_USER(this.changedUser);
      }
      this.$router.push({ name: "AdminEmployeesTable" });
    },
    hasError() {
      let reEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let rePassword = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;
      this.errorsToSubmit.name = this.changedUser.name ? false : true; // Валидация имени
      this.errorsToSubmit.surname = this.changedUser.surname ? false : true; //Валидация фамилии
      this.errorsToSubmit.email = !reEmail.test(this.changedUser.email); //Валидация почты
      this.errorsToSubmit.roles =
        this.changedUser.roles.length == 0 ? true : false; //Валидация ролей
      this.errorsToSubmit.photo = this.changedUser.photo
        ? false
        : this.currentUser == null
        ? true
        : false; //Валидация аватарки
      this.errorsToSubmit.availableCountries =
        this.changedUser.availableCountries.length == 0 ? true : false; //Валидация доступа к странам
      this.errorsToSubmit.password = !(
        (
          rePassword.test(this.changedUser.password) &&
          this.repeatPassword == this.changedUser.password
        ) //Валидация пароля
      );
    },
    changeCountry(country) {
      if (country == "Все") {
        this.changedUser.availableCountries = this.allCountries.slice();
        return;
      }
      this.toggleArray(this.changedUser.availableCountries, country);
    },
    toggleArray(array, item) {
      let index = array.indexOf(item);
      index == -1
        ? array.push(item)
        : array.length > 1
        ? array.splice(index, 1)
        : false;
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      let changeSrc = (src) => {
        this.changedUser.photo = src;
        this.imageToShow = src;
      };
      if (image && image.size > 1024 * 1024) {
        console.error("Изображение слишком большое");

        e.preventDefault();
        return;
      } else if (image) {
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          let src = e.target.result;
          let loadImage = new Image();
          loadImage.src = src;
          loadImage.onload = function () {
            if (this.width < 200 || this.height < 200) {
              console.error("Изображение слишком маленькое");
              e.preventDefault();
              src = "";
              return;
            }
            changeSrc(src);
          };
        };
      }
    },
    ...mapActions("Users", ["CREATE_USER", "CHANGE_USER"]),
  },
  watch: {
    currentUser(newValue) {
      this.currentUser = newValue;
    },
  },
};
</script>
<style lang="scss">
.employees-profile {
  h4,
  p,
  input {
    color: #353132;
    font-weight: 700;
  }
  &__content {
    padding: 16px;
    border-radius: 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
  }
  &__subtitle {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    &_light {
      h4 {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  &__block {
    margin-top: 16px;
  }
  &__row {
    display: flex;
    align-items: center;
    &_grid {
      display: grid;
      align-items: center;
      grid-template: repeat(3, 1fr) / 1fr 8fr;
    }
  }
  &__row_grid &__image {
    grid-row: 1 / 4;
  }
  &__input {
    position: relative;
  }
  &__field {
    &:not(:last-child) {
      margin-right: 20px;
    }
    label {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      p {
        font-weight: 700;
      }
    }
    input {
      position: relative;
      padding: 2px 0 2px 8px;
      border: 1px solid #c0c0c0;
      border-radius: 8px;
      width: 100%;
    }
    &_error {
      input {
        color: #b90c0c;
        border-color: #b90c0c;
        &::placeholder {
          color: #b90c0c;
        }
      }
      .employees-profile__error {
        display: block;
      }
    }
  }
  &__error {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    width: 16px;
    height: 16px;
  }
  &__image {
    margin-right: 8px;
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
    &_big {
      img {
        width: 128px;
        height: 128px;
      }
    }
  }
  &__name {
    margin-bottom: 5px;
    font-size: 24px;
  }
  &__icon {
    path {
      stroke: #353132;
    }
    margin-right: 10px;
  }
  &__roles {
    display: flex;
    li {
      position: relative;
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        padding: 2px 8px;
        border-radius: 8px;
        cursor: pointer;
      }
      &:not(:last-child) {
        margin-right: 18px;
      }
      &:not(:last-child):after {
        content: "";
        position: absolute;
        height: 100%;
        width: 2px;
        background: #e2e2e2;
        right: -9px;
      }
    }
  }
  &__require {
    p {
      font-size: 12px;
      &:last-child {
        margin-top: 8px;
        font-weight: 400;
      }
    }
  }
  &__checkbox {
    cursor: pointer;
    input {
      pointer-events: none;
    }
  }
  &__country {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    padding: 2px 8px;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    &_active {
      border-color: #e11b1b;
    }
  }
  &__upload {
    opacity: 0;
    position: absolute;
  }
  @media screen and (min-width: 850px) and (max-width: 1600px) {
    &__row_grid {
      grid-template-columns: 1fr 5fr;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__title h4 {
      font-size: 16px;
    }
    &__field label p {
      font-size: 14px;
    }
    &__subtitle {
      font-size: 14px;
    }
    &__image_big {
      margin-right: 8px;
    }
    &__info {
      &:last-child {
        max-width: 474px;
      }
    }
    &__name {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 850px) {
    &__row_grid {
      grid-template-columns: 1fr 3fr;
    }
  }
  @media screen and (min-width: 500px) and (max-width: 744px) {
    &__row_grid {
      grid-template: repeat(2, 1fr) / 1fr 3fr;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    &__row_grid {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__block_direction,
    &__row_direction {
      display: flex;
      flex-direction: column;
      align-items: start;
      row-gap: 10px;
    }
    &__field {
      width: 100%;
      label {
        margin-bottom: 4px;
      }
    }
    &__roles {
      flex-wrap: wrap;
      row-gap: 5px;
      li p {
        font-size: 10px;
      }
    }
    &__row {
      gap: 5px;
    }
    &__row_grid &__image {
      grid-row: 1;
    }
    &__row_grid &__require:nth-child(3) {
      grid-column: 1 / 3;
    }
    &__image_big {
      margin-right: 0;
    }
    &__button {
      margin-top: -20px;
    }
    .main-submit {
      flex-direction: column;
      row-gap: 10px;
      button {
        margin-right: 0 !important;
      }
    }
  }
}
</style>