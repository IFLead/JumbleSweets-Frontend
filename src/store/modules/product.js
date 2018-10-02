/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
import Vue from 'vue';
import { apolloProvider } from '../../vue-apollo';
import PRODUCT_LIST from '../../graphql/ProductList.gql';

const state = {
  products: {},
  endCursor: null,
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
  setEndCursor(state, payload) {
    state.endCursor = payload;
  },
};

// actions
const actions = {
  async loadProducts(context) {
    try {
      const response = await apolloProvider.defaultClient.query({
        //   // It is important to not use the
        //   // ES6 template syntax for variables
        //   // directly inside the `gql` query,
        //   // because this would make it impossible
        //   // for Babel to optimize the code.
        query: PRODUCT_LIST,
        variables: {first: Vue.prototype.$PAGINATE_BY, after: context.state.endCursor},
      });
      context.commit('setProducts', response.data.products);
      context.commit('setEndCursor', response.data.products.pageInfo.endCursor);
    } catch (e) {
      const response = {
        "data": {
          "products": {
            "totalCount": 2,
            "edges": [
              {
                "node": {
                  "id": "UHJvZHVjdDoy",
                  "name": "Ferrero Duplo (10 шт.)",
                  "url": "/products/ferrero-duplo-10-sht-2/",
                  "thumbnailUrl": "https://avatanplus.com/files/resources/original/5a5e5b230aefb161009400e5.png",
                  "availability": {
                    "available": true,
                    "onSale": true,
                    "discount": {
                      "net": {
                        "amount": 72
                      }
                    }
                  },
                  "price": {
                    "amount": 90,
                    "currency": "UAH"
                  }
                }
              }
            ],
            "pageInfo": {
              "hasPreviousPage": false,
              "hasNextPage": true,
              "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",
              "endCursor": "YXJyYXljb25uZWN0aW9uOjA="
            }
          }
        }
      }.data.products;
      context.commit('setProducts', response);
    }
    // console.log(response.data.products.edges);

  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
