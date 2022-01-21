<template>
  <div class="q-pa-md row justify-center q-gutter-md">
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
import HotEatOne from "../assets/hotEat/hot-eat-1.jpg";
import HotEatTwo from "../assets/hotEat/hot-eat-2.jpg";
import HotEatThree from "../assets/hotEat/hot-eat-3.jpg";

export default {
  name: "CategoryEats",
  components: { Card },
  data() {
    return {
      menu: [],
    };
  },
  //   Определяет на какой вкладке находится для динамического пути(НУ БЕЗ БАЗЫ ТОЛЬКО ТАК ЕБАШИТЬ, ВРУЧНУЮ)
  mounted() {
    switch (this.$route.params.category) {
      case "hot-eat":
        this.menu.push(
          {
            id: 1,
            image: HotEatOne,
            title: "Горячий обед 1",
            description: `Кальцоне ( ветчина + сыр + чеснок) + салат "Цезарь с курицей" + напиток`,
            price: 230,
          },
          {
            id: 2,
            image: HotEatTwo,
            title: "Горячий обед 2",
            description: `Горячий ролл "Честер" ( рис, нори, пекин. капуста,краб, майонез,лосось, унаги, карт. "пай" ) + салат "греческий" + напиток`,
          },
          {
            id: 3,
            image: HotEatThree,
            title: "Горячий обед 3",
            description: `Удон с курицей+ салат Коул-Слоу + напиток`,
            price: 230,
          }
        );
    }
  },
};
</script>

<style></style>
