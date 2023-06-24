<template>
  <v-date-picker
    v-model="date"
    :select-attribute="attr"
    :update-on-input="false"
    is-required
    :is-dark="checkMode"
    :highlight="{
      style: {
        position: 'relative',
      },
    }"
    :popover="{
      keepVisibleOnInput: true,
    }"
    @input="currentArticle = null"
  >
    <template v-slot="{ inputValue, inputEvents }">
      <input
        class="bg-white border px-2 py-1 rounded moder-publications-calendar__input"
        :value="inputValue"
        v-on="inputEvents"
        readonly
      />
    </template>
    <template v-slot:day-popover="{}">
      <div class="popover-calendar__content">
        <div class="modal-date">
          <div class="modal-date__content">
            <div class="modal-date__top">
              <p class="modal-date__count">16 публикаций</p>
              <p class="modal-date__count">12</p>
            </div>
            <div class="modal-date__body">
              <ul class="modal-date__list">
                <li
                  class="modal-date__item"
                  @click="
                    currentArticle == getArticle(i)
                      ? (currentArticle = null)
                      : (currentArticle = getArticle(i))
                  "
                  v-for="i in 5"
                  :key="i"
                >
                  <p class="modal-date__title">
                    Появится ли общая Европейская армия? Часть 2
                  </p>
                  <p class="modal-date__author">Ульянова Анна</p>
                  <Modal
                    v-if="currentArticle && i == currentArticle.id"
                    @closeModal="currentArticle = null"
                    :currentArticle="currentArticle"
                    :classOfParent="'modal-date__item'"
                    :position="'top'"
                    class="publications-modal_top"
                    :style="{ top: '200%' }"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </v-date-picker>
</template>
<script>
import Modal from "@/components/main/PublicationsModal";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      date: new Date(),
      currentArticle: null,
      attr: {
        highlight: "red",
        popover: {
          label: "",
          visibility: "click",
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      getArticle: "Main/getPublicationById",
    }),
    checkMode() {
      return document.body.classList.contains('dark')
    }
  },
  components: {
    Modal,
  },
};
</script>
<style lang="scss"
>
.vc-day-popover-container {
  background: transparent !important;
  border: none;
}
.publications-calendar {
  width: 100px;
  height: 100px;
}
.moder-publications-calendar__input {
  cursor: pointer;
}
.modal-date {
  z-index: 999;
  top: 0;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  &__title, &__author {
    font-size: 10px !important;
  }
  &__count {
    &:first-child {
      font-size: 9px;
      color: #c0c0c0;
    }
    &:last-child {
      font-size: 12px;
    }
  }
  &__item {
    position: relative;
    font-size: 9px;
    margin-bottom: 2px;
    cursor: pointer;
    line-height: 150%;
    color: #353132;
    font-weight: 700;
    p.modal-date__title {
      position: relative;
      padding-left: 10px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #b90c0c;
      }
    }
    &:hover {
      p.modal-date__title,
      p.modal-date__author {
        color: #b90c0c;
      }
    }
  }
  &__content {
    padding: 8px;
    width: 250px;
    background: #fff;
    border: 1px solid #b90c0c;
    border-radius: 4px;
  }
}
.popover-calendar__content {
  position: relative;
}
</style>