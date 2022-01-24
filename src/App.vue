<template>
  <div class="column q-mt-md no-wrap" style="width: 90%">
    <q-resize-observer @resize="onResize"></q-resize-observer>

    <div :class="headerSize + ' no-wrap'">
      <q-img
        src="./assets/YummyTimeLogo.jpg"
        style="max-width: 200px; cursor: pointer"
        fit="contain"
        @click="() => this.$router.push('/')"
      />
      <!-- Номера для связи с компанией -->
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
    <!-- Навигация по сайту с компьютера -->
    <q-tabs
      v-if="headerSize[0] === 'r'"
      class="bg-lime shadow-2"
      style="min-height: 100px"
      align="justify"
    >
      <q-route-tab to="/" class="text-h4" replace>Главная</q-route-tab>
      <q-route-tab to="/menu" class="text-h4" replace>Меню</q-route-tab>
    </q-tabs>
    <!-- Бургер меню для мобильных устройств  -->
    <div v-else class="fixed-top-right" style="height: 100vh; z-index: 1">
      <input
        id="burger"
        :v-model="checkboxBurger"
        class="hidden"
        type="checkbox"
      />
      <label class="burger-icon" for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <!-- Всплывающее меню при нажатии на иконку -->
      <div class="burger-navigation column items-center">
        <div style="width: 100%">
          <!-- Навигация по главным страницам сайта -->
          <h4 class="text-center">Навигация</h4>
          <q-tabs vertical>
            <q-route-tab to="/" class="text-h6" replace>Главная</q-route-tab>
            <q-route-tab to="/menu" class="text-h6" replace>Меню</q-route-tab>
          </q-tabs>
        </div>
        <div style="width: 100%">
          <!-- Навигация по категориям еды -->
          <h4 class="text-center">Меню</h4>
          <q-tabs vertical>
            <q-route-tab to="/menu/hot-eat" class="text-h6" replace
              >Горячие блюда</q-route-tab
            >
            <q-route-tab to="/menu/mini-rolls" class="text-h6" replace
              >Мини роллы</q-route-tab
            >
            <q-route-tab to="/menu/burgers" class="text-h6" replace
              >Бургеры</q-route-tab
            >
          </q-tabs>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerSize: "row items-center justify-evenly",
      checkboxBurger: false,
    };
  },

  methods: {
    // Блоки становятся по вертикали при изменении блока шапки, меньше 700 пикселей, иначе все становится в ряд
    onResize({ width }) {
      if (width <= 700) this.headerSize = "column items-center justify-evenly";
      else {
        this.headerSize = "row items-center justify-evenly";
        this.checkboxBurger = false;
      }
    },
  },
};
</script>

<style lang="scss">
.burger-icon {
  display: flex;
  width: 48px;
  height: 48px;
  position: fixed;
  top: 16px;
  right: 16px;
  justify-content: space-between;

  flex-direction: column;

  > span {
    background-color: green;
    height: 4px;
    border-radius: 25px;
    transition: 200ms;
  }

  > span:nth-child(1) {
    width: 50%;
  }

  > span:nth-child(2) {
    width: 100%;
  }

  > span:nth-child(3) {
    width: 75%;
  }
}

.burger-navigation {
  background-color: rgba($color: #000000, $alpha: 0.9);
  width: 0;
  float: right;
  height: 100%;
  transition: 200ms width;
  padding: 80px 0 0 0;
  color: white;

  h4 {
    border-width: 2px 0;
    border-style: solid;
    border-color: white;
    margin: 0;
  }
}

#burger:checked {
  ~ label {
    > span:nth-child(1) {
      border-radius: 25px 0 0 25px;
      transform: translate(3px, 13px) rotate(45deg);
    }
    > span:nth-child(2) {
      transform: rotate(-45deg);
    }
    > span:nth-child(3) {
      border-radius: 0 25px 25px 0;
      width: 50%;
      transform: translate(21px, -13px) rotate(45deg);
    }
  }

  ~ .burger-navigation {
    width: 120%;
  }
}

a {
  &:link {
    color: green;
    text-decoration: none;
  }
  color: none;
}
</style>
