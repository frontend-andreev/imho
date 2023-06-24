<template>
  <div>
    <MainHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "@/components/admin/Analytics/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>