/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import { apolloProvider } from '../../vue-apollo';
import PRODUCT_LIST from '../../graphql/ProductList.gql';

const state = {
  products: {},
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
};

// actions
const actions = {
  async loadProducts(context) {
    const response = await apolloProvider.defaultClient.query({
    //   // It is important to not use the
    //   // ES6 template syntax for variables
    //   // directly inside the `gql` query,
    //   // because this would make it impossible
    //   // for Babel to optimize the code.
    query: PRODUCT_LIST,
     });
    // console.log(response.data.products.edges);
    context.commit(
      'setProducts', response.data.products.edges,
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
