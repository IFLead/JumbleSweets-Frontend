/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  manufacturers: {},
};

// getters
const getters = {
  allManufacturers: state => state.manufacturers,
};

// mutations
const mutations = {
  setManufacturers(state, payload) {
    state.manufacturers = payload;
  },
};

// actions
const actions = {
  loadManufacturers(context) {
    context.commit(
      'setManufacturers',
      {
        results: [
          {
            id: 1,
            name: 'США',
          },
          {
            id: 2,
            name: 'Украина',
          },
          {
            id: 3,
            name: 'Китай',
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
