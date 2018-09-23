import Vue from 'vue';
import ROOT_CATEGORY_CHILDREN from '../../graphql/RootCategoryChildrenQuery.gql'
import { apolloProvider } from '../../vue-apollo';

/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  categories: {},
};

// getters
const getters = {
  allCategories: state => state.categories,
};

// mutations
const mutations = {
  setCategories(state, payload) {
    state.categories = payload;
  },
};

// actions
const actions = {
  async loadCategories(context) {
    // console.log(Vue);
    const response = await apolloProvider.defaultClient.query({
      // It is important to not use the
      // ES6 template syntax for variables
      // directly inside the `gql` query,
      // because this would make it impossible
      // for Babel to optimize the code.
      query: ROOT_CATEGORY_CHILDREN,
    });
    console.log(response.data.categories.edges);
    context.commit(
      'setCategories', response.data.categories.edges,
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
