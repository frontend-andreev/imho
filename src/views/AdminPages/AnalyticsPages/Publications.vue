<template>
  <div class="analytics-authors">
    <div class="analytics-authors__content">
      <div class="analytics-authors__body">
        <component
          :items="currentComponent == 'Themes' ? Themes : Publications"
          :is="`${currentComponent}Table`"
        ></component>
      </div>
    </div>
  </div>
</template>
  <script>
import PublicationsTable from "@/components/admin/Analytics/Publications/PublicationsTable";
import ThemesTable from "@/components/admin/Analytics/Publications/ThemesTable.vue";
import { mapGetters } from "vuex";
// import { mapActions } from "vuex";
export default {
  components: {
    PublicationsTable,
    ThemesTable,
  },
  data() {
    return {
      // publications: []
    }
  },
  methods: {
    // ...mapActions("Main", ["GET_PUBLICATIONS_FROM_API", "GET_THEMES_FROM_API"]),
  },
  mounted() {
    // this.GET_PUBLICATIONS_FROM_API()
  },
  computed: {
    currentComponent() {
      let query = this.$route.query.filter;
      return query.charAt(0).toUpperCase() + query.slice(1);
    },
    ...mapGetters({
      Publications: "Main/getPublications",
      Themes: "Main/getThemes",
    }),
  },
};
</script>