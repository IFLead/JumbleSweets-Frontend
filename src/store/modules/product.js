/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  products: {},
};

// getters
const getters = {
  allProducts: state => state.products,
};

// mutations
const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
};

// actions
const actions = {
  loadProducts(context) {
    context.commit(
      'setProducts',
      {
        results: [
          {
            name: 'Кола',
            photo_url: 'http://burgervsem.ru/media/plg_system_vmmagiczoom/magictoolbox_cache/80543c918ed05ba09145ba56f4b3651f/1/9/195/thumb500x500/1089504901/coca-cola-pet-15-500x500.png',
            price: 15,
            pre_disc_price: 20,
            is_top: false,
          },
          {
            name: 'Сникерс',
            photo_url: 'https://images.ua.prom.st/1015701052_w640_h640_snikers_101_gr.png',
            price: 10,
            pre_disc_price: 10,
            is_top: true,
          },
          {
            name: 'Щоколадная паста Баунти',
            photo_url: 'https://ohlala.market/wp-content/uploads/2018/03/баунти.png',
            price: 140,
            pre_disc_price: 140,
            is_top: false,
          },
        ],
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
