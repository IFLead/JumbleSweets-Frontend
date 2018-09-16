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
  loadCategories(context) {
    context.commit(
      'setCategories',
      {
        results: [
          {
            id: 1,
            name: 'Напитки',
            count: 1,
          },
          {
            id: 2,
            name: 'Батончики',
            count: 4,
          },
          {
            id: 3,
            name: 'Шоколадные пасты',
            count: 8,
          },
          {
            id: 4,
            name: 'Шоколод',
            count: 8,
          },
        ],
      }.results,
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
