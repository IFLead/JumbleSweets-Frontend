import Vue from 'vue';
import Vuex from 'vuex';

import example from './modules/example';
import product from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example,
    product,
  },
});
