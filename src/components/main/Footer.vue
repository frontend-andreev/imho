<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__logo"></div>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      dark: "Main/getCurrentMode",
    }),
  }
};
</script>
<style lang="scss">
.footer {
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
  }
}

</style>