// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import mm from "./components/index"; // 引入蚂木组件库  暂时引用,后续发布npm安装
import mmUI from "./components/index.scss";
Vue.use(mm);
Vue.use(mmUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
