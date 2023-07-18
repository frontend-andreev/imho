<template>
  <div class="article-header main-line">
    <div class="article-header__content">
      <div class="article-header__block">
        <h2 class="article-header__title">Модерация</h2>
      </div>
      <div class="article-header__block">
        <button
          @click.prevent="goToLastPage"
          class="article-header__button button-red"
        >
          Назад
        </button>
        <button class="article-header__button button-red">Сохранить</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToLastPage() {
      if (window.history.state == null) {
        this.$router.push({ name: "ModeratorPublicationsTableNew" });
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>
<style lang="scss">
.article-header {
  margin-bottom: 15px;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__block {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &__button {
    height: 100%;
    border-radius: 8px;

    &:not(:last-child) {
      margin-right: 10px;
    }
    &:first-child {
      padding: 5px 8px;
      border: 1px solid #e11b1b;
    }
  }
}
</style>