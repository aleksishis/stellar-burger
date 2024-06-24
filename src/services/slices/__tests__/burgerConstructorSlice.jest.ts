import { TConstructorIngredient, TIngredient } from '../../../utils/types';
import reducer, {
  initialState,
  addIngredient,
  upIngredient,
  downIngredient,
  removeIngredient,
  clearBurgerConstructor,
  burgerConstructorSelector
} from '../burgerConstructorSlice';
import {
  mockBun,
  mockIngredient,
  mockBurgerConstructorStore
} from '../mockData';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid', () => ({
  v4: jest.fn()
}));

const mockedUUID = 'test-uuid';

describe('burgerConstructor slice', () => {
  beforeEach(() => {
    (uuidv4 as jest.Mock).mockReturnValue(mockedUUID);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle burgerConstructorSelector', () => {
    expect(
      burgerConstructorSelector({
        burgerConstructor: mockBurgerConstructorStore
      })
    ).toBe(mockBurgerConstructorStore.burgerConstructor);
  });

  it('should handle addIngredient for bun', () => {
    const bun: TConstructorIngredient = {
      ...mockBun,
      id: mockedUUID
    };
    const actual = reducer(initialState, addIngredient(bun));
    expect(actual.burgerConstructor.bun).toEqual(bun);
    expect(actual.burgerConstructor.ingredients).toEqual([]);
  });

  it('should handle addIngredient for ingredient', () => {
    const ingredient: TConstructorIngredient = {
      ...mockIngredient,
      id: mockedUUID
    };
    const actual = reducer(initialState, addIngredient(ingredient));
    expect(actual.burgerConstructor.bun).toBeNull();
    expect(actual.burgerConstructor.ingredients).toEqual([ingredient]);
  });

  it('should handle upIngredient', () => {
    const ingridient1 = {
      ...mockIngredient,
      id: '1'
    };

    const ingridient2 = {
      ...mockIngredient,
      id: '2'
    };

    const stateWithIngredients = {
      ...mockBurgerConstructorStore,
      burgerConstructor: {
        bun: null,
        ingredients: [ingridient1, ingridient2]
      }
    };

    const actual = reducer(stateWithIngredients, upIngredient(1));
    expect(actual.burgerConstructor.ingredients).toEqual([
      ingridient2,
      ingridient1
    ]);
  });

  it('should handle downIngredient', () => {
    const ingridient1 = {
      ...mockIngredient,
      id: '1'
    };

    const ingridient2 = {
      ...mockIngredient,
      id: '2'
    };

    const stateWithIngredients = {
      ...mockBurgerConstructorStore,
      burgerConstructor: {
        bun: null,
        ingredients: [ingridient1, ingridient2]
      }
    };

    const actual = reducer(stateWithIngredients, downIngredient(0));
    expect(actual.burgerConstructor.ingredients).toEqual([
      ingridient2,
      ingridient1
    ]);
  });

  it('should handle removeIngredient', () => {
    const stateWithIngredients = {
      ...mockBurgerConstructorStore,
      burgerConstructor: {
        bun: null,
        ingredients: [mockIngredient]
      }
    };

    const actual = reducer(
      stateWithIngredients,
      removeIngredient(mockIngredient)
    );
    expect(actual.burgerConstructor.ingredients).toEqual([]);
  });

  it('should handle clearBurgerConstructor', () => {
    const actual = reducer(
      mockBurgerConstructorStore,
      clearBurgerConstructor()
    );
    expect(actual.burgerConstructor.bun).toBeNull();
    expect(actual.burgerConstructor.ingredients).toEqual([]);
  });
});
