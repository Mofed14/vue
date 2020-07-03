import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.scss";

Vue.config.productionTip = false;

import VueToast from "vue-toast-notification";
// Import one of available themes
import "vue-toast-notification/dist/theme-default.css";
//import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
let instance = Vue.$toast.open("You did it!");
//Vue.$toast.open({/* options */});

// Close specific toast
instance.close();
// Close all opened toast immediately
Vue.$toast.clear();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
