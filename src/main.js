import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/style_propage.css";
import "./assets/css/responsive_propage.css";
import "./assets/css/stylepage.css";
import "./assets/css/responsivepage.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
