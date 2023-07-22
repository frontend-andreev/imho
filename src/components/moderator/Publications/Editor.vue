<template>
  <div class="publications-editor" v-if="currentArticle">
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row main-line">
        <h5 class="publications-editor__title">Информация о статье</h5>
        <div class="publications-editor__icon">
          <ArchiveIconDark v-if="isDark" />
          <ArchiveIcon v-else />
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Статус</p>
          <div
            class="publications-editor__value publications-editor__value_status"
            :style="{
              background:
                currentArticle.status == 'approved'
                  ? '#009688'
                  : currentArticle.status == 'undefined'
                  ? '#7B61FF'
                  : currentArticle.status == 'rejected'
                  ? '#B90C0C'
                  : '',
            }"
          >
            <p v-if="currentArticle.status == 'approved'">Одобрен</p>
            <p v-if="currentArticle.status == 'undefined'">Новый</p>
            <p v-if="currentArticle.status == 'rejected'">Не одобрен</p>
          </div>
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Автор, соавторы</p>
          <div
            class="publications-editor__value publications-editor__value_author"
          >
            <div class="main-table-author">
              <div class="main-table-author__image">
                <img src="@/assets/images/users/avatar2.png" alt="user" />
              </div>
              <div class="main-table-author__info">
                <p class="main-table-author__name">
                  {{
                    getAuthor(currentArticle.authorId)
                      ? getAuthor(currentArticle.authorId).name
                      : ""
                  }}
                  {{
                    getAuthor(currentArticle.authorId)
                      ? getAuthor(currentArticle.authorId).surname
                      : ""
                  }}
                </p>
                <p class="main-table-author__tag">
                  {{
                    getAuthor(currentArticle.authorId)
                      ? getAuthor(currentArticle.authorId).tag
                      : ""
                  }}
                </p>
                <ul class="main-table-author__list">
                  <li
                    v-for="role in getAuthor(currentArticle.authorId)
                      ? getAuthor(currentArticle.authorId).roles
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
        </div>
      </div>
      <div class="publications-editor__row">
        <ul class="publications-editor__list publications-editor__list_grid">
          <li>
            <p class="publications-editor__parameter">Кол-во символов</p>
            <p
              class="publications-editor__value publications-editor__value_red"
            >
              6 117
            </p>
          </li>
          <li>
            <p class="publications-editor__parameter">Фотографии</p>
            <p
              class="publications-editor__value publications-editor__value_red"
            >
              6 117
            </p>
          </li>
          <li>
            <p class="publications-editor__parameter">Ссылки</p>
            <p
              class="publications-editor__value publications-editor__value_red"
            >
              6 117
            </p>
          </li>
          <li>
            <p class="publications-editor__parameter">Ошибки</p>
            <p
              class="publications-editor__value publications-editor__value_red"
            >
              6 117
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row publications-editor__row_center">
        <button class="publications-editor__button">
          <PenIconDark v-if="isDark" />
          <PenIcon v-else />
          <p>Внести правки в статью самостоятельно</p>
        </button>
      </div>
    </div>
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row main-line">
        <h5 class="publications-editor__subtitme">Настройки</h5>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Дата публикации</p>
          <div
            class="publications-editor__value publications-editor__value_direction"
          >
            <SingleDate class="publications-editor__date"> </SingleDate>
            <p class="publications-editor__date">13:55</p>
          </div>
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Заголовок</p>
          <div
            class="publications-editor__value publications-editor__value_width"
          >
            <input
              type="text"
              class="publications-editor__input"
              id="publicationTitle"
            />
          </div>
        </div>
      </div>
      <div class="publications-editor__row publications-editor__row_direction-small">
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Тип</p>
          <div
            class="publications-editor__value publications-editor__select publications-editor__value_width"
          >
            <select name="TypeOfPublication">
              <option value="Blog" class="publications-editor__type">
                Блог
              </option>
              <option value="Article" class="publications-editor__type">
                Статья
              </option>
            </select>
          </div>
        </div>
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Рубрика</p>
          <div
            class="publications-editor__value publications-editor__value_width"
          >
            <input
              type="text"
              placeholder="Геополитика"
              class="publications-editor__input"
            />
          </div>
        </div>
      </div>
      <div class="publications-editor__row">
        <p class="publications-editor__parameter">Теги</p>
        <div
          class="publications-editor__value publications-editor__value_direction"
        >
          <input
            type="text"
            class="publications-editor__input publications-editor__input_square"
            v-model="currentTag"
          />
          <button class="publications-editor__add" @click="addTag">
            <PlusIconDark v-if="isDark" />
            <PlusIcon v-else />
          </button>
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__value">
          <ul class="publications-editor__list">
            <li class="publications-editor__tag" v-for="tag in tags" :key="tag">
              <CloseIconDark v-if="isDark" @click="deleteTag(tag)" />
              <CloseIcon v-else @click="deleteTag(tag)" />
              <p>{{ tag }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row main-line">
        <h5 class="publications-editor__title">Страны</h5>
      </div>
      <div class="publications-editor__row publications-editor__row_direction">
        <ul class="publications-editor__list main-table__list">
          <li
            class="main-filter__button"
            v-for="country in countries"
            :key="country"
            @click="changeAvailableCountries(country)"
          >
            <div class="employees-profile__checkbox main-checkbox">
              <input
                type="checkbox"
                :checked="currentArticle.availableCountries.includes(country)"
                class="main-checkbox__input"
              />
              <div class="main-checkbox__checkmark"></div>
              <div class="checkbox__body"></div>
            </div>
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
          <li></li>
        </ul>
        <button
          class="button-red"
          @click="chooseAllCountries()"
          v-if="user.roles.includes('администратор')"
        >
          Выбрать все
        </button>
      </div>
    </div>
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row publications-editor__row_grid">
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Выбор редакции до</p>
          <div
            class="publications-editor__value publications-editor__value_direction"
          >
            <div class="employees-profile__checkbox main-checkbox">
              <input type="checkbox" class="main-checkbox__input" />
              <div class="main-checkbox__checkmark"></div>
              <div class="checkbox__body"></div>
            </div>
            <p class="publications-editor__date">17.06.2022</p>
            <p class="publications-editor__date">13:55</p>
          </div>
        </div>
      </div>
      <div class="publications-editor__row publications-editor__row_grid">
        <div class="publications-editor__info">
          <p class="publications-editor__parameter">Горячая новость до</p>
          <div
            class="publications-editor__value publications-editor__value_direction"
          >
            <div class="employees-profile__checkbox main-checkbox">
              <input type="checkbox" class="main-checkbox__input" />
              <div class="main-checkbox__checkmark"></div>
              <div class="checkbox__body"></div>
            </div>
            <p class="publications-editor__date">17.06.2022</p>
            <p class="publications-editor__date">13:55</p>
          </div>
        </div>
      </div>
    </div>
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row">
        <button
          class="publications-editor__permission publications-editor__permission_red"
        >
          Не одобрить</button
        ><button
          class="publications-editor__permission publications-editor__permission_blue"
        >
          Одобрить
        </button>
      </div>
    </div>
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row">
        <p class="publications-editor__parameter">Комментарий</p>
        <div
          class="publications-editor__value publications-editor__value_width"
        >
          <input type="text" class="publications-editor__input" />
        </div>
      </div>
      <div class="publications-editor__row">
        <div
          class="publications-editor__value publications-editor__value_width publications-editor__value_relative"
        >
          <textarea
            name="commentForPublication"
            placeholder="Начните писать.."
            cols="30"
            rows="1"
            class="publications-editor__textarea"
          ></textarea>
          <div
            class="publications-editor__icon publications-editor__icon_absolute"
          >
          <ChatIconDark v-if="isDark" />
          <ChatIcon v-else />
          </div>
        </div>
      </div>
    </div>
    <div class="publications-editor__block main-color">
      <div class="publications-editor__row main-line">
        <h5 class="publications-editor__title">История:</h5>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__comment comment-editor">
          <div class="comment-editor__top">
            <div class="comment-editor__user">
              <div class="comment-editor__image">
                <img src="@/assets/images/users/avatar1.png" alt="avatar" />
              </div>
              <p class="comment-editor__name">Ульянова Анна</p>
            </div>
            <div class="comment-editor__date">
              <p>09.11.2022</p>
              <p>21:33</p>
            </div>
          </div>
          <div class="comment-editor__body">
            <p>Статус статьи изменен</p>
            <div class="comment-editor__status">Архив</div>
          </div>
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__comment comment-editor">
          <div class="comment-editor__body">
            <p class="comment-editor__text comment-editor__text_bold">
              Отправка на модерацию
            </p>
            <p class="comment-editor__text comment-editor__text_light">
              17.06.2022
            </p>
          </div>
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__comment comment-editor">
          <div class="comment-editor__body">
            <p class="comment-editor__text comment-editor__text_bold">
              Отправка на модерацию
            </p>
            <p class="comment-editor__text comment-editor__text_light">
              17.06.2022
            </p>
          </div>
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__comment comment-editor">
          <div class="comment-editor__body">
            <p class="comment-editor__text comment-editor__text_bold">
              Сохранение
            </p>
            <p class="comment-editor__text comment-editor__text_light">
              17.06.2022
            </p>
          </div>
        </div>
      </div>
      <div class="publications-editor__row">
        <div class="publications-editor__comment comment-editor">
          <div class="comment-editor__body">
            <p class="comment-editor__text comment-editor__text_bold">
              Создание публикации
            </p>
            <p class="comment-editor__text comment-editor__text_light">
              17.06.2022
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArchiveIcon from "@/assets/images/icons/archive.svg?inline";
import PenIcon from "@/assets/images/icons/pen.svg?inline";
import PlusIcon from "@/assets/images/icons/plus.svg?inline";
import ChatIcon from "@/assets/images/icons/chat.svg?inline";
import CloseIcon from "@/assets/images/icons/close.svg?inline";

import ArchiveIconDark from "@/assets/images/icons/dark/archive.svg?inline";
import PenIconDark from "@/assets/images/icons/dark/pen.svg?inline";
import PlusIconDark from "@/assets/images/icons/dark/plus.svg?inline";
import ChatIconDark from "@/assets/images/icons/dark/chat.svg?inline";
import CloseIconDark from "@/assets/images/icons/dark/close.svg?inline";

import SingleDate from "@/components/main/SingleDate";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tags: ["Украина", "Горячие новости"],
      currentTag: "",
      allCountries: [
        "RUS",
        "UKR",
        "BLR",
        "LTU",
        "LAT",
        "KAZ",
        "EST",
        "POL",
        "MDA",
      ],
    };
  },
  components: {
    ArchiveIcon,
    PenIcon,
    PlusIcon,
    CloseIcon,
    ChatIcon,

    ArchiveIconDark,
    PenIconDark,
    PlusIconDark,
    CloseIconDark,
    ChatIconDark,
    SingleDate,
  },
  computed: {
    ...mapGetters({
      getArticle: "Main/getPublicationById",
      getAuthor: "Main/getAuthorById",
      user: "Users/getCurrentUser",
    }),
    currentArticle() {
      return this.getArticle(this.$route.params.id);
    },
    countries() {
      if (this.user.roles.includes("администратор")) {
        return this.allCountries;
      } else {
        return this.user.availableCountries;
      }
    },
    isDark() {
      return document.querySelector('body').classList.contains('dark')
    }
  },
  methods: {
    addTag() {
      if (this.currentTag == "") {
        console.error("Тег не может быть пустой строкой");
      } else {
        this.tags.push(this.currentTag);
        this.currentTag = "";
      }
    },
    deleteTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    changeAvailableCountries(country) {
      if (this.currentArticle.availableCountries.includes(country)) {
        this.currentArticle.availableCountries.splice(
          this.currentArticle.availableCountries.indexOf(country),
          1
        );
      } else {
        this.currentArticle.availableCountries.push(country);
      }
    },
    chooseAllCountries() {
      this.currentArticle.availableCountries = [...this.allCountries];
    },
  },
};
</script>
<style lang="scss">
.publications-editor {
  p,
  h5 {
    font-weight: 700;
    color: #353132;
    font-size: 16px;
  }
  &__block {
    background: #fff;
    padding: 8px;
    border-radius: 8px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  &__row {
    display: flex;
    align-items: center;
    column-gap: 10px;
    &:not(:last-child) {
      margin-bottom: 8px;

    }
    &.main-line {
      display: flex;
      justify-content: space-between;
    }
    &_center {
      justify-content: center;
    }
    &_margin {
      margin-bottom: 0;
    }
    &_direction {
      flex-direction: column;
      align-items: start;
      .button-red {
        margin-top: 12px;
      }
    }
  }
  &__icon {
    &_absolute {
      position: absolute;
      top: 0;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__info {
    display: flex;
    align-items: center;
    column-gap: 8px;
    width: 100%;
  }
  &__value {
    &_width {
      width: 100%;
    }
    &_relative {
      position: relative;
    }
    &_status {
      padding: 2px 8px;
      text-transform: uppercase;
      font-size: 12px;
      border-radius: 8px;
      line-height: 20px;
      p {
        color: #fff;
      }
    }
    &_author {
      .main-table-author__name {
        font-size: 12px !important;
      }
      .main-table-author__tag {
        font-size: 8px !important;
      }
      .main-table-author__list li p {
        font-size: 6px;
      }
      .main-table-author__image {
        width: 32px;
        height: 32px;
      }
    }
    &_red {
      margin-left: 8px;
      color: #b90c0c !important;
    }
    &_direction {
      display: flex;
      align-items: center;
    }
  }
  &__list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 8px;
    cursor: pointer;
    li {
      display: flex;
      align-items: center;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 7px;
      width: 17px;
      height: 17px;
    }
    p {
      font-weight: 500;
    }
  }
  &__country {
    font-size: 12px;
    font-weight: 700;
    padding: 2px 8px;
    border: 1px solid transparent;

    &_active {
      border-color: #e11b1b;
      border-radius: 8px;
    }
  }

  &__date {
    font-size: 12px !important;
    font-weight: 700;
    padding: 2px 8px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    max-width: 90px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
  &__input {
    width: 100%;
    padding: 2px 8px;
    border: 1px solid #c0c0c0;
    color: #231f20;
    font-weight: 700;
    border-radius: 8px;
  }
  &__select {
    width: 100%;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    padding: 2px 8px;
    select {
      width: 100%;
    }
  }
  &__add {
    width: 25px;
    height: 22px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    margin-left: 4px;
  }
  &__tag {
    padding: 2px 6px;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    cursor: pointer;
    p {
      color: #231f20;
      font-size: 12px;
      font-weight: 400;
      margin-left: 4px;
    }
  }
  &__list.main-table__list {
    width: auto;
    justify-content: start;
    row-gap: 15px;
    li {
      display: flex;
      align-items: center;
      border: none;
      width: 86px;
      &:last-child {
        width: auto;
        margin-left: 10px;
      }
    }
  }
  &__permission {
    width: 100%;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    border-radius: 8px;
    padding: 5px 0;
    color: #fff;
    &_red {
      background: #b90c0c;
    }
    &_blue {
      background: #009688;
    }
  }
  &__textarea {
    position: relative;
    width: 100%;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    padding: 10px 8px;
    align-items: center;
    resize: none;
  }
  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    &__list_grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      li:nth-child(2),
      li:nth-child(4) {
        justify-self: end;
      }
    }
    &__parameter,
    &__value {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__row_margin &__list {
      flex-wrap: wrap;
      justify-content: start;
      row-gap: 5px;
    }
    &__row_grid &__info {
      flex-direction: column;
      align-items: start;
      row-gap: 8px;
    }
    &__list_grid {
      flex-direction: column;
      align-items: start;
      li {
        width: 100%;
        justify-content: space-between;
      }
    }
    &__parameter,
    &__value {
      font-size: 14px;
    }
    &__button {
      font-size: 10px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    p {
      font-size: 12px;
    }
    &__value,
    &__parameter {
      font-size: 12px !important;
      p {
        font-size: 12px;
      }
    }
    &__button {
      font-size: 12px;
    }
    &__row_margin &__list {
      flex-wrap: wrap;
      align-items: start;
      justify-content: start;
      row-gap: 5px;
    }
    &__list.main-table__list li {
      width: 80px;
    }
    &__list_grid {
      flex-direction: column;
      align-items: start;
      li {
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    &__row {
      &_direction-small {
        flex-direction: column;
        row-gap: 8px;
      }
    }
  }
}

.comment-editor {
  width: 100%;
  padding: 8px;
  border: 1px solid #c0c0c0;
  border-radius: 8px;
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__user {
    display: flex;
    align-items: center;
  }
  &__name {
    font-size: 10px;
    margin-left: 5px;
  }
  &__body {
    display: flex;
    align-items: center;
    p {
      margin-right: 8px;
    }
  }
  &__status {
    padding: 2px 8px;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    background: #000;
    border-radius: 8px;
  }
  &__date {
    display: flex;
    p {
      font-size: 10px;
      font-weight: 400;
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
  &__text {
    &_bold {
      font-size: 16px;
    }
    &_light {
      font-size: 16px;
      font-weight: 500;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__body {
      p {
        font-size: 14px;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__body {
      justify-content: space-between;
    }
  }
}
</style>