/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import Vue from 'vue';
import { apolloProvider as apollo } from '../../vue-apollo';
import PRODUCT_LIST from '../../graphql/ProductList.gql';
import { productBackData, productDetailBackData } from '../data/fallBackData';
import PRODUCT_DETAILS from '../../graphql/ProductDetails.gql';
import USER_UPDATE from '../../graphql/UserUpdate.gql';

const state = {
  products: null,
  pageInfo: null,
  totalCount: 0,
};

// getters
const getters = {
  allProducts: state => state.products,
  getPageInfo: state => state.pageInfo,
  getTotalCount: state => state.totalCount,
  getCurrentProduct(state) {
    return (id) => {
      if (state.products) {
        return state.products.find(product => product.node.id === id).node;
      }
      return null;
    };
    // return id => state.products && state.products.find(product => product.node.id === id);
    // return id => state.products.find(product => product.node.id === id) || state.products;
  },
};

// mutations
const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setPageInfo(state, payload) {
    state.pageInfo = payload;
  },
  setTotalCount(state, payload) {
    state.totalCount = payload;
  },
  setProduct(state, newProduct) {
    if (!state.products) {
      state.products = [];
    }
    const productIndex = state.products.findIndex(product => product.node.id === newProduct.id);
    if (productIndex === -1) {
      state.products.push({ node: newProduct });
    } else {
      Vue.set(state.products, productIndex, { node: newProduct });
    }
  },
};

// actions
const actions = {
  async loadProducts(context, data = {}) {
    try {
      const response = await apollo.defaultClient.query({
        query: PRODUCT_LIST,
        variables: {
          first: Vue.prototype.$PAGINATE_BY, stockAvailability: 'IN_STOCK', sortBy: data.sortBy, ...data.filters,
        }, //  after: context.state.endCursor
      });
      context.commit('setProducts', response.data.products.edges);
      context.commit('setTotalCount', response.data.products.totalCount);
      context.commit('setPageInfo', response.data.products.pageInfo);
    } catch (e) {
      console.log(e);
      context.commit('setProducts', productBackData.edges);
      context.commit('setTotalCount', productBackData.totalCount);
      context.commit('setPageInfo', productBackData.pageInfo);
    }
  },
  // async getProductDetails(context, {cb, id}) {
  //   const product = state.products.edges.filter(function (product) {
  //     return product.node.id === id;
  //   });
  //   if (product) {
  //     cb(null, product.node);
  //   } else {
  //     context.dispatch('loadProductDetails', { cb, id });
  //   }
  // },
  async loadProduct(context, { cb, id }) {
    try {
      const response = await apollo.defaultClient.query({
        query: PRODUCT_DETAILS,
        variables: { id },
      });
      context.commit('setProduct', response.data.product);
      cb(null);
      // cb(new Error('Post not found.'));
    } catch (e) {
      cb(null);
      context.commit('setProduct', productDetailBackData);
    }
  },
  async updateFavourite(context, { ids, liked, userId }) {
    const variables = { id: userId };
    if (liked) {
      variables.input = { addedFavourites: ids };
    } else {
      variables.input = { removedFavourites: ids };
    }
    console.log(variables);
    const response = await apollo.defaultClient.mutate({
      mutation: USER_UPDATE,
      variables,
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
