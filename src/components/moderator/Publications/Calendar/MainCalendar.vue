<template>
  <div class="moder-publications-calendar">
    <div class="moder-publications-calendar__content">
      <div
        class="moder-publications-calendar__top moder-publications-calendar__row"
      >
        <div
          class="moder-publications-calendar__column"
          v-for="day in week"
          :key="day"
        >
          <p>{{ day }}</p>
        </div>
      </div>
      <div
        class="moder-publications-calendar__body moder-publications-calendar__row"
      >
        <div
          class="moder-publications-calendar__column moder-publications-calendar__item main-color"
          v-for="(item, index) in week"
          :key="item"
        >
          <div class="moder-publications-calendar__info">
            <p class="moder-publications-calendar__subtitle">26</p>
            <p class="moder-publications-calendar__subtitle_light">
              10 публикаций
            </p>
          </div>
          <ul class="moder-publications-calendar__list">
            <li
              class="moder-publications-calendar__li"
              v-for="article in filterPublications(index)"
              :key="article.id"
              @click="changeArticle(article)"
              :style="{
                position: currentArticle
                  ? currentArticle.id == article.id
                    ? 'relative'
                    : 'static'
                  : 'static',
                color: currentArticle
                  ? currentArticle.id == article.id
                    ? '#b90c0c'
                    : ''
                  : '',
              }"
            >
              <p class="moder-publications-calendar__article">
                {{ article.title }}
              </p>
              <p class="moder-publications-calendar__author">
                Александр Гопоненко
              </p>
              <Modal
                @closeModal="currentArticle = null"
                v-if="currentArticle && article.id == currentArticle.id"
                :currentArticle="currentArticle"
                :classOfParent="'moder-publications-calendar__article'"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/main/PublicationsModal.vue";
export default {
  props: {
    publications: {
      type: Array,
      require: true,
      default: () => [],
    },
    status: {
      type: String,
      require: false,
      default: () => "Все",
    },
  },
  data() {
    return {
      week: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
      currentArticle: null,
      right: false,
      changed: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    changeArticle(article) {
      this.currentArticle = article;
    },
    filterPublications(id) {
      return this.publications.filter((e) => {
        return (
          new Date(e.publish[0]).getDay() == id &&
          (this.status == "Все"
            ? true
            : this.status == "editorial"
            ? e.type.includes("users")
            : this.status == "hot"
            ? e.type.includes("fire")
            : this.status == e.status)
        );
      });
    },
  },
};
</script>
<style lang="scss">
.moder-publications-calendar__row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 8px;
  align-items: start;
}
.moder-publications-calendar__top {
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
}
.moder-publications-calendar__item {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #c0c0c0;
}
.moder-publications-calendar__info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.moder-publications-calendar__subtitle {
  font-size: 12px;
  font-weight: 700;
}
.moder-publications-calendar__li {
  margin-bottom: 12px;
  cursor: pointer;
}
.moder-publications-calendar__li:hover {
  color: #b90c0c !important;
}
.moder-publications-calendar__subtitle_light {
  font-size: 11px;
  font-weight: 700;
  color: #c0c0c0;
}
.moder-publications-calendar__article {
  position: relative;
  font-size: 11px;
  line-height: 15px;
  text-indent: 10px;
  font-weight: 700;
}
.moder-publications-calendar__article::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #b90c0c;
  left: 0px;
  top: 6px;
}
.moder-publications-calendar__author {
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
}
.moder-publications-calendar {
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    width: 1100px;
    min-height: 400px;
    &__subtitle,
    &__article {
      font-size: 10px;
    }
  }
}
.main-table-author {
  &__name {
    font-size: 11px;
  }
  &__tag {
    font-size: 9px;
  }
  &__image {
    width: 40px;
    height: 40px;
  }
}
</style>