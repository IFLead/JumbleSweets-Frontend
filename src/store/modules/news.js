/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import { apolloProvider } from '../../vue-apollo';
import NEWS_LIST from '../../graphql/NewsList.gql';

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
  async loadNews(context) {
    if (context.state.hasNextPage) {
      const response = await apolloProvider.defaultClient.query({
        query: NEWS_LIST,
        variables: { first: 15, after: context.state.endCursor },
      });
      context.commit('pushNews', response.data.products.edges);
      context.commit('setEndCursor', response.data.products.pageInfo.endCursor);
      context.commit('setHasNextPage', response.data.products.pageInfo.hasNextPage);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};