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
// import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

Vue.use(YmapPlugin);
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid', // the property name that vue-meta uses to determine whether to overwrite or append a tag
});
new Vue({
  router,
  store,
  // apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');

