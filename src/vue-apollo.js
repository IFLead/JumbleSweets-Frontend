import Vue from 'vue';
import VueApollo from 'vue-apollo';
// import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';
import createApolloClient from './utils/graphql-client';

// Install the vue plugin
Vue.use(VueApollo);

// Name of the localStorage item
export const AUTH_TOKEN = 'apollo-token';

// Http endpoint
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || '/graphql/';
// Files URL root
export const filesRoot =
  process.env.VUE_APP_FILES_ROOT ||
  httpEndpoint.substr(0, httpEndpoint.indexOf('/graphql'));

Vue.prototype.$filesRoot = filesRoot;

function getAuthToken(tokenName) {
  if (typeof window !== 'undefined') {
    // get the authentication token from local storage if it exists
    const token = sessionStorage.getItem(tokenName) || localStorage.getItem(tokenName);
    // return the headers to the context so httpLink can read them
    return token ? `JWT ${token}` : '';
  }
  return null;
}

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: null, // process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:4000/graphql',
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,
  // Override the way the Authorization header is set
  getAuth: getAuthToken,

};

// Call this in the Vue app file
export const apolloProvider = (function createProvider(options = {}) {
  // Create apollo client
  const apolloClient = createApolloClient({
    ...defaultOptions,
    ...options,
  });

  // Create vue apollo provider
  // eslint-disable-next-line no-shadow
  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message,
      );
    },
  });
}());

// Manually call this when user log in
export async function onLogin(apolloClient, token, rememberMe, resetStore = true) {
  const storage = rememberMe ? localStorage : sessionStorage;
  if (typeof storage === 'undefined' || !token) {
    throw new Error('User not found');
  }
  storage.setItem(AUTH_TOKEN, token);
  if (!resetStore) return;
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(
      '%cError on cache reset (login)',
      'color: orange;',
      e.message,
    );
  }
}

// Manually call this when user log out
export async function onLogout(apolloClient) {
  if (
    typeof localStorage !== 'undefined' &&
    typeof sessionStorage !== 'undefined'
  ) {
    localStorage.removeItem(AUTH_TOKEN);
    sessionStorage.removeItem(AUTH_TOKEN);
  }
  try {
    // fixme: it have an error when token is invalid
    await apolloClient.resetStore();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(
      '%cError on cache reset (logout)',
      'color: orange;',
      e.message,
    );
  }
  return true;
}
