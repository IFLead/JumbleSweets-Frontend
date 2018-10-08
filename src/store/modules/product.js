/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import Vue from 'vue';
import { apolloProvider } from '../../vue-apollo';
import PRODUCT_LIST from '../../graphql/ProductList.gql';
import { productBackData } from '../data/fallBackData';

const state = {
  products: {},
  endCursor: null,
};

// getters
const getters = {
  allProducts: state => state.products,
};

// mutations
const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setEndCursor(state, payload) {
    state.endCursor = payload;
  },
};

// actions
const actions = {
  async loadProducts(context, filters = {}) {
    try {
      const response = await apolloProvider.defaultClient.query({
        //   // It is important to not use the
        //   // ES6 template syntax for variables
        //   // directly inside the `gql` query,
        //   // because this would make it impossible
        //   // for Babel to optimize the code.
        query: PRODUCT_LIST,
        variables: { first: Vue.prototype.$PAGINATE_BY, ...filters }, //  after: context.state.endCursor
      });
      context.commit('setProducts', response.data.products);
      context.commit('setEndCursor', response.data.products.pageInfo.endCursor);
    } catch (e) {
      context.commit('setProducts', productBackData);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
