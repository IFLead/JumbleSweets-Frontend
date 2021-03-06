import ROOT_CATEGORY_CHILDREN from '../../graphql/RootCategoryChildrenQuery.gql';
import { categoryBackData } from '../data/fallbackData';
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
  async loadCategories({ state, dispatch, commit }) {
    try {
      // const response = await apolloProvider.defaultClient.query({
      //   query: ROOT_CATEGORY_CHILDREN,
      // });
      const response = await apolloProvider.defaultClient.query({
        query: ROOT_CATEGORY_CHILDREN,
      });

      console.log(response.data.categories.edges);
      commit('setCategories', response.data.categories.edges);
    } catch (e) {
      commit('setCategories', categoryBackData);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
