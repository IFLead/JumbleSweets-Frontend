import PRODUCT_DETAILS from '../../graphql/ProductDetails.gql';
import { apolloProvider } from '../../vue-apollo';
import { productDetailBackData } from '../data/fullBackData';

/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  productDetails: {},
};

// getters
const getters = {
  allProductDetails: state => state.productDetails,
};

// mutations
const mutations = {
  setProductDetails(state, payload) {
    state.productDetails = payload;
  },
};

// actions
const actions = {
  async loadProductDetails(context, { cb }) {
    try {
      const response = await apolloProvider.defaultClient.query({
        query: PRODUCT_DETAILS,
        variables: { id: 'UHJvZHVjdDoy' },
      });
      cb(null, response.data.product);
      // cb(new Error('Post not found.'));
      console.log(response.data.product);
      context.commit('setProductDetails', response.data.product);
    } catch (e) {
      console.log(productDetailBackData);
      cb(null, productDetailBackData);
      context.commit('setProductDetails', productDetailBackData);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
