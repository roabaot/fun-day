import Vue from 'vue';
import App from './App.vue';

import './components';

import './plugins';
import vuetify from '@/plugins/vuetify'

import { sync } from 'vuex-router-sync';

import router from '@/router';
import store from '@/store';

sync(store, router)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
