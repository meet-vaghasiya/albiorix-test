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
    required: "{attribute} is required!",
    email: "{attribute} is not a valid Email address.",
    alpha: "Only alphabets are allowed.",
    minLength: "{attribute} should not be less than  { min }",
    maxLength: "{attribute} should not be less than  { max }",
    numeric: "Only number are allowed.",
  },
  template: CustomError,
});

Vue.use(Vuelidate);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
