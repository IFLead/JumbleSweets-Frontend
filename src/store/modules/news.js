/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import { apolloProvider } from '../../vue-apollo';
import NEWS_LIST from '../../graphql/NewsList.gql';
import { newsBackData } from '../data/fallbackData';

const state = {
  news: [],
  endCursor: null,
  hasNextPage: true,
};

// getters
const getters = {
  allNews: state => state.news,
};

// mutations
const mutations = {
  pushNews(state, payload) {
    state.news = state.news.concat(payload);
  },
  setEndCursor(state, payload) {
    state.endCursor = payload;
  },
  setHasNextPage(state, payload) {
    state.hasNextPage = payload;
  },
};

// actions
const actions = {
  async loadNews({ state, dispatch, commit }) {
    if (state.hasNextPage) {
      try {
        const response = await apolloProvider.defaultClient.query({
          query: NEWS_LIST,
          variables: {
            first: 15,
            after: state.endCursor,
            hasAvailableOn: true,
          },
        });
        commit('pushNews', response.data.products.edges);
        commit(
          'setEndCursor',
          response.data.products.pageInfo.endCursor,
        );
        commit(
          'setHasNextPage',
          response.data.products.pageInfo.hasNextPage,
        );
      } catch (e) {
        commit('pushNews', newsBackData);
      }
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
