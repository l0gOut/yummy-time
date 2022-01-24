<template>
  <div class="q-py-md row justify-center q-gutter-md">
    <!-- Распечатывание плиток с меню категории -->
    <Card
      v-for="card in menu"
      :key="card.id"
      :title="card.title"
      :image="card.image"
      :description="card.description"
      :price="card.price"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "CategoryEats",
  components: { Card },
  data() {
    return {
      menu: [],
    };
  },
  mounted() {
    this.renderMenu();
  },
  updated() {
    this.renderMenu();
  },
  methods: {
    //   Определяет на какой вкладке находится, для динамического пути(НУ БЕЗ БАЗЫ ТОЛЬКО ТАК ЕБАШИТЬ, ВРУЧНУЮ)
    renderMenu() {
      switch (this.$route.params.category) {
        case "hot-eat":
          import("../database.js").then(data => (this.menu = data.hotEat));
          break;
        case "mini-rolls":
          import("../database.js").then(data => (this.menu = data.miniRolls));
          break;
      }
    },
  },
};
</script>

<style></style>
