<template>
  <div class="admin-table-employees">
    <div class="admin-table-employees__content">
      <div class="admin-table-employees__top">
        <div class="admin-table-employees__row main-table_white">
          <div class="admin-table-employees__parameter main-table__column">
            <p>id</p>
          </div>
          <div class="admin-table-employees__parameter main-table__column">
            <p>Фото</p>
          </div>
          <div class="admin-table-employees__parameter main-table__column">
            <p>Имя фамилия</p>
          </div>
          <div class="admin-table-employees__parameter main-table__column">
            <p>E-mail</p>
          </div>
          <div class="admin-table-employees__parameter main-table__column">
            <p>Роли</p>
          </div>
          <div class="admin-table-employees__parameter main-table__column">
            <p>Доступ</p>
          </div>
        </div>
      </div>
      <div class="admin-table-employees__user">
        <router-link
          class="admin-table-employees__row"
          v-for="user in paginatedUsers"
          :key="user.id"
          :to="{ name: 'AdminEmployeesView', params: { id: user.id } }"
        >
          <div class="admin-table-employees__value main-table__column">
            <p class="admin-table-employees__text">{{ user.id }}</p>
          </div>
          <div class="admin-table-employees__value main-table__column">
            <img
              src="~@/assets/images/users/avatar2.png"
              alt="user"
              class="admin-table-employees__image"
            />
          </div>
          <div class="admin-table-employees__value main-table__column">
            <p class="admin-table-employees__text">
              {{ user.name }} {{ user.surname }}
            </p>
          </div>
          <div class="admin-table-employees__value main-table__column">
            <p class="admin-table-employees__text">{{ user.email }}</p>
          </div>
          <div
            class="admin-table-employees__value admin-table-employees__roles main-table__column"
          >
            <ul class="main-table__list">
              <li v-for="role in user.roles" :key="role">
                <p
                  class="admin-table-employees__text"
                  :class="{
                    'admin-table-employees__text_blue': role == 'модератор',
                    'admin-table-employees__text_red': role == 'администратор',
                    'admin-table-employees__text_green': role == 'редактор',
                  }"
                >
                  {{ role }}
                </p>
              </li>
            </ul>
          </div>
          <div
            class="admin-table-employees__value main-table__column admin-table-employees__countries"
          >
            <ul class="main-table__list">
              <li v-for="country in user.availableCountries" :key="country">
                <div class="main-table__icon">
                  <img
                    :src="
                      require(`@/assets/images/icons/flags/${country.toLowerCase()}.svg`)
                    "
                    alt=""
                  />
                </div>
                <p class="main-table__text main-table__text_bold">
                  {{ country }}
                </p>
              </li>
            </ul>
          </div>
        </router-link>
      </div>
      <MainPaginator
        @changePaginatedItems="changeData"
        :items="filteredUsers"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import MainPaginator from "@/components/main/Paginator.vue";
export default {
  data() {
    return {
      paginatedUsers: [],
    };
  },
  components: {
    MainPaginator,
  },
  computed: {
    ...mapGetters({
      users: "Users/getListOfUsers",
      currentUser: "Users/getCurrentUser",
      availableCountries: "Main/getAvailableCountries",
    }),
    filteredUsers() {
      return this.users.filter((item) => {
        return (
          item.availableCountries.some((element) =>
            this.availableCountries.includes(element)
          ) && item.id != this.currentUser.id
        );
      });
    },
  },
  methods: {
    changeData(data) {
      this.paginatedUsers = data;
    },
  },
};
</script>
<style lang="scss">
.admin-table-employees {
  margin-top: 16px;
  &__top {
    border-radius: 8px 8px 0px 0px;
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 4fr 4fr 4fr;
    justify-items: center;
    align-items: center;
  }
  &__parameter {
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
  }
  &__text {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: #353132;
    padding: 2px 8px;
    font-weight: 700;
    border-radius: 8px;

    &_blue {
      background: #c0fbff;
    }
    &_green {
      background: #d0ffd2;
    }
    &_red {
      background: #ffdddd;
    }
    &_bold {
      font-weight: 700;
    }
  }
  &__image {
    height: 52px;
    width: 52px;
  }

  &__content {
    background: #fff;
  }
  @media screen and (min-width: 320px) and (max-width: 1280px) {
    &__image {
      width: 40px;
      height: 40px;
    }
    &__roles {
      .main-table__list {
        justify-content: center;
      }
      li {
        margin-right: 0 !important;
      }
    }
    &__countries {
      justify-content: start;
    }
  }
  @media screen and (min-width: 744px) and (max-width: 850px) {
    &__row {
      grid-template-columns: 1fr 2fr 4fr 4fr 3fr 4fr;
    }
  }
}
</style>