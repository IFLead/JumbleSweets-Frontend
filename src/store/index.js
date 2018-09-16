import Vue from 'vue';
import Vuex from 'vuex';

import example from './modules/example';
import product from './modules/product';
import category from './modules/category';
import manufacturer from './modules/manufacturer';
import occasion from './modules/occasion';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example,
    product,
    category,
    manufacturer,
    occasion,
  },
});
