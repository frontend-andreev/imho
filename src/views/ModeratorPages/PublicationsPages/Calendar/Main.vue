<template>
    <div>
      <ModerHeader />
      <PublicationsHeader v-if="$route.name != 'ModeratorPublicationsArticle'"/>
      <router-view></router-view>
    </div>
  </template>
  <script>
  import ModerHeader from "@/components/moderator/MainHeader.vue";
  import PublicationsHeader from "@/components/moderator/Publications/Header";
  export default {
    components: {
      ModerHeader,
      PublicationsHeader,
    },
  };
  </script>