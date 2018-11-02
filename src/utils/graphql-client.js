import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';


function defaultGetAuth(tokenName) {
  if (typeof window !== 'undefined') {
    // get the authentication token from local storage if it exists
    const token = window.localStorage.getItem(tokenName);
    // return the headers to the context so httpLink can read them
    return token ? `Bearer ${token}` : '';
  }
  return null;
}

// Create the apollo client
export default function createApolloClient({
  httpEndpoint,
  httpLinkOptions = {},
  tokenName = 'apollo-token',
  getAuth = defaultGetAuth,
}) {
  let link = createUploadLink({
    uri: httpEndpoint,
    ...httpLinkOptions,
  });


  // HTTP Auth header injection
  const authLink = setContext((_, { headers }) => {
    const authorization = getAuth(tokenName);
    const authorizationHeader = authorization ? { authorization } : {};
    return {
      headers: {
        ...headers,
        ...authorizationHeader,
      },
    };
  });

  // Concat all the http link parts
  link = authLink.concat(link);


  return new ApolloClient({
    link,
    // Apollo devtools
    connectToDevTools: process.env.NODE_ENV !== 'production',
  });
}

