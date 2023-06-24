<!-- <template>
  <div class="main-layout">
    <Header />
    <div class="main-background">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>
  <script>
import Header from "@/components/main/Header.vue";
import Footer from "@/components/main/Footer.vue";
// import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "ModeratorLayout",
  components: {
    Header,
    Footer,
  },
  methods: {
    // ...mapActions("Users", ["GET_USERS_FROM_API"]),
    // ...mapActions("Main", [
    //   "GET_PUBLICATIONS_FROM_API",
    //   "GET_AUTHORS_FROM_API",
    //   "GET_THEMES_FROM_API",
    // ]),
  },
  computed: {
    ...mapGetters({
      Authors: "Users/getListOfUsers",
      Publications: "Main/getPublications",
      CurrentUser: "Users/getCurrentUser",
    }),
    layout() {
      const layoutName = this.$route.meta.layout || "Default";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
};
</script>
  
   -->