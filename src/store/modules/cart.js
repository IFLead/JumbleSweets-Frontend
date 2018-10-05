/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  cartItems: [],
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
  getCartAmount: state => state.cartItems.length,
};

// mutations
const mutations = {
  addToCart(state, {
    id, quantity, photoUrl, price, name,
  }) {
    const record = state.cartItems.find(x => x.id === id);
    if (!record) {
      const item = {
        id,
        quantity: quantity || 1,
        photoUrl,
        price,
        name,
      };
      state.cartItems.push(item);
    } else {
      record.quantity += quantity || 1;
    }
  },
  updateCartVariant(state, { id, quantity }) {
    const record = state.cartItems.find(x => x.id === id);
    if (record) {
      record.quantity = quantity;
    }
  },
  clearCart(state) {
    state.cartItems = [];
  },
  removeProductFromCart(state, id) {
    state.cartItems = state.cartItems.filter(x => x.id !== id);
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
