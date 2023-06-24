<template>
  <div class="analytics-authors">
    <div class="analytics-authors__content">
      <div class="analytics-authors__body">
        <component
          :authors="Authors"
          :is="`${currentComponent}Table`"
        ></component>
      </div>
    </div>
  </div>
</template>
<script>
import AuthorsTable from "@/components/admin/Analytics/Authors/AuthorsTable";
import GeographyTable from "@/components/admin/Analytics/Authors/GeographyTable";
import { mapGetters } from "vuex";
export default {
  components: {
    AuthorsTable,
    GeographyTable,
  },
  computed: {
    currentComponent() {
      let query = this.$route.query.filter;
      return query.charAt(0).toUpperCase() + query.slice(1);
    },
    ...mapGetters({
      Authors: "Main/getAuthors",
    }),
  },
};
</script>