import { reactive } from "vue";

export const store = {
  state: reactive({
    title: "",
    path: [],
  }),

  setStore(title, path) {
    this.state.title = title;
    this.state.path = path;
  },

  setTitle(newValue) {
    this.state.title = newValue;
  },

  clearTitle() {
    this.state.title = "";
  },

  setPath(newValue) {
    this.state.path = newValue;
  },

  clearPath() {
    this.state.path = [];
  },
};
