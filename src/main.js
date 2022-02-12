import Vue from "vue";
import router from "./router";
import ElementUI from "element-ui";
import "./assets/iconfont/iconfont";
import "element-ui/lib/theme-chalk/index.css";
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
import App from "./App.vue";

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
    router,
    render: (h) => h(App),
    
}).$mount("#app");