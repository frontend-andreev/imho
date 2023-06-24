<template>
  <Profile :currentUser="null" @createNewEmployeer="create" />
</template>
  <script>
import Profile from "@/components/admin/Employees/Profile";
import {mapActions} from 'vuex'

export default {
  components: {
    Profile,
  },
  methods: {
    create(data) {
      this.CREATE_USER(data)
    },
    ...mapActions("Users", ["CREATE_USER"]),
  },
};
</script>