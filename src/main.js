// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

let app = Vue.extend(App);

let router = new VueRouter();

router.map({
  '/goods': {
    component: goods
  }
});

router.start(app, '#app');
