/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  occasions: {},
};

// getters
const getters = {
  allOccasions: state => state.occasions,
};

// mutations
const mutations = {
  setOccasions(state, payload) {
    state.occasions = payload;
  },
};

// actions
const actions = {
  loadOccasions(context) {
    context.commit(
      'setOccasions',
      {
        results: [
          {
            id: 1,
            name: 'ДР',
          },
          {
            id: 2,
            name: 'Поминки',
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
