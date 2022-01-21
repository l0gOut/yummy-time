<template>
  <div class="q-pa-md row justify-center q-gutter-md">
    <q-card
      class="categor-select"
      style="height: 300px; min-width: 200px; width: 400px"
      v-for="categor in categories"
      @click="routerPush(categor.path)"
      :key="categor.id"
    >
      <q-img :src="categor.image" style="height: 100%">
        <div class="absolute-bottom text-h6">{{ categor.title }}</div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
import miniRolls from "../assets/miniRolls/skZUY0psRxA.jpg";
import hotEat from "../assets/hotEat/hot-eat-1.jpg";
import bundle from "../assets/bundle/Mm6FMjtnB0A.jpg";
import burger from "../assets/burgers/wrKpMQFHFRs.jpg";
import meatless from "../assets/meatless/x0TylLUD06w.jpg";
import rolls from "../assets/rolls/A3RgG3NtiA8.jpg";
import drinkAndDeserts from "../assets/drinkAndDeserts/aSI1n5y3AdA.jpg";
import assorti from "../assets/assorti/YAnJvF3Mr68.jpg";
import hotBluds from "../assets/hotBluds/FOFvDBv6k0U.jpg";
import rise from "../assets/rise/yrueavqICNs.jpg";
import bakedRolls from "../assets/bakedRolls/fo73OqWF75Q.jpg";
import warmRolls from "../assets/warmRolls/emqt3ieTB2o.jpg";
import sushi from "../assets/sushi/Yz8GebaD7MQ.jpg";
import salatSoup from "../assets/salatsSoups/QeJKK7qDO8I.jpg";
import pizza from "../assets/pizza/hPTlhQusa80.jpg";

export default {
  data() {
    return {
      categories: [
        { id: 1, image: hotEat, title: "Горячие блюда", path: "hot-eat" },
        { id: 2, image: miniRolls, title: "Мини роллы", path: "mini-rolls" },
        { id: 3, image: bundle, title: "Супер боксы", path: "super-box" },
        { id: 4, image: burger, title: "Бургеры", path: "burgers" },
        { id: 5, image: meatless, title: "Постное меню", path: "meatless" },
        { id: 6, image: rolls, title: "Роллы", path: "rolls" },
        {
          id: 7,
          image: drinkAndDeserts,
          title: "Напитки и десерты",
          path: "drink-and-deserts",
        },
        { id: 8, image: assorti, title: "Ассорти", path: "assorti" },
        { id: 9, image: hotBluds, title: "Горячие блюда", path: "hot-bluds" },
        { id: 10, image: rise, title: "Лапша и рис", path: "rise" },
        {
          id: 11,
          image: bakedRolls,
          title: "Запеченные роллы",
          path: "baked-rolls",
        },
        { id: 12, image: warmRolls, title: "Тёплые роллы", path: "warm-rolls" },
        { id: 13, image: sushi, title: "Суши и гунканы", path: "sushi" },
        {
          id: 14,
          image: salatSoup,
          title: "Супы, салаты и рис",
          path: "salat-soup",
        },
        { id: 15, image: pizza, title: "Пицца", path: "pizza" },
      ],
    };
  },
  methods: {
    onResize({ width }) {
      console.log(width);
    },
    routerPush(path) {
      this.$router.push({ path: `/menu/${path}` });
    },
  },
};
</script>

<style>
.categor-select {
  cursor: pointer;
}
</style>
