import Vue from "vue";
import App from "./App.vue";
import "./style.css";
import store from "./store";

Vue.config.productionTip = false;

//modal plugin
import { vfmPlugin } from "vue-final-modal";
Vue.use(vfmPlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
