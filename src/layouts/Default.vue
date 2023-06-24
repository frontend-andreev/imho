<template>
  <div>
    <div class="main-layout">
      <Header />
      <div class="main-background">
        <div class="container" ref="MainContainer">
          <router-view></router-view>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
  <script>
import Header from "@/components/main/Header.vue";
import Footer from "@/components/main/Footer.vue";
import { mapGetters } from "vuex";
export default {
  name: "Default",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$nextTick(() => {
      this.changeSizeOfContainer();
      window.addEventListener("resize", () => {
        this.changeSizeOfContainer();
      });
    });
  },
  methods: {
    changeSizeOfContainer() {
      this.$store.commit(
        "Main/changeSizeOfContainer",
        this.$refs.MainContainer.getBoundingClientRect()
      );
    },
  },
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || "Default";
      return () => import(`@/layouts/${layoutName}.vue`);
    },
    ...mapGetters({
      Container: "Main/getSizeOfContainer",
    }),
  },
};
</script>
  
  