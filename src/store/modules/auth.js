import TOKEN_REFRESH from '../../graphql/TokenRefresh.gql';
import TOKEN_VERIFY from '../../graphql/TokenVerify.gql';
import { apolloProvider } from '../../vue-apollo';
import { auth } from '../../api/auth';

/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  authorized: false,
  lastAuth: null,

  token: null,
  expTime: 0,
};

// getters
const getters = {
  getAuthStatus: state => state.authorized,
  allAuthData: state => state.authData,
  getToken: state => state.token,
};

// mutations
const mutations = {
  setRememberMe(state, token) {
    state.token = token;
  },
  setAuthorized(state, authorized) {
    state.authorized = authorized;
  },

  authSuccess(state) {
    state.lastAuth = 'SUCCESS';
  },
  authFailure(state) {
    state.lastAuth = 'FAILURE';
  },
};

// actions
const actions = {
  // async tokenCreate(context, authData) {
  //   try {
  //     const response = await apolloProvider.defaultClient.mutate({
  //       mutation: TOKEN_CREATE,
  //       variables: authData,
  //     });
  //     console.log(response);
  //     context.state.token = response.data.tokenCreate.token;
  //     // localStorage.email = authData.email;
  //     // if (state.rememberMe) {
  //     //   localStorage.token = response.data.tokenCreate.token;
  //     // } else {
  //     //   sessionStorage.token = response.data.tokenCreate.token;
  //     // }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
  async tokenRefresh(context) {
    try {
      const response = await apolloProvider.defaultClient.mutate({
        mutation: TOKEN_REFRESH,
        variables: { token: context.state.token },
      });
      context.state.token = response.data.tokenRefresh.token;
      context.state.expTime = response.data.tokenRefresh.payload.exp;
      if (state.rememberMe) {
        localStorage.token = response.data.tokenRefresh.token;
      } else {
        sessionStorage.token = response.data.tokenRefresh.token;
      }
    } catch (e) {
      console.log(e);
    }
  },
  async tokenVerify(context) {
    try {
      const response = await apolloProvider.defaultClient.mutate({
        mutation: TOKEN_VERIFY,
        variables: { token: context.state.token },
      });
      context.state.expTime = response.data.tokenVerify.payload.exp;
    } catch (e) {
      console.log(e);
    }
  },
  // async checkAuth({ state, dispatch, commit }) {
  //   commit('setRememberMe', rememberMe);
  //   await dispatch('tokenCreate', { email, password });
  //   if (state.token) {
  //     const result = await onLogin(apolloProvider.defaultClient, state.token);
  //     if (result) {
  //       state.authorized = true;
  //     }
  //   }
  // },
  async auth({ state, dispatch, commit }, { email, password, rememberMe }) {
    auth(
      email,
      password,
      rememberMe,
      () => {
        commit('setAuthorized', true);
        commit('authSuccess');
      },
      () => {
        commit('setAuthorized', false);
        commit('authFailure');
      },
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
