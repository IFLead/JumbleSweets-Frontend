// import jwtDecode from 'jwt-decode';
import TOKEN_REFRESH from '../../graphql/TokenRefresh.gql';
import { apolloProvider, AUTH_TOKEN, onLogout } from '../../vue-apollo';
import { auth, tokenVerify } from '../../api/auth';

/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  authorized: false,
  lastAuth: null,
  // toDo: поменять, когда появятся нормальные данные о пользователе
  user: { id: null, email: '' },
  token: null,
  exp: 0,
};

// getters
const getters = {
  getAuthStatus: state => state.authorized,
  getUserData: state => state.user,
  getToken: state => state.token,
  getLastAuth: state => state.lastAuth,
};

// mutations
const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setAuthorized(state, authorized) {
    state.authorized = authorized;
  },
  setExpired(state, exp) {
    state.exp = exp;
  },

  authReset(state) {
    state.lastAuth = null;
  },
  authSuccess(state) {
    state.lastAuth = 'SUCCESS';
  },
  authFailure(state) {
    state.lastAuth = 'FAILURE';
  },
  setUser(state, user) {
    state.user = user;
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
  async tokenRefresh({ state, dispatch, commit }) {
    try {
      const response = await apolloProvider.defaultClient.mutate({
        mutation: TOKEN_REFRESH,
        variables: { token: state.token },
      });
      state.token = response.data.tokenRefresh.token;
      state.expTime = response.data.tokenRefresh.payload.exp;
      if (state.rememberMe) {
        localStorage.token = response.data.tokenRefresh.token;
      } else {
        sessionStorage.token = response.data.tokenRefresh.token;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async checkAuth({ state, dispatch, commit }) {
    console.log('Проверка токена');
    const token =
      localStorage.getItem(AUTH_TOKEN) || sessionStorage.getItem(AUTH_TOKEN);

    if (!token) {
      commit('setAuthorized', false);
    } else {
      const rememberMe = localStorage.getItem(AUTH_TOKEN) === token;
      await tokenVerify(
        token,
        rememberMe,
        ({ user, token, exp }) => {
          commit('setToken', token);
          commit('setUser', user);
          commit('setExpired', exp);
          commit('setAuthorized', true);
          commit('authSuccess');
        },
        async () => {
          commit('setAuthorized', false);
          await onLogout(apolloProvider.defaultClient);
        },
      );
    }
  },

  async logOut({ state, dispatch, commit }) {
    console.log('Вызываем функцию');
    commit('setAuthorized', false);
    commit('authReset');
    commit('setToken', null);
    await onLogout(apolloProvider.defaultClient);
  },

  async auth({ state, dispatch, commit }, { email, password, rememberMe }) {
    await auth(
      email,
      password,
      rememberMe,
      ({ user, token }) => {
        commit('setToken', token);
        commit('setUser', user);
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
