<template>
  <!-- Вложенность путей -->
  <NavigationMenu class="q-py-lg" />
  <div class="row justify-center q-gutter-md">
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
import NavigationMenu from "../components/NavigationMenu.vue";
import { store } from "../store.js";

export default {
  store,
  name: "CategoryEats",
  components: { Card, NavigationMenu },
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
    //   Стор сделан для реактивного изменения навигационного меню (по другому не придумал)
    renderMenu() {
      switch (this.$route.params.category) {
        case "hot-eat":
          store.setStore("Горячие блюда", [
            {
              path: "/menu",
              title: "Меню",
            },
            {
              path: "/menu/hot-eat",
              title: "Горячие блюда",
            },
          ]);
          import("../database.js").then(data => (this.menu = data.hotEat));
          break;
        case "mini-rolls":
          store.setStore("Мини роллы", [
            {
              path: "/menu",
              title: "Меню",
            },
            {
              path: "/menu/mini-rolls",
              title: "Мини роллы",
            },
          ]);
          import("../database.js").then(data => (this.menu = data.miniRolls));
          break;
        case "burgers":
          store.setStore("Бургеры", [
            {
              path: "/menu",
              title: "Меню",
            },
            {
              path: "/menu/mini-rolls",
              title: "Бургеры",
            },
          ]);

          import("../database.js").then(data => (this.menu = data.burger));
          break;
        case "drink-and-deserts":
          store.setStore("Напитки и десерты", [
            {
              path: "/menu",
              title: "Меню",
            },
            {
              path: "/menu/drink-and-deserts",
              title: "Напитки и десерты",
            },
          ]);
          import("../database.js").then(
            data => (this.menu = data.drinkAndDeserts)
          );
          break;
        case "super-box":
          store.setStore("Супер боксы", [
            {
              path: "/menu",
              title: "Меню",
            },
            {
              path: "/menu/super-box",
              title: "Супер боксы",
            },
          ]);
          import("../database.js").then(data => (this.menu = data.bundle));
          break;
        default:
          store.setStore("404", [
            {
              path: "/menu",
              title: "Меню",
            },
            {
              path: "/menu/404",
              title: "404",
            },
          ]);
      }
    },
  },
};
</script>

<style></style>
