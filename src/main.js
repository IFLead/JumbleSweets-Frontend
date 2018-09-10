import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
import 'normalize.css/normalize.css';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import './plugins/element';
import './styles/element-variables.scss';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

Vue.use(YmapPlugin);


new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');

