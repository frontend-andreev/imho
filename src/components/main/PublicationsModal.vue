<template>
  <div class="publications-modal">
    <div class="publications-modal__content">
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>ID</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <p>{{ currentArticle.id }}</p>
        </div>
      </div>
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Заголовок</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <p>{{ currentArticle.title }}</p>
        </div>
      </div>
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Автор</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <div class="main-table-author">
            <div class="main-table-author__image">
              <img
                :src="require('@/assets/images/users/avatar2.png')"
                alt="user"
              />
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
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Создано</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <p>{{ currentArticle.created }}</p>
        </div>
      </div>
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Страны</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <ul class="main-table__list">
            <li
              v-for="country in currentArticle.availableCountries"
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
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Дата публикации</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <p>
            {{ currentArticle.publish[0] }}
            {{ currentArticle.publish[1] }}
          </p>
        </div>
      </div>
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Статус</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <p
            v-if="currentArticle.status == 'approved'"
            class="publications-modal__status main-table__status_green"
          >
            Одобрено
          </p>
          <p
            v-else-if="currentArticle.status == 'rejected'"
            class="publications-modal__status main-table__status_red"
          >
            Не одобрено
          </p>
          <p
            v-else-if="currentArticle.status == 'undefined'"
            class="publications-modal__status main-table__status_purple"
          >
            Новый
          </p>
        </div>
      </div>
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Причина</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <p>{{ currentArticle.reason || "-" }}</p>
        </div>
      </div>
      <div class="publications-modal__row">
        <div class="publications-modal__parameter main-table__column">
          <p>Тип</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <ul class="main-table__list">
            <li v-for="elem in currentArticle.type" :key="elem">
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
      </div>
      <div
        class="publications-modal__row"
        v-if="UserById(currentArticle.moderId)"
      >
        <div class="publications-modal__parameter main-table__column">
          <p>Модератор</p>
        </div>
        <div class="publications-modal__value main-table__column">
          <div class="publications-modal__moderator">
            <img src="@/assets/images/users/avatar1.png" alt="" />
            <p>
              {{ UserById(currentArticle.moderId).name }}
              {{ UserById(currentArticle.moderId).surname }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    currentArticle: {
      type: Object,
      default: () => {},
    },
    classOfParent: {
      type: String,
      default: () => "",
    },
    position: {
      type: String,
      default: () => "",
    },
  },
  mounted() {
    document.addEventListener("click", (element) => {
      [].forEach.call(
        document.querySelectorAll(".publications-modal"),
        function (el) {
          el.classList.remove("publications-modal_left");
          el.classList.remove("publications-modal_right");
          el.classList.remove("publications-modal_top");
        }
      );
      if (element.target.closest(`.${this.classOfParent}`) == null) {
        this.$emit("closeModal", null);
      } else {
        let child = element.target.parentNode.querySelector(
          ".publications-modal"
        );
        let parent = this.Container;
        if (this.position == "top") {
          child.classList.add("publications-modal_top");
          return;
        }
        if (this.Container.width >= 632) {
          // Проверяем, выходит ли модалка за пределы контейнера
          if (parent.right <= child.getBoundingClientRect().right) {
            child.classList.add("publications-modal_left");
          } else {
            child.classList.add("publications-modal_right");
          }
          if (parent.left > child.getBoundingClientRect().left) {
            child.classList.remove("publications-modal_left");
            child.classList.add("publications-modal_right");
          }
        } else {
          child.classList.add("publications-modal_top");
        }
      }
    });
  },
  computed: {
    ...mapGetters({
      getAuthor: "Main/getAuthorById",
      UserById: "Users/getUserById",
      Container: "Main/getSizeOfContainer",
    }),
  },
};
</script>
<style lang="scss">
.publications-modal {
  position: absolute;
  top: -50px;
  padding: 8px;
  width: 400px;
  z-index: 999;
  background: #fff;
  border: 2px solid #b90c0c;
  border-radius: 8px;
  &__content {
    position: relative;
    padding: 4px;
    width: 100%;
    &:after {
      content: "";
      left: -32px;
      top: 60px;
      background: #fff;
      background-clip: padding-box;
      border: 2px solid transparent;
      border-right-color: #b90c0c;
      border-bottom-color: #b90c0c;
      border-bottom-right-radius: 15px;
      transform: rotate(135deg);
      height: 44px;
      width: 44px;
      position: absolute;
      pointer-events: none;
      z-index: -1;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: 2fr 4fr;
    &:first-child {
      .publications-modal__parameter {
        border-top-left-radius: 8px;
      }
      .publications-modal__value {
        border-top-right-radius: 8px;
      }
    }
    &:last-child {
      .publications-modal__parameter {
        border-bottom-left-radius: 8px;
      }
      .publications-modal__value {
        border-bottom-right-radius: 8px;
      }
    }
  }
  &__parameter {
    font-weight: 700;
    justify-content: start;
  }
  &__value {
    text-align: left;
    font-weight: 500;
    justify-content: start;
  }
  &__parameter,
  &__value {
    display: flex;
    align-items: center;
    padding: 4px;
    p {
      color: #353132;
      font-size: 11px !important;
    }
  }
  &_right {
    left: 100%;
    .publications-modal__content {
      &::after {
        content: "";
        left: -32.1px;
        top: 60px;
        transform: rotate(135deg);
      }
    }
  }
  &_left {
    right: 100% !important;
    .publications-modal__content {
      &::after {
        left: unset;
        right: -32.1px !important;
        top: 60px;
        transform: rotate(-45deg);
      }
    }
  }
  &_top {
    top: 100%;
    .publications-modal__content {
      &::after,
      &::before {
        top: -40px;
        left: 30px;
      }
      &::after {
        border-bottom-color: #fff;
        border-width: 31px;
        margin-top: -29px;
      }
      &::before {
        border-bottom-color: #b90c0c;
        border-width: 31px;
        margin-top: -31px;
      }
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
  &__moderator {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
    }
  }
  @media screen and (min-device-width: 1280px) and (max-device-width: 1599px) {
    right: -320%;
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    width: 310px;
  }
}
</style>