<template>
  <q-card
    style="min-height: 400px; min-width: 200px; width: 400px"
    class="column justify-baseline"
  >
    <!-- Адаптация под телефоны -->
    <q-resize-observer @resize="onResize"></q-resize-observer>
    <q-img :src="image" style="height: 60%">
      <div class="absolute-bottom text-h6">{{ title }}</div>
    </q-img>
    <!-- Добавление описания -->
    <q-card-section style="height: 20%">
      <q-scroll-area class="text-body1 text-justify" style="height: 100%">{{
        description
      }}</q-scroll-area>
    </q-card-section>
    <!-- Если есть переменная 'price' то появляется данный блок -->
    <q-card-section
      class="text-subtitle2 items-center justify-evenly relative-position no-wrap"
      :class="rowOrCol"
      style="height: 20%"
      v-if="price"
    >
      <div>Стоимость: {{ price }} &#8381;</div>
      <q-btn
        :loading="loading"
        color="lime"
        text-color="black"
        icon="shopping_cart"
        @click="loadingSimulate"
        >В корзину</q-btn
      >
    </q-card-section>
    <!-- Если нет переменной 'price' то высвечивается данный блок -->
    <q-card-section
      class="text-subtitle2 column justify-center"
      style="height: 20%"
      v-else
      >Не продается!</q-card-section
    >
  </q-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    price: Number,
    image: String,
  },
  data() {
    return {
      rowOrCol: "row",
      loading: false,
    };
  },

  methods: {
    onResize({ width }) {
      if (width >= 400) this.rowOrCol = "row";
      else this.rowOrCol = "col ";
    },

    loadingSimulate() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 5000);
    },
  },
};
</script>

<style></style>
