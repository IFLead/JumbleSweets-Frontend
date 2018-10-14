import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
import Meta from 'vue-meta';
import 'normalize.css/normalize.css';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import './plugins/element';
import './styles/element-variables.scss';
import { apolloProvider } from './vue-apollo';


Vue.config.productionTip = process.env.NODE_ENV === 'production';
Vue.prototype.$PAGINATE_BY = 2;

Vue.use(YmapPlugin);
Vue.use(Meta);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
