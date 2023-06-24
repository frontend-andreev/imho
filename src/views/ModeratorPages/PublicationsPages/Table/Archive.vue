<template>
  <div class="publications-archive">
    <PublicationsTable
      v-if="Publications.length >= 1"
      :publications="Publications"
    />
  </div>
</template>
  <script>
import PublicationsTable from "@/components/moderator/Publications/Table/ArchiveTable.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    PublicationsTable,
  },
  mounted() {
    this.GET_ARCHIVE_FROM_API();
  },
  computed: {
    ...mapGetters({
      Publications: "Main/getArchive",
    }),
  },
  methods: {
    ...mapActions("Main", ["GET_ARCHIVE_FROM_API"]),
  },
};
</script>