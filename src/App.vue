<template>
  <div class="column q-mt-md no-wrap" style="width: 70%">
    <q-resize-observer @resize="onResize"></q-resize-observer>

    <div :class="headerSize + ' no-wrap'">
      <q-img
        src="./assets/YummyTimeLogo.jpg"
        style="max-width: 200px"
        fit="contain"
      />
      <div class="column items-center justify-center">
        <a class="text-h4 q-my-sm text-no-wrap" href="tel:89302749598"
          >+7 (930) 274-95-98</a
        >
        <a class="text-h4 q-my-sm text-no-wrap" href="tel:89302749599"
          >+7 (930) 274-95-99</a
        >
      </div>
      <div class="column">
        <h6 class="text-left q-ma-xs">
          Мы находимся по адресу: г.Павлово ул.Ленина 16
        </h6>
        <h6 class="text-left q-ma-xs text-no-wrap">
          Работаем мы с 10:00 до 22:00
        </h6>
      </div>
    </div>

    <q-tabs class="bg-lime shadow-2" style="min-height: 100px" align="justify">
      <q-route-tab to="/" class="text-h4" replace>Главная</q-route-tab>
      <q-route-tab to="/menu" class="text-h4" replace>Меню</q-route-tab>
    </q-tabs>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerSize: "row items-center justify-evenly",
    };
  },

  methods: {
    onResize({ width }) {
      if (width <= 700) this.headerSize = "column items-center justify-evenly";
      else this.headerSize = "row items-center justify-evenly";
    },
  },
};
</script>

<style lang="scss">
a {
  &:link {
    color: green;
    text-decoration: none;
  }
  color: none;
}
</style>
