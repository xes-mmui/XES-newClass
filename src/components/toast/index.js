import Toast from "./src/Toast.vue";

export default {
  install(Vue) {
    // 创建构造器
    const ToastConstructor = Vue.extend(Toast);
    // 将组件注册到vue的原型链
    Vue.prototype.$toast = options => {
      let toastDom = document.createElement("div");
      // 实例化toast.vue
      let instance = new ToastConstructor({
        data() {
          return {
            tips: options.tips || "", //提示文案
            duration: options.duration || 3000, //展示时长
            type: options.type || "default", //展示类型
            radius: options.radius || "0" //圆角设置
          };
        }
      }).$mount(toastDom);
      document.body.appendChild(instance.$el); // 将实例化的toast.vue插入到body
      //时间结束后隐藏
      setTimeout(() => {
        instance.tips = "";
      }, instance.duration);
      return instance;
    };
  }
};
