<template>
  <div class="publications-article">
    <Header />
    <div class="publications-article__content">
      <Article />
      <Editor />
    </div>
  </div>
</template>
<script>
import Article from "@/components/moderator/Publications/Article.vue";
import Editor from "@/components/moderator/Publications/Editor.vue";
import Header from "@/components/moderator/Publications/ArticleHeader.vue"
export default {
  components: {
    Article,
    Editor,
    Header
  },
  methods: {
    check(n) {
      console.log(n);
    }
  }
};
</script>
<style lang="scss">
.publications-article {
  &__content {
    display: grid;
    grid-template-columns: 4fr 3fr;
    column-gap: 16px;
  }
  @media screen and (min-width: 320px) and (max-width: 850px) {
    &__content {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }
}
</style>