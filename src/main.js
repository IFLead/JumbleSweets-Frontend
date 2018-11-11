import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import Meta from 'vue-meta';
import 'normalize.css/normalize.css';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './plugins/element';
import './styles/element-variables.scss';
import { apolloProvider } from './vue-apollo';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

if (process.env.NODE_ENV === 'production') {
  // Here goes the DSN
  Sentry.init({
    dsn: 'https://6d9382208bdd4fc3a4a3cdc0f96f2df2@sentry.io/1316153',
    integrations: [new Sentry.Integrations.Vue({ Vue })],
  });
} else {
  // You may remove this once you are sure everything works fine
  console.debug('Not configuring Sentry, environment is', process.env.NODE_ENV);
}


Vue.prototype.$PAGINATE_BY = 2;
Vue.prototype.$JUMBLE_BOX_ENABLED = false;
Vue.prototype.$MESSAGE_DURATION = 1500;

Vue.use(Meta);

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
