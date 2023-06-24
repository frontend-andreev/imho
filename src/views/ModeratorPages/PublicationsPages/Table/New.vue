<template>
  <div class="publications-new">
    <PublicationsTable v-if="Publications.length >= 1" :publications="Publications" />
  </div>
</template>
<script>
import PublicationsTable from "@/components/moderator/Publications/Table/NewTable.vue";
import {mapGetters} from 'vuex';
export default {
  components: {
    PublicationsTable
  },
  computed: {
    ...mapGetters({
        Publications: "Main/getPublications"
    })
  }
};
</script>