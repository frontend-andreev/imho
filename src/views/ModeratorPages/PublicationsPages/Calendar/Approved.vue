<template>
  <div class="publications-approved">
    <PublicationsCalendar
      v-if="Publications.length >= 1"
      :publications="Publications"
      :status="'approved'"
    />
  </div>
</template>
  <script>
import PublicationsCalendar from "@/components/moderator/Publications/Calendar/MainCalendar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    PublicationsCalendar,
  },
  computed: {
    ...mapGetters({
      Publications: "Main/getPublications",
    }),
  },
};
</script>