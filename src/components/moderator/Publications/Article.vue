<template>
  <div class="view">
    <div class="preview">
      <div class="view-header main-line">
        <div class="view-headedr__column">
          <button class="view-header__button view-header__button_red">
            Видео
          </button>
          <button class="view-header__button view-header__button_green">
            Украина кризис
          </button>
        </div>
        <div class="view-header__column">
          <div class="view-header__item">
            <HeadphonesIconDark v-if="isDark" />
            <HeadphonesIcon v-else />
          </div>
          <div class="view-header__item">
            <BookmarkIcon />
          </div>
          <div class="view-header__item">
            <span>24.04.2021</span>
          </div>
          <div class="view-header__item">
            <DotsIconDark v-if="isDark" />
            <DotsIcon v-else />
          </div>
        </div>
      </div>
      <div class="preview__content">
        <div class="preview__column">
          <div class="view-author">
            <div class="view-author__image">
              <img src="@/assets/images/users/avatar3.png" alt="avatar3" />
            </div>
            <div class="view-author__text">
              <p class="view-author__name">Александр Дюков</p>
              <p class="view-author__role">Историк</p>
            </div>
          </div>
          <div class="preview__text">
            <h5>Узаконенное варварство</h5>
            <p>
              Естественно США, для которых доминирование на европейском
              континенте вопрос принципиальный, не могли допустить развития
              этого сценария. Хоть формально доктрина «обороны по всем азимутам»
              сохранялась до начала 90-х годов, фактически после отставки де
              Голя она стала чистой формальностью.
            </p>
          </div>
        </div>
        <div class="preview__column">
          <img src="@/assets/images/preview.png" alt="preview" />
        </div>
      </div>
      <div class="view-bottom">
        <div class="view-bottom__column">
          <span>#Украина</span>
        </div>
        <div class="view-bottom__column">
          <div class="view-bottom__item">
            <div class="view-bottom__icon">
              <HeartIcon />
            </div>
            <span>12</span>
          </div>
          <div class="view-bottom__item">
            <div class="view-bottom__icon">
              <UsersIconDark v-if="isDark" />
              <UsersIcon v-else />
            </div>
            <span>12</span>
          </div>
          <div class="view-bottom__item">
            <div class="view-bottom__icon">
              <CommentIconDark v-if="isDark" />
              <CommentIcon v-else />
            </div>
            <span>12</span>
          </div>
          <div class="view-bottom__item">
            <div class="view-bottom__icon">
              <ShareIconDark v-if="isDark" />
              <ShareIcon v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
      <div class="article__content main-content main-color">
        <div class="view-header main-line">
          <div class="view-headedr__column">
            <button class="view-header__button view-header__button_red">
              Видео
            </button>
            <button class="view-header__button view-header__button_green">
              Украина кризис
            </button>
          </div>
          <div class="view-header__column">
            <div class="view-header__item">
              <HeadphonesIconDark v-if="isDark" />
              <HeadphonesIcon v-else />
            </div>
            <div class="view-header__item">
              <BookmarkIcon />
            </div>
            <div class="view-header__item">
              <span>24.04.2021</span>
            </div>
            <div class="view-header__item">
              <DotsIconDark v-if="isDark" />
            </div>
          </div>
        </div>
        <div class="article-author">
          <div class="main-table-author article-author__column">
            <div class="main-table-author__image">
              <img src="@/assets/images/users/avatar2.png" alt="user" />
            </div>
            <div class="main-table-author__info">
              <p class="main-table-author__name">Ульянова Анна</p>
              <p class="main-table-author__tag">Дизайнер</p>
              <ul class="main-table-author__list">
                <li>
                  <p>Лидер мнений</p>
                </li>
                <li>
                  <p>Спикер</p>
                </li>
                <li>
                  <p>Единомышленник</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="article-author__column">
            <div class="article-author__item">
              <div class="article-author__icon">
                <HeartIconDark v-if="isDark" />
                <Heart v-else />
              </div>
              <span>12</span>
            </div>
            <div class="article-author__item">
              <div class="article-author__icon">
                <UsersIconDark v-if="isDark" />
                <UsersIcon v-else />
              </div>
              <span>12</span>
            </div>
            <div class="article-author__item">
              <div class="article-author__icon">
                <CommentIconDark v-if="isDark" />
                <CommentIcon v-else />
              </div>
              <span>12</span>
            </div>
          </div>
        </div>
        <div class="article__title">
          <h3>Турецкая игра</h3>
        </div>
        <div class="article__image">
          <img src="@/assets/images/articleImage.jpg" alt="articleBG" />
        </div>
        <div class="article__column">
          <p class="article__subtitle">Источник: фото с сайта</p>
          <p class="article__subtitle">
            Фото флага турции на набережной Стамбула
          </p>
        </div>
        <div class="article__column">
          <p class="article__text">
            Приковывающие внимание события происходят не только на Украине. 23
            мая президент Турции Реджеп Тайип Эрдоган объявил о начале очередной
            военной операции в Сирии. Её целью называется завершение создания
            30-километровой зоны безопасности вдоль южной турецкой границы,
            служащей «для подавления террористических угроз, исходящих из этого
            региона».
          </p>
        </div>
        <div class="article__column">
          <p class="article__text article__text_before">
            Речь идёт о курдских и арабских отрядах, действующих в Сирии,
            которых Турция считает угрозой для своей территориальной целостности
            и безопасности. При этом Эрдоган заявляет, что он привержен
            сохранению территориальной целостности Сирии и военная операция
            позволит вернуть сирийских беженцев в свои дома.
          </p>
        </div>
        <div class="article__column">
          <img src="@/assets/images/articleImage2.jpg" alt="image" />
        </div>
        <div class="article__column">
          <p class="article__text article__text_before">
            Американцы эти действия Турции не поддержали и выводят оттуда свои
            войска. При этом у них были договоренности с курдскими повстанцами о
            том, что они там будут оставаться и, таким образом, гарантировать
            отсутствие активности турецких военных против них.
          </p>
        </div>
        <div class="article__column">
          <p class="article__text article__text_before">
            К сожалению, ближайшие аналогии с Сирией напрашивают совсем рядом с
            нами – на Украине. Эта страна также стала масштабным полем боя, к
            чему непосредственно приложил руку именно Запад, всегда
            зарабатывающий на людской беде, войнах и конфликтах.
          </p>
        </div>
        <div class="view-footer">
          <div class="view-footer__row">
            <ul class="view-footer__column">
              <li class="view-footer__tag">
                <span>#Россия</span>
              </li>
              <li class="view-footer__tag">
                <span>#Сирия</span>
              </li>
              <li class="view-footer__tag">
                <span>#Турция</span>
              </li>
              <li class="view-footer__tag">
                <span>#Украина</span>
              </li>
            </ul>
          </div>

          <div class="view-footer__icons view-footer__row">
            <div class="view-footer__column">
              <div class="view-footer__icon">
                <HeartIconDark v-if="isDark" />
                <Heart v-else />
                <span>12</span>
              </div>
              <div class="view-footer__icon">
                <UsersIconDark v-if="isDark" />
                <UsersIcon v-else />
                <span>12</span>
              </div>
              <div class="view-footer__icon">
                <CommentIconDark v-if="isDark" />
                <CommentIcon v-else />
                <span>12</span>
              </div>
            </div>
            <div class="view-footer__column">
              <div class="view-footer__icon">
                <ShareIcon />
              </div>
              <div class="view-footer__icon">
                <BookmarkEmptyIconDark v-if="isDark" />
                <BookmarkEmptyIcon v-else />
              </div>
            </div>
          </div>
          <div class="view-footer__buttons view-footer__row">
            <div class="view-footer__button">
              <button>Подписаться</button>
            </div>
            <div class="view-footer__button">
              <button>Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadphonesIcon from "@/assets/images/icons/headphones.svg?inline";
import BookmarkIcon from "@/assets/images/icons/bookmark.svg?inline";
import BookmarkEmptyIcon from "@/assets/images/icons/bookmarkEmpty.svg?inline";
import DotsIcon from "@/assets/images/icons/dots.svg?inline";
import HeartIcon from "@/assets/images/icons/heartFull.svg?inline";
import UsersIcon from "@/assets/images/icons/users.svg?inline";
import CommentIcon from "@/assets/images/icons/comment.svg?inline";
import ShareIcon from "@/assets/images/icons/share.svg?inline";
import Heart from "@/assets/images/icons/heart.svg?inline";

import HeadphonesIconDark from "@/assets/images/icons/dark/headphones.svg?inline";
import BookmarkEmptyIconDark from "@/assets/images/icons/dark/bookmarkEmpty.svg?inline";
import DotsIconDark from "@/assets/images/icons/dark/dots.svg?inline";
import UsersIconDark from "@/assets/images/icons/dark/users.svg?inline";
import CommentIconDark from "@/assets/images/icons/dark/comment.svg?inline";
import ShareIconDark from "@/assets/images/icons/dark/share.svg?inline";
import HeartIconDark from "@/assets/images/icons/dark/heart.svg?inline";
export default {
  components: {
    HeadphonesIcon,
    DotsIcon,
    BookmarkIcon,
    BookmarkEmptyIcon,
    HeartIcon,
    UsersIcon,
    CommentIcon,
    ShareIcon,
    Heart,

    HeadphonesIconDark,
    DotsIconDark,
    BookmarkEmptyIconDark,
    UsersIconDark,
    CommentIconDark,
    ShareIconDark,
    HeartIconDark,
  },
  computed: {
    isDark() {
      return document.querySelector("body").classList.contains("dark");
    },
  },
};
</script>

