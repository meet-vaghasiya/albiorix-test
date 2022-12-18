import Vue from "vue";
import App from "./App.vue";
import "./style.css";
import store from "./store";

Vue.config.productionTip = false;

//modal plugin
import { vfmPlugin } from "vue-final-modal";
Vue.use(vfmPlugin);

// vuelidate
import Vuelidate from "vuelidate";
import CustomError from "@/components/common/CustomError.vue";
import VuelidateErrorExtractor from "vuelidate-error-extractor";
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  // Define common validation messages.
  messages: {
    required: "&#x26A0; {attribute} is required!",
    email: "&#x26A0; {attribute} is not a valid Email address.",
  },
  template: CustomError,
});

Vue.use(Vuelidate);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
