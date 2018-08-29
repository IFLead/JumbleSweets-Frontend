import Vue from 'vue';
import 'normalize.css/normalize.css';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './plugins/element';
import './styles/element-variables.scss';
import YmapPlugin from 'vue-yandex-maps';

Vue.config.productionTip = false;

Vue.use(YmapPlugin);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');



