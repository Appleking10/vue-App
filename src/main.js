// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

// 定义路由组件
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

// 引入全局styl
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

// 定义路由
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
// 创建router实例
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

// 挂载在#app上
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
});

router.push('/goods');
