<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  mounted() {
    this.GET_USERS_FROM_API();
    this.GET_PUBLICATIONS_FROM_API();
    this.GET_AUTHORS_FROM_API();
    this.GET_THEMES_FROM_API();
    this.GET_ARCHIVE_FROM_API();
    if (localStorage.user) {
      this.$store.commit("Users/changeUserByLocalStorage");
    }
    if (this.currentMode) {
      document.body.classList.add('dark')
    }
  },
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || "Empty";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
    ...mapGetters({
      CurrentUser: "Users/getCurrentUser",
    }),
    currentMode() {
      return JSON.parse(localStorage.getItem("mode"));
    },
  },
  methods: {
    ...mapActions("Users", ["GET_USERS_FROM_API"]),
    ...mapActions("Main", [
      "GET_PUBLICATIONS_FROM_API",
      "GET_AUTHORS_FROM_API",
      "GET_THEMES_FROM_API",
      "GET_ARCHIVE_FROM_API",
    ]),
  }
};
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
