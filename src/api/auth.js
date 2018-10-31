import to from 'await-to-js';
import { apolloProvider as apollo, onLogin } from '../vue-apollo';
import TOKEN_CREATE from '../graphql/TokenCreate.gql';
import TOKEN_VERIFY from '../graphql/TokenVerify.gql';

export async function tokenCreate(email, password) {
  const response = await apollo.defaultClient.mutate({
    mutation: TOKEN_CREATE,
    variables: { email, password },
  });
  return {
    user: response.data.tokenCreate.user,
    token: response.data.tokenCreate.token,
  };
}

export async function auth(email, password, rememberMe, cb, cbEr) {
  // const response = await tokenCreate(email, password).catch(e => console.log(e));
  let err, user, token;

  [err, { user, token }] = await to(tokenCreate(email, password));
  if (err) return cbEr();

  [err] = await to(onLogin(apollo.defaultClient, token));
  if (err) return cbEr();

  return cb({ user, token });
}

export async function tokenVerify(token, cb, cbEr) {
  let err, response;

  [err, response] = await to(apollo.defaultClient.mutate({
    mutation: TOKEN_VERIFY,
    variables: { token },
  }));
  if (err) return cbEr();

  const { user } = response.data.tokenVerify.user,
        { exp } = response.data.tokenVerify.payload;
  [err, response] = await to(onLogin(apollo.defaultClient, token));
  if (err) {
    return cbEr();
  }
  return cb({ user, token, exp });
}