<style lang="scss">
.article {
  &-author {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #353132;
    }
    &__column,
    &__item {
      display: flex;
      align-items: center;
    }
    &__column:first-child {
      align-self: start;
    }
    &__item {
      margin-right: 8px;
    }
    &__icon {
      margin-right: 10px;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 16px;
    color: #353132;
  }
  &__subtitle {
    font-size: 10px;
  }
  &__column {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  &__content {
    padding: 16px;
    border-radius: 24px;
    height: 100%;
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    &__text {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__column img {
      width: 100%;
    }
    &__text {
      font-size: 12px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    &-author {
      flex-direction: column-reverse;
      row-gap: 5px;
    }
  }
}
.view {
  height: 1151px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: 24px;
  &::-webkit-scrollbar {
    display: none;
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    margin-bottom: 10px;
    &__column {
      &:last-child {
        display: flex;
      }
    }
    &__button {
      padding: 4px 8px;
      color: #fff;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      border-radius: 8px;
      &:first-child {
        margin-right: 8px;
      }
      &_red {
        background: #b90c0c;
      }
      &_green {
        background: #009688;
      }
    }
    &__item {
      display: flex;
      align-items: center;
      span {
        color: #353132;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
      }
      &:not(:last-child) {
        margin-right: 18px;
      }
      &:last-child {
        svg {
          width: 19px;
          height: 5px;
        }
      }
    }
  }
  &-author {
    display: flex;
    align-items: center;
    column-gap: 8px;
    &__name {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #353132;
    }
    &__role {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #353132;
    }
  }
  &-footer {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__column {
      display: flex;
      align-items: center;
      column-gap: 8px;
    }
    &__icon {
      span {
        margin-left: 8px;
      }
    }
    &__tag {
      span {
        font-size: 12px;
        font-weight: 700;
      }
    }
    &__icons .view-footer__column {
      column-gap: 16px;
    }
    &__button button {
      padding: 4px 8px;
      color: #b90c0c;
      border: 1px solid #b90c0c;
      border-radius: 8px;
      font-weight: 700;
    }
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__column {
      display: flex;
      align-items: center;
      justify-content: start;
      span {
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        color: #353132;
      }
    }
    &__item {
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
      &:not(:last-child) {
        margin-right: 16px;
        .view-footer__icon {
          margin-right: 10px;
        }
      }
    }
  }
  .main-table-author__tag {
    line-height: 18px;
  }
  .main-table-author__list {
    li:not(:last-child) {
      margin-right: 4px;
    }
    li:first-child {
      background: #cee9ff;
    }
    li:nth-child(2) {
      background: #fff1a3;
    }
    li:nth-child(3) {
      background: #ddffe4;
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1600px) {
    height: 1195px;
  }
  @media screen and (min-width: 850px) and (max-width: 1280px) {
    height: 1272px;
  }
  @media screen and (min-width: 320px) and (max-width: 850px) {
    height: 100%;
    overflow-y: visible;
  }
  @media screen and (min-width: 320px) and (max-width: 500px) {
    &-header {
      &__item {
        &:not(:last-child) {
          margin-right: 8px;
        }
        &:nth-child(3) {
          display: none;
        }
      }
    }
  }
}
.preview {
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  .view-bottom {
    display: grid;
    grid-template-columns: 2fr 1fr;
    &__item:last-child {
      display: block;
      width: 100%;
      text-align: right;
    }
  }
  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 14px 0;
  }
  &__text {
    h5 {
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      color: #353132;
    }
    p {
      margin-top: 8px;

      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #353132;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__content {
      display: flex;
      row-gap: 5px;
      flex-direction: column;
    }
  }
}
</style>