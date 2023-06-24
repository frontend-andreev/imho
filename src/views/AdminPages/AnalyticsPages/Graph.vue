<template>
  <div class="admin-analytics">
    <div class="admin-analytics__content">
      <div class="admin-analytics__body">
        <MainRow
          v-for="item in rows"
          :features="item"
          :key="item[0].property"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MainRow from "@/components/admin/Analytics/MainRow.vue";
export default {
  data() {
    return {
      rows: [
        [
          { property: "Авторов", value: "12 989" },
          { property: "Спикер", value: "1 989 (23%)", color: "#E2E2E2" },
          { property: "Спикер", value: "1 989 (23%)", color: "#FCD1A7" },
          { property: "Спикер", value: "1 989 (23%)", color: "#FFF1A3" },
        ],
        [
          { property: "Публикаций", value: "1 129 989" },
          { property: "Горячие новости", value: "1 129 989" },
          { property: "Тема дня", value: "1 129 989" },
        ],
        [
          { property: "Пользователей", value: "12 989" },
          { property: "ВЧС", value: "1 989 (23%)", weight: "500" },
          { property: "РЧК", value: "1 989 (23%)", weight: "500" },
        ],
        [
          { property: "Просмотры", value: "12 989" },
          { property: "Авторы", value: "1 989 (23%)" },
          { property: "ВЧК", value: "1 989 (23%)" },
          { property: "РЧК", value: "1 989 (23%)" },
        ],
      ],
    };
  },
  components: {
    MainRow,
  },
};
</script>
