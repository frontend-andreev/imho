<template>
  <Profile :currentUser="currentUser" v-if="currentUser" />
</template>
<script>
import Profile from "@/components/admin/Employees/Profile";
import { mapGetters } from "vuex";

export default {
  components: {
    Profile,
  },
  computed: {
    ...mapGetters({
      getCurrentUser: "Users/getUserById",
    }),
    currentUser() {
      return this.getCurrentUser(this.$route.params.id);
    },
  },
};
</script>