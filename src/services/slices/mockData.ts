import { burgerConstructorState } from './burgerConstructorSlice';

export const mockStore = {
  ingredients: [
    {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
    },
    {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
    }
  ],
  loading: false,
  orderModalData: {
    ingredients: ['testid1', 'testid2'],
    _id: '664e973297ede0001d06bdbe',
    status: 'done',
    name: 'Флюоресцентный люминесцентный бургер',
    createdAt: '2024-05-23T01:09:06.622Z',
    updatedAt: '2024-05-23T01:09:06.967Z',
    number: 40682
  },
  orderRequest: false,
  user: {
    name: 'testUser',
    email: 'test@mail.com'
  },
  orders: [
    {
      _id: '664e927097ede0001d06bdb9',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-05-23T00:48:48.039Z',
      updatedAt: '2024-05-23T00:48:48.410Z',
      number: 40680
    },
    {
      _id: '664e85e497ede0001d06bda7',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-05-22T23:55:16.472Z',
      updatedAt: '2024-05-22T23:55:16.866Z',
      number: 40679
    }
  ],
  totalOrders: 1000,
  ordersToday: 20,
  userOrders: [
    {
      _id: '6627770797ede0001d067400',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-04-23T08:53:27.817Z',
      updatedAt: '2024-04-23T08:53:28.481Z',
      number: 38671
    },
    {
      _id: '664e927097ede0001d06bdb9',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-05-23T00:48:48.039Z',
      updatedAt: '2024-05-23T00:48:48.410Z',
      number: 40680
    }
  ],
  isAuthenticated: true,
  isInit: false,
  isModalOpened: false,
  errorText: 'test error text'
};

export const mockIngredient = {
  _id: '643d69a5c3f7b9001cfa0941',
  id: 'mock-ingridient-id-1',
  name: 'Биокотлета из марсианской Магнолии',
  type: 'main',
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
};

export const mockBun = {
  _id: '643d69a5c3f7b9001cfa093c',
  id: 'mock-bun-id-1',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
};

export const mockBurgerConstructorStore: burgerConstructorState = {
  burgerConstructor: {
    bun: {
      ...mockBun,
      id: 'mock-bun-id-1'
    },
    ingredients: [
      {
        ...mockIngredient,
        id: 'mock-ingridient-id-1',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
      },
      {
        ...mockIngredient,
        id: 'mock-ingridient-id-2',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
      },
      {
        ...mockIngredient,
        id: 'mock-ingridient-id-3',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
      }
    ]
  },
  error: null
};

export const mockFeedStore = {
  orders: [
    {
      _id: '664e927097ede0001d06bdb9',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-05-23T00:48:48.039Z',
      updatedAt: '2024-05-23T00:48:48.410Z',
      number: 40680
    },
    {
      _id: '664e85e497ede0001d06bda7',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-05-22T23:55:16.472Z',
      updatedAt: '2024-05-22T23:55:16.866Z',
      number: 40679
    }
  ],
  isFeedsLoading: false,
  order: {
    ingredients: ['testid1', 'testid2'],
    _id: '664e973297ede0001d06bdbe',
    status: 'done',
    name: 'Флюоресцентный люминесцентный бургер',
    createdAt: '2024-05-23T01:09:06.622Z',
    updatedAt: '2024-05-23T01:09:06.967Z',
    number: 40682
  },
  isOrderLoading: false,
  total: 1000,
  totalToday: 20,
  error: null
};

export const mockIngridientsStore = {
  ingredients: [
    {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
    },
    {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
    }
  ],
  isIngredientsLoading: false,
  error: null
};

export const mockOrderStore = {
  order: {
    ingredients: ['testid1', 'testid2'],
    _id: '664e973297ede0001d06bdbe',
    status: 'done',
    name: 'Флюоресцентный люминесцентный бургер',
    createdAt: '2024-05-23T01:09:06.622Z',
    updatedAt: '2024-05-23T01:09:06.967Z',
    number: 40682
  },
  isOrderLoading: false,
  error: null
};

export const mockUserStore = {
  isAuthenticated: false,
  loginUserRequest: false,
  user: {
    name: 'testUser',
    email: 'test@mail.com'
  },
  orders: [
    {
      _id: '664e927097ede0001d06bdb9',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-05-23T00:48:48.039Z',
      updatedAt: '2024-05-23T00:48:48.410Z',
      number: 40680
    },
    {
      _id: '664e85e497ede0001d06bda7',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-05-22T23:55:16.472Z',
      updatedAt: '2024-05-22T23:55:16.866Z',
      number: 40679
    }
  ],
  ordersRequest: false,
  error: null
};
