<template>
  <div class="column">
    <div class="text-h5">{{ state.title }}</div>
    <div class="row">
      <div
        class="path-navig row"
        v-for="(path, index) in state.path"
        :key="index"
      >
        <router-link :to="path.path" class="text-subtitle1 text-uppercase">{{
          path.title
        }}</router-link>
        <div class="arrow relative-position">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  store,
  name: "NavigationMenu",

  data() {
    return {
      state: store.state,
    };
  },
};
</script>

<style lang="scss">
.arrow {
  min-width: 20px;
  margin: 0 10px;
  display: flex;
  justify-content: center;

  span {
    position: absolute;
    height: 2px;
    width: 37%;
    background-color: gray;
  }

  span:nth-child(1) {
    transform: rotate(45deg);
    top: 11px;
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
    bottom: 11px;
  }
}

.path-navig {
  a {
    position: relative;
    color: gray;
    display: flex;
    justify-content: center;

    &:after {
      content: " ";
      position: absolute;
      bottom: 5px;
      width: 0;
      height: 2px;
      background-color: gray;
      transition: 200ms width;
    }

    &:hover:after {
      width: 100%;
    }

    &:visited {
      color: gray;
    }
  }
}

.path-navig:last-child {
  & > a {
    color: black;

    pointer-events: none;
  }

  & > .arrow {
    display: none;
  }
}
</style>
