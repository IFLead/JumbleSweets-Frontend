import Vue from 'vue';
import Vuex from 'vuex';

import example from './modules/example';
import product from './modules/product';
import category from './modules/category';
import manufacturer from './modules/manufacturer';
import occasion from './modules/occasion';
import productDetail from './modules/productDetail';
import news from './modules/news';
import cart from './modules/cart';
import auth from './modules/auth';
import modals from './modules/modals';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example,
    product,
    category,
    manufacturer,
    occasion,
    productDetail,
    news,
    cart,
    auth,
    modals,
  },
  // todo: uncomment
  // strict: true,
});
