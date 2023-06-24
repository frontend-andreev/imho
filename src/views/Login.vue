<template>
  <div class="login">
    <div class="login__content">
      <div class="login__logo">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <form action="#" class="login__form" @submit="submitLoginForm">
        <div
          class="login__field"
          :class="{ login__field_error: errors.loginIsError }"
        >
          <StarIcon class="login__icon" />
          <input
            type="text"
            class="login__input"
            placeholder="Логин или E-mail"
            required
            v-model="currentLogin"
            @input="errors.loginIsError = false"
          />
          <ErrorIcon class="login__error" />
        </div>
        <div
          class="login__field"
          :class="{ login__field_error: errors.passwordIsError }"
        >
          <StarIcon class="login__icon" />
          <input
            type="password"
            class="login__input login__input_error"
            placeholder="Пароль"
            required
            v-model="currentPassword"
            @input="errors.passwordIsError = false"
          />
          <ErrorIcon class="login__error" />
        </div>
        <button type="submit" class="login__button">Войти</button>
      </form>
    </div>
  </div>
</template>
<script>
import StarIcon from "@/assets/images/icons/star.svg?inline";
import ErrorIcon from "@/assets/images/icons/error.svg?inline";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      errors: {
        loginIsError: false,
        passwordIsError: false,
      },
      currentLogin: "",
      currentPassword: "",
    };
  },
  components: {
    StarIcon,
    ErrorIcon,
  },
  computed: {
    ...mapGetters({
      user: "Users/getCurrentUser",
    }),
  },
  methods: {
    ...mapActions("Users", ["auth"]),
    submitLoginForm(e) {
      e.preventDefault();

      let data = {
        login: this.currentLogin,
        password: this.currentPassword,
      };
      this.auth(data).then(
        () => {
          if (this.user.roles.includes("модератор")) {
            this.$router.push({ name: "ModeratorPublicationsTableNew" });
          } else if (this.user.roles.includes("администратор")) {
            this.$router.push({ name: "AdminEmployeesTable" });
          }
          this.clearErrors();
        },
        (error) => {
          this.errors.loginIsError = error.loginIsError;
          this.errors.passwordIsError = error.passwordIsError;
        }
      );
    },
    clearErrors() {
      this.errors.loginIsError = false;
      this.errors.password = false;
    },
  },
};
</script>
<style lang="scss">
.login {
  background: rgba(226, 226, 226, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  &__content {
    padding: 24px 23px;
    margin: 0 auto;
    width: 523px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 24px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
  }
  &__field {
    display: flex;
    position: relative;

    &:first-child {
      margin-bottom: 16px;
    }
    &_error {
      input {
        color: #b90c0c;
        border-color: #b90c0c;
      }
      .login__icon {
        path {
          fill: #b90c0c;
        }
      }
      .login__error {
        display: block;
      }
    }
  }
  &__error {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  &__input {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    color: #231f20;
    font-weight: 700;
    text-indent: 15px;
    &::placeholder {
      font-size: 14px;
      font-weight: 700;
      color: #c0c0c0;
    }
  }
  &__icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__button {
    margin-top: 90px;
    text-align: center;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 700;
    color: #231f20;
    background: none;
    border: 2px solid #c0c0c0;
    border-radius: 8px;
    cursor: pointer;
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    &__content {
      width: 100%;
      padding: 14px 13px;
    }
  }
}
</style>