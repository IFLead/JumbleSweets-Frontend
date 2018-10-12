import TOKEN_CREATE from '../../graphql/TokenCreate.gql';
import TOKEN_REFRESH from '../../graphql/TokenRefresh.gql';
import TOKEN_VERIFY from '../../graphql/TokenVerify.gql';
import { apolloProvider } from '../../vue-apollo';

/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  token: '',
  expTime: 0,
  rememberMe: false,
};

// getters
const getters = {
  allAuthData: state => state.authData,
  getToken: state => state.token,
};

// mutations
const mutations = {
  setRememberMe(state, payload) {
    state.token = payload;
  },
};

// actions
const actions = {
  async tokenCreate(context, authData) {
    try {
      const response = await apolloProvider.defaultClient.mutate({
        mutation: TOKEN_CREATE,
        variables: authData,
      });
      console.log(response);
      context.state.token = response.data.tokenCreate.token;
      localStorage.email = authData.email;
      if (state.rememberMe) {
        localStorage.token = response.data.tokenCreate.token;
      } else {
        sessionStorage.token = response.data.tokenCreate.token;
      }
    } catch (e) {
      console.log(e);
    }
  },
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
