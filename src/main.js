import '@babel/polyfill'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import 'normalize.css/normalize.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './plugins/element';
import './styles/element-variables.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
