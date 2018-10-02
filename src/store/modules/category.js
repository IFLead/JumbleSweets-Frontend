import ROOT_CATEGORY_CHILDREN from '../../graphql/RootCategoryChildrenQuery.gql';
import {apolloProvider} from '../../vue-apollo';

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
      const response = {
        "data": {
          "categories": {
            "edges": [
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
                "node": {
                  "id": "Q2F0ZWdvcnk6Mg==",
                  "name": "Батончики",
                  "products": {
                    "totalCount": 2
                  }
                }
              },
              {
                "cursor": "YXJyYXljb25uZWN0aW9uOjg=",
                "node": {
                  "id": "Q2F0ZWdvcnk6MTA=",
                  "name": "Шоколадная паста",
                  "products": {
                    "totalCount": 0
                  }
                }
              }
            ]
          }
        }
      }.data.categories.edges;
      context.commit('setCategories', response);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
