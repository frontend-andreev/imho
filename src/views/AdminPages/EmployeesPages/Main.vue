<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/admin/Employees/Header.vue"
export default {
  components: {
    Header
  }
}
</script>
