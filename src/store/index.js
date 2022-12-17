import Vue from "vue";
import Vuex from "vuex";

//import modules
import users from "./users";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    users,
  },
});
export default store;
