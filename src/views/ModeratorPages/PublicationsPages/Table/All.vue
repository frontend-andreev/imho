<template>
  <div class="publications-archive">
    <PublicationsTable
      v-if="Publications.length >= 1"
      :publications="Publications"
    />
  </div>
</template>
    <script>
import PublicationsTable from "@/components/moderator/Publications/Table/AllTable.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    PublicationsTable,
  },
  mounted() {
    this.GET_ARCHIVE_FROM_API();
  },
  computed: {
    ...mapGetters({
      Publications: "Main/getAllPublications",
    }),
  },
  methods: {
    ...mapActions("Main", ["GET_ARCHIVE_FROM_API"]),
  },
};
</script>