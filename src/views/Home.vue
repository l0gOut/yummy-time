<template>
  <div class="q-pa-md row justify-center q-gutter-md">
    <q-card
      class="col-3"
      v-for="post in posts"
      :key="post.id"
      style="height: 400px; min-width: 200px; width: 400px"
    >
      <q-img :src="post.img" style="height: 40%" />
      <q-card-section style="height: 60%">
        <q-scroll-area style="height: 100%">
          <div class="text-body1">{{ post.title }}</div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import Warning from "../assets/news/mc36Fr9VvX8.jpg";
import Admin from "../assets/news/NflqsflL8Og.jpg";

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          img: Warning,
          title:
            "В связи с ухудшением погодных условий, возможны задержки по доставке.Приносим извинения за неудобства!В связи с ухудшением погодных условий, возможны задержки по доставке.Приносим извинения за неудобства!",
        },
        {
          id: 2,
          img: Admin,
          title: "Срочно требуется АДМИНИСТРАТОР!!! 89873958899",
        },
      ],
    };
  },
};
</script>

<style></style>
