<template>
  <div class="publications-approved">
    <PublicationsTable
      v-if="Publications.length >= 1"
      :publications="Publications"
    />
  </div>
</template>
  <script>
import PublicationsTable from "@/components/moderator/Publications/Table/ApprovedTable.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    PublicationsTable,
  },
  computed: {
    ...mapGetters({
      Publications: "Main/getPublications",
    }),
  },
};
</script>