/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import { sumBy } from 'lodash/math';
import { fromLocalStorage, toLocalStorage } from '../../utils/storageFuncs';
import { apolloProvider } from '../../vue-apollo';
import CREATE_CHECKOUT from '../../graphql/CreateCheckout.gql';
import CREATE_CHECKOUT_PAYMENT from '../../graphql/CreateCheckoutPayment.gql';
import COMPLETE_CHECKOUT from '../../graphql/CompleteCheckout.gql';

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
  async finishCheckout({ state, dispatch, commit }, { email, paymentData }) {
    try {
      const lines = [];
      state.cartItems.forEach((item) => {
        lines.push({ variantId: item.id, quantity: item.quantity });
      });
      const responseCreateCheckout = await apolloProvider.defaultClient.query({
        query: CREATE_CHECKOUT,
        variables: {
          email,
          lines,
        },
      });
      const checkoutId = responseCreateCheckout.data.checkout.id;
      paymentData.checkoutId = checkoutId;
      paymentData.amount = state.getCartAmount();
      const responseCheckoutPayment = await apolloProvider.defaultClient.query({
        query: CREATE_CHECKOUT_PAYMENT,
        variables: {
          paymentData,
        },
      });
      const responseCompleteCheckout = await apolloProvider.defaultClient.query({
        query: COMPLETE_CHECKOUT,
        variables: {
          checkoutId,
        },
      });
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
