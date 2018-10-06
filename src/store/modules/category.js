import ROOT_CATEGORY_CHILDREN from '../../graphql/RootCategoryChildrenQuery.gql';
import { apolloProvider } from '../../vue-apollo';
import { categoryBackData } from '../data/fallBackData';

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
    try {
      const response = await apolloProvider.defaultClient.query({
        query: ROOT_CATEGORY_CHILDREN,
      });
      console.log(response.data.categories.edges);
      context.commit('setCategories', response.data.categories.edges);
    } catch (e) {
      context.commit('setCategories', categoryBackData);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
