export const productBackData = {
  data: {
    products: {
      totalCount: 2,
      edges: [
        {
          node: {
            id: 'UHJvZHVjdDoy',
            name: 'Ferrero Duplo (10 шт.)',
            description: '<p>Упаковка кокосовых батончиков. В упаковке 10 шт.</p>',
            seoTitle: '',
            seoDescription: 'Упаковка кокосовых батончиков. В упаковке 10 шт.',
            thumbnailUrl: '/media/__sized__/products/duplo-10er-multipack-800x800-thumbnail-255x255-70.jpg',
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
                  name: 'Страна производитель',
                },
                value: {
                  name: 'США',
                },
              },
              {
                attribute: {
                  name: 'Вес',
                },
                value: {
                  name: '182',
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
                    url: '/media/products/duplo-10er-multipack-800x800.jpg',
                  },
                },
                {
                  node: {
                    id: 'UHJvZHVjdEltYWdlOjI=',
                    alt: '',
                    sortOrder: 1,
                    url: '/media/products/duplococos-800x800.png',
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
                    price: {
                      amount: 92,
                      currency: 'UAH',
                    },
                    availability: {
                      priceDiscounted: {
                        net: {
                          amount: 18.4,
                        },
                      },
                    },
                    images: {
                      edges: [
                        {
                          node: {
                            id: 'UHJvZHVjdEltYWdlOjI=',
                            alt: '',
                            sortOrder: 1,
                            url: '/media/products/duplococos-800x800.png',
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  node: {
                    id: 'UHJvZHVjdFZhcmlhbnQ6MQ==',
                    name: 'Original',
                    stockQuantity: 1,
                    trackInventory: true,
                    price: {
                      amount: 90,
                      currency: 'UAH',
                    },
                    availability: {
                      priceDiscounted: {
                        net: {
                          amount: 18,
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
                            url: '/media/products/duplo-10er-multipack-800x800.jpg',
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
            url: '/products/ferrero-duplo-10-sht-2/',
          },
        },
        {
          node: {
            id: 'UHJvZHVjdDoz',
            name: 'Kinder Bueno mini Mix',
            description: '<p>Kinder Bueno Конфеты 3 видов ( В белом, молочном, черном шоколаде), в упаковке 24 конфеты.</p>',
            seoTitle: '',
            seoDescription: 'Kinder Bueno Конфеты 3 видов ( В белом, молочном, черном шоколаде), в упаковке 24 конфеты.',
            thumbnailUrl: '/media/__sized__/products/kinder-bueno-mini-mix-800x800-thumbnail-255x255-70.jpg',
            category: {
              id: 'Q2F0ZWdvcnk6Mg==',
              name: 'Батончики',
            },
            price: {
              amount: 126,
              currency: 'UAH',
            },
            isPublished: true,
            availableOn: null,
            attributes: [
              {
                attribute: {
                  name: 'Страна производитель',
                },
                value: {
                  name: 'США',
                },
              },
              {
                attribute: {
                  name: 'Вес',
                },
                value: {
                  name: '150',
                },
              },
            ],
            availability: {
              available: true,
              onSale: false,
              discount: null,
            },
            images: {
              edges: [
                {
                  node: {
                    id: 'UHJvZHVjdEltYWdlOjM=',
                    alt: '',
                    sortOrder: 0,
                    url: '/media/products/kinder-bueno-mini-mix-800x800.jpg',
                  },
                },
              ],
            },
            variants: {
              edges: [
                {
                  node: {
                    id: 'UHJvZHVjdFZhcmlhbnQ6Mw==',
                    name: '',
                    stockQuantity: 1,
                    trackInventory: true,
                    price: {
                      amount: 126,
                      currency: 'UAH',
                    },
                    availability: {
                      priceDiscounted: {
                        net: {
                          amount: 126,
                        },
                      },
                    },
                    images: {
                      edges: [],
                    },
                  },
                },
              ],
            },
            url: '/products/kinder-bueno-mini-mix-3/',
          },
        },
      ],
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
      },
    },
  },
}.data.products.edges;

export const categoryBackData = {
  data: {
    categories: {
      edges: [
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
          node: {
            id: 'Q2F0ZWdvcnk6Mg==',
            name: 'Батончики',
            products: {
              totalCount: 2,
            },
          },
        },
        {
          cursor: 'YXJyYXljb25uZWN0aW9uOjg=',
          node: {
            id: 'Q2F0ZWdvcnk6MTA=',
            name: 'Шоколадная паста',
            products: {
              totalCount: 0,
            },
          },
        },
      ],
    },
  },
}.data.categories.edges;

export const productDetailBackData = {
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
              url: '/media/products/duplo-10er-multipack-800x800.jpg',
            },
          },
          {
            node: {
              id: 'UHJvZHVjdEltYWdlOjI=',
              alt: '',
              sortOrder: 1,
              url: '/media/products/duplococos-800x800.png',
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
              price: {
                amount: 92,
                currency: 'UAH',
              },
              availability: {
                priceDiscounted: {
                  net: {
                    amount: 18.4,
                  },
                },
              },
              images: {
                edges: [
                  {
                    node: {
                      id: 'UHJvZHVjdEltYWdlOjI=',
                      alt: '',
                      sortOrder: 1,
                      url: '/media/products/duplococos-800x800.png',
                    },
                  },
                ],
              },
            },
          },
          {
            node: {
              id: 'UHJvZHVjdFZhcmlhbnQ6MQ==',
              name: 'Original',
              stockQuantity: 1,
              trackInventory: true,
              price: {
                amount: 90,
                currency: 'UAH',
              },
              availability: {
                priceDiscounted: {
                  net: {
                    amount: 18,
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
                      url: '/media/products/duplo-10er-multipack-800x800.jpg',
                    },
                  },
                ],
              },
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

export const newsBackData = {
  data: {
    products: {
      edges: [
        {
          node: {
            id: 'UHJvZHVjdDoy',
            name: 'Ferrero Duplo (10 шт.)',
            url: '/products/ferrero-duplo-10-sht-2/',
            availableOn: '2018-09-25',
          },
        },
      ],
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
      },
    },
  },
}.data.products.edges;
