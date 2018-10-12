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
        query: PRODUCT_LIST,
        variables: { first: Vue.prototype.$PAGINATE_BY, ...filters },
        options: {
          context: {
            headers: {
              Authorization: localStorage.token ? localStorage.token : sessionStorage.token,
            },
          },
        }, //  after: context.state.endCursor
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
