<template>
  <div class="main-paginator">
    <div class="main-paginator__content main-color main-table__column">
      <div class="main-paginator__column">
        <ul class="main-paginator__count">
          <li
            v-for="count in viewItems"
            :key="count"
            @click="changeItemsForViews(count)"
          >
            <p
              class="main-paginator__number"
              :class="{
                'main-paginator__number_active': currentCount == count,
              }"
            >
              {{ count }}
            </p>
          </li>
        </ul>
      </div>
      <div class="main-paginator__column">
        <div
          class="main-paginator__arrow"
          @click="switchPage('-')"
          :class="{ 'main-paginator__arrow_disable': pages == 1 }"
        >
          <LeftArrowIcon />
        </div>
        <ul class="main-paginator__pages">
          <li
            class="main-paginator__page"
            :class="{ 'main-paginator__page_active': page == currentPage }"
            v-for="page in viewPages"
            :key="page"
            @click="pageClick(page)"
          >
            <p>{{ page }}</p>
          </li>
          <li>
            <p class="main-paginator__page" v-if="pages > 1">
              ...
            </p>
          </li>
        </ul>
        <div
          class="main-paginator__arrow"
          @click="switchPage('+')"
          :class="{ 'main-paginator__arrow_disable': pages.length == 1 }"
        >
          <RightArrowIcon />
        </div>
      </div>
      <div class="main-paginator__column">
        <div class="main-paginator__view">
          <p>
            Просмотр {{ itemsPerPage * (currentPage - 1) + 1 }} -
            {{
              itemsPerPage * currentPage > items.length
                ? items.length
                : itemsPerPage * currentPage
            }}
            из {{ items.length }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftArrowIcon from "@/assets/images/icons/arrowLeft.svg?inline";
import RightArrowIcon from "@/assets/images/icons/arrowRight.svg?inline";
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      currentPage: 1,
      paginatedItems: [],
      itemsPerPage: 50,
      firstPage: 1,
      lastPage: 5,
      currentCount: 50,
    };
  },
  components: {
    LeftArrowIcon,
    RightArrowIcon,
  },
  mounted() {
    if (this.items) this.sendData(this.items);
  },
  computed: {
    pages() {
      let result = [];
      for (
        let i = 1;
        i < Math.ceil(this.items.length / this.itemsPerPage) + 1;
        i++
      ) {
        result.push(i);
      }
      return result;
    },
    viewPages() {
      return this.pages.slice(this.firstPage - 1, this.lastPage);
    },
    viewItems() {
      let result = [50];
      if (this.items.length > 50) {
        result.push(100);
      } else if (this.items.length > 100) {
        result.push(500);
      }
      result.push("Все");
      return result;
    },
  },
  methods: {
    pageClick(page) {
      this.currentPage = page;
      this.sendData(this.items);
    },
    sendData(data = this.items) {
      let result = [];
      if (this.itemsPerPage == "Все") {
        this.itemsPerPage = data.length;
        this.currentPage = 1;
        result = data;
      } else {
        let from = (this.currentPage - 1) * this.itemsPerPage;
        let to = from + this.itemsPerPage;
        result = data.slice(from, to);
      }
      this.$emit("changePaginatedItems", result); //Отправляем данные в родительский компонент
    },
    changeItemsForViews(count) {
      this.itemsPerPage = count;
      this.currentCount = count;
      this.sendData();
    },
    switchPage(arrow) {
      if (arrow == "+") {
        this.currentPage =
          this.pages.length > 1
            ? this.currentPage == this.pages.length
              ? this.currentPage
              : (this.currentPage += 1)
            : undefined;
        if (this.currentPage > this.lastPage) {
          this.lastPage += 1;
          this.firstPage += 1;
        }
      } else {
        this.currentPage =
          this.pages.length > 1
            ? this.currentPage == 1
              ? this.currentPage
              : (this.currentPage -= 1)
            : undefined;
        if (this.currentPage < this.firstPage) {
          this.lastPage -= 1;
          this.firstPage -= 1;
        }
      }
      this.sendData();
    },
  },
  watch: {
    items(newValue) {
      this.sendData(newValue);
    },
    pages(newValue) {
      if (newValue == 1) {
        this.currentPage = 1;
        this.sendData();
      }
    },
  },
};
</script>
<style lang="scss">
.main-paginator {
  &__content,
  &__column,
  &__count,
  &__pages {
    display: flex;
    align-items: center;
  }
  &__content {
    background: #fff;
    padding: 8px;
    justify-content: space-between;
    border-radius: 0px 0px 8px 8px;
  }
  &__count {
    li {
      position: relative;
      &:not(:last-child) {
        margin-right: 18px;
        &::after {
          content: "";
          position: absolute;
          top: -2px;
          right: -9px;
          height: 30px;
          width: 2px;
          background: #f4f4f4;
        }
      }
    }
  }
  &__number,
  &__arrow,
  &__page {
    cursor: pointer;
  }
  &__number {
    padding: 2px 8px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
    color: #b90c0c;
    border-radius: 8px;

    &_active,
    &:hover {
      background: #e11b1b !important;
      color: #fff;
      border-radius: 8px;
    }
  }
  &__arrow {
    padding: 7px 9px;
    border: 1px solid #f4f4f4;
    border-radius: 8px;
    &:hover {
      background: #e11b1b;
      path {
        fill: #fff;
      }
    }
    &_disable {
      background: none;
      border-color: rgba(192, 192, 192, 0.5);
      pointer-events: none;
      path {
        fill: rgba(192, 192, 192, 1);
      }
    }
  }
  &__page {
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    padding: 2px 8px;
    margin: 0 8px;
    border-radius: 8px;
    &_active,
    &:hover {
      color: #fff;
      background: #e11b1b !important;
    }
  }
  &__view {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
}
</style>