<!-- Это показвааем в layout -->
<template>
  <div class="admin-page__top">
    <h2 class="admin-page__title">Личный кабинет Администратора</h2>
    <div class="main-filter admin-page__filter">
      <router-link
        :to="{ name: 'AdminEmployeesTable' }"
        class="main-filter__button"
        :class="{
          'main-filter__button_active':
            $route.name == 'AdminEmployeesTable' ||
            $route.name == 'AdminEmployeesView',
        }"
      >
        Сотрудники
      </router-link>
      <router-link
        class="main-filter__button"
        :class="{
          'main-filter__button_active':
            $route.name == 'AdminEmployeesCreateEmployeer',
        }"
        :to="{ name: 'AdminEmployeesCreateEmployeer' }"
      >
        Зарегестрировать нового сотрудника
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.admin-page {
  &__content {
    padding-bottom: 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #353132;
  }
  &__filter {
    .main-filter__button:last-child {
      &::after {
        display: none;
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__title {
      font-size: 16px !important;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__top {
      flex-direction: column;
      justify-content: start !important;
      align-items: start !important;
    }
    &__filter {
      margin-top: 10px;
      align-self: center;
      column-gap: 10px;
    }
  }
}
</style>