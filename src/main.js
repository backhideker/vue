
import Vue from 'vue'
import App from './App'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router'
import './assets/css/global.css'
import shopitem from '@/components/common/shop-item.vue'
import i18n from './i18n/i18n'
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(less);
Vue.config.productionTip = false;
Vue.component("shopitem", shopitem);
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
