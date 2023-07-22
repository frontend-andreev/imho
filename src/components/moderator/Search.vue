<template>
  <div class="moderator-search">
    <div class="moderator-search__wrapper main-color">
      <div class="moderator-search__icon">
        <SearchIconDark v-if="isDark" />
        <SearchIcon v-else />
      </div>
      <div
        class="moderator-search__block"
        v-for="(item, index) in inputsArr"
        :key="item.search"
      >
        <AutoComplete
          class="moderator-search__input moderator-search__input_filter"
          :readonly="true"
          :isDisabled="item.search != '' ? true : false"
          :value="item.search"
          @select="select($event, item, 'search')"
          :items="['Автор', 'Заголовок', 'ID', 'Модератор', 'Дата']"
          :placeholder="'Поиск по...'"
        />
        <AutoComplete
          class="moderator-search__input"
          :class="{ 'moderator-search__input_disable': item.result != '' }"
          v-if="item.search != ''"
          :focus="true"
          :close="item.result != ''"
          :isDisabled="item.result != '' ? true : false"
          @select="select($event, item, 'result')"
          @close="deleteItem"
          :items="['Пицца', 'Или роллы?']"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SearchIcon from "@/assets/images/icons/search.svg?inline";
import SearchIconDark from "@/assets/images/icons/dark/search.svg?inline";
import AutoComplete from "@/components/main/AutoComplete";
export default {
  components: {
    SearchIcon,
    AutoComplete,
    SearchIconDark,
  },
  data() {
    return {
      inputsArr: [
        {
          search: "",
          result: "",
        },
      ],
    };
  },
  methods: {
    select(event, item, parameter) {
      item[parameter] = event;
      if (parameter == "result") {
        this.inputsArr.push({
          search: "",
          result: "",
        });
      }
    },
    deleteItem(index) {
      this.inputsArr.splice(index, 1);
    },
  },
  computed: {
    isDark() {
      return document.querySelector("body").classList.contains("dark");
    },
  },
};
</script>
<style lang="scss">
.dark .moderator-search__wrapper {
  border-color: transparent;
}
.moderator-search {
  min-width: 600px;
  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    background: #fff;
  }
  &__block {
    display: flex;
  }
  &__input {
    width: 80px;
    margin-left: 10px;
    max-width: 100%;
    padding: 2px 8px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
    &_filter {
      input {
        cursor: pointer;
      }
    }
    &_disable {
      border-color: #231f20;
      display: flex;
      input {
        padding-left: 10px;
      }
    }
    input {
      font-size: 12px;
      font-weight: 700;
      color: #231f20;
    }

    &::placeholder {
      font-size: 12px;
      font-weight: 700;
      color: #c0c0c0;
    }
  }
  &__icon {
    display: flex;
  }
  @media screen and (min-width: 744px) and (max-width: 1280px) {
    min-width: 310px;
    &__wrapper {
      padding: 6px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 744px) {
    min-width: auto;
    width: 100%;
    grid-row: 2;
    grid-column: 1 / 3;
    margin-top: 8px;
    &__wrapper {
      padding: 5px;
    }
  }
}
</style>