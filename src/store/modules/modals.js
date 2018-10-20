/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  insideShow: false,
  repeatShow: false,
};

// getters
const getters = {
  getInsideShow: state => state.insideShow,
  getRepeatShow: state => state.repeatShow,
};

// mutations
const mutations = {
  setInsideShow(state, payload) {
    state.insideShow = payload;
  },
  setRepeatShow(state, payload) {
    state.repeatShow = payload;
  },
};

// actions
const actions = {
};

export default {
  state,
  getters,
  actions,
  mutations,
};
