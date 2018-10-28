import { apolloProvider as apollo, onLogin } from '../vue-apollo';
import TOKEN_CREATE from '../graphql/TokenCreate.gql';

export async function tokenCreate(email, password) {
  const response = await apollo.defaultClient.mutate({
    mutation: TOKEN_CREATE,
    variables: { email, password },
  });
  return { user: response.data.tokenCreate.user, token: response.data.tokenCreate.token };
}

export async function auth(email, password, rememberMe, cb, cbEr) {
  const { user, token } = await tokenCreate(email, password);
  if (token) {
    const result = await onLogin(apollo.defaultClient, token);
    if (result) {
      cb({ user, token });
    }
  } else {
    cbEr();
  }
}

