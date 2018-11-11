/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import { sumBy } from 'lodash/math';
import { fromLocalStorage, toLocalStorage } from '../../utils/storageFuncs';
import { apolloProvider } from '../../vue-apollo';
import CREATE_CHECKOUT from '../../graphql/CreateCheckout.gql';
import CREATE_CHECKOUT_PAYMENT from '../../graphql/CreateCheckoutPayment.gql';
import COMPLETE_CHECKOUT from '../../graphql/CompleteCheckout.gql';
import CHECKOUT_ATTACH_CUSTOMER from '../../graphql/CheckoutAttachCustomer.gql';

const state = {
  cartItems: fromLocalStorage('cartItems', []),
};

// getters
const getters = {
  getCartItems: state => state.cartItems,
  totalPrice: (state) => {
    let price = 0;
    state.cartItems.forEach((record) => {
      price += record.price * record.quantity;
    });
    return price;
  },
  getCartAmount: state => sumBy(state.cartItems, 'quantity'),
};

// mutations
const mutations = {
  addToCart(state, {
    id, quantity, photoUrl, price, name, url,
  }) {
    const record = state.cartItems.find(x => x.id === id);
    if (!record) {
      const item = {
        id,
        quantity: quantity || 1,
        photoUrl,
        price,
        name,
        url,
      };
      state.cartItems.push(item);
    } else {
      record.quantity += quantity || 1;
    }
    toLocalStorage(state.cartItems, 'cartItems');
  },
  updateCartVariant(state, { id, quantity }) {
    const record = state.cartItems.find(x => x.id === id);
    if (record) {
      record.quantity = quantity;
    }
  },
  clearCart(state) {
    state.cartItems = [];
    toLocalStorage(state.cartItems, 'cartItems');
  },
  removeProductFromCart(state, id) {
    state.cartItems = state.cartItems.filter(x => x.id !== id);
    toLocalStorage(state.cartItems, 'cartItems');
  },
};

// actions
const actions = {
  saveCart() {
    toLocalStorage(state.cartItems, 'cartItems');
  },
  async finishCheckout({
    state, dispatch, commit, getters,
  }, { email, customerId, paymentData }) {
    try {
      const lines = [];
      state.cartItems.forEach((item) => {
        lines.push({ variantId: item.id, quantity: item.quantity });
      });
      const input = { email, lines };
      const responseCreateCheckout = await apolloProvider.defaultClient.mutate({
        mutation: CREATE_CHECKOUT,
        variables: {
          input,
        },
      });
      console.log(responseCreateCheckout);
      const checkoutId = responseCreateCheckout.data.checkoutCreate.checkout.id;
      paymentData.checkoutId = checkoutId;
      paymentData.amount = getters.totalPrice;
      const responseCheckoutPayment = await apolloProvider.defaultClient.mutate({
        mutation: CREATE_CHECKOUT_PAYMENT,
        variables: {
          input: paymentData,
        },
      });
      console.log(responseCheckoutPayment);
      // const responseCustomerAttach = await apolloProvider.defaultClient.mutate({
      //   mutation: CHECKOUT_ATTACH_CUSTOMER,
      //   variables: {
      //     checkoutId,
      //     customerId
      //   },
      // });
      // console.log(responseCustomerAttach);
      const responseCompleteCheckout = await apolloProvider.defaultClient.mutate({
        mutation: COMPLETE_CHECKOUT,
        variables: {
          checkoutId,
        },
      });
      console.log(responseCompleteCheckout);
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
