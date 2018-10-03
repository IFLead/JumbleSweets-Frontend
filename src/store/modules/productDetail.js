import PRODUCT_DETAILS from '../../graphql/ProductDetails.gql';
import { apolloProvider } from '../../vue-apollo';

/* eslint-disable no-unused-vars,no-shadow,no-param-reassign */
const state = {
  productDetails: {},
};

// getters
const getters = {
  allProductDetails: state => state.productDetails,
};

// mutations
const mutations = {
  setProductDetails(state, payload) {
    state.productDetails = payload;
  },
};

// actions
const actions = {
  async loadProductDetails(context, { cb }) {
    try {
      const response = await apolloProvider.defaultClient.query({
        query: PRODUCT_DETAILS,
        variables: { id: 'UHJvZHVjdDoy' },
      });
      cb(null, response.data.product);
      // cb(new Error('Post not found.'));
      console.log(response.data.product);
      context.commit('setProductDetails', response.data.product);
    } catch (e) {
      const response = {
        data: {
          product: {
            id: 'UHJvZHVjdDoy',
            name: 'Ferrero Duplo (10 шт.)',
            description: '<p>Упаковка кокосовых батончиков. В упаковке 10 шт.</p>',
            seoTitle: '',
            seoDescription: 'Упаковка кокосовых батончиков. В упаковке 10 шт.',
            category: {
              id: 'Q2F0ZWdvcnk6Mg==',
              name: 'Батончики',
            },
            price: {
              amount: 90,
              currency: 'UAH',
            },
            isPublished: true,
            availableOn: '2018-09-25',
            attributes: [
              {
                attribute: {
                  name: 'Вес',
                },
                value: {
                  name: '182',
                },
              },
              {
                attribute: {
                  name: 'Страна производитель',
                },
                value: {
                  name: 'Италия',
                },
              },
            ],
            availability: {
              available: true,
              onSale: true,
              discount: {
                net: {
                  amount: 72,
                },
              },
            },
            images: {
              edges: [
                {
                  node: {
                    id: 'UHJvZHVjdEltYWdlOjE=',
                    alt: '',
                    sortOrder: 0,
                    url: 'https://avatanplus.com/files/resources/original/5a5e5b230aefb161009400e5.png',
                  },
                },
                {
                  node: {
                    id: 'UHJvZHVjdEltYWdlOjI=',
                    alt: '',
                    sortOrder: 1,
                    url: 'https://d.radikal.ru/d33/1801/fd/be27f542d15f.png',
                  },
                },
              ],
            },
            variants: {
              edges: [
                {
                  node: {
                    id: 'UHJvZHVjdFZhcmlhbnQ6Mg==',
                    name: 'Cocos',
                    stockQuantity: 1,
                    trackInventory: true,
                    images: {
                      edges: [
                        {
                          node: {
                            id: 'UHJvZHVjdEltYWdlOjI=',
                            alt: '',
                            sortOrder: 1,
                            url: 'https://d.radikal.ru/d33/1801/fd/be27f542d15f.png',
                          },
                        },
                      ],
                    },
                    priceOverride: {
                      amount: 92,
                      currency: 'UAH',
                    },
                  },
                },
                {
                  node: {
                    id: 'UHJvZHVjdFZhcmlhbnQ6MQ==',
                    name: 'Original',
                    stockQuantity: 1,
                    trackInventory: true,
                    images: {
                      edges: [
                        {
                          node: {
                            id: 'UHJvZHVjdEltYWdlOjE=',
                            alt: '',
                            sortOrder: 0,
                            url: 'https://d.radikal.ru/d33/1801/fd/be27f542d15f.png',
                          },
                        },
                      ],
                    },
                    priceOverride: null,
                  },
                },
              ],
            },
            url: '/products/ferrero-duplo-10-sht-2/',
          },
          collections: {
            edges: [],
          },
        },
      }.data.product;
      cb(null, response);
      context.commit('setProductDetails', response);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
