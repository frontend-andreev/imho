<template>
  <div class="admin-page">
    <div class="admin-page__content">
      <EmployeesTable />
    </div>
  </div>
</template>
<script>
import EmployeesTable from "@/components/admin/Employees/EmployeesTable.vue";
export default {
  components: {
    EmployeesTable,
  },
};
</script>
<style lang="scss">
.admin-page {
  &__content {
    padding-bottom: 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #353132;
  }
}
</style>