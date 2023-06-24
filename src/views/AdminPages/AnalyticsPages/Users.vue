<template>
  <div class="analytics-authors">
    <div class="analytics-authors__content">
      <div class="analytics-authors__body">
        <component :users="Users" :is="`${currentComponent}Table`"></component>
      </div>
    </div>
  </div>
</template>
  <script>
import UsersTable from "@/components/admin/Analytics/Users/UsersTable";
import GeographyTable from "@/components/admin/Analytics/Users/GeographyTable";
import ActivityTable from "@/components/admin/Analytics/Users/ActivityTable";

import { mapGetters } from "vuex";
export default {
  components: {
    UsersTable,
    GeographyTable,
    ActivityTable,
  },
  computed: {
    currentComponent() {
      let query = this.$route.query.filter;
      return query.charAt(0).toUpperCase() + query.slice(1);
    },
    ...mapGetters({
      Users: "Main/getAuthors",
    }),
  },
};
</script>