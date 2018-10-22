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
  async loadProducts(context, data = {}) {
    try {
      const response = await apolloProvider.defaultClient.query({
        query: PRODUCT_LIST,
        variables: { first: Vue.prototype.$PAGINATE_BY, sortBy: data.sortBy, ...data.filters }, //  after: context.state.endCursor
      });
      context.commit('setProducts', response.data.products);
      context.commit('setEndCursor', response.data.products.pageInfo.endCursor);
    } catch (e) {
      console.log(e);
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
