export const productBackData = {
  data: {
    products: {
      totalCount: 2,
      edges: [
        {
          node: {
            id: 'UHJvZHVjdDoy',
            name: 'Ferrero Duplo (10 шт.)',
            url: '/products/ferrero-duplo-10-sht-2/',
            thumbnailUrl: 'https://avatanplus.com/files/resources/original/5a5e5b230aefb161009400e5.png',
            availability: {
              available: true,
              onSale: true,
              discount: {
                net: {
                  amount: 72,
                },
              },
            },
            price: {
              amount: 90,
              currency: 'UAH',
            },
          },
        },
      ],
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: true,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
      },
    },
  },
}.data.products;

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
