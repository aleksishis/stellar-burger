import reducer, {
  IngredientsState,
  ingredientsSelector,
  isIngredientsLoadingSelector,
  getIngredientsThunk
} from '../ingredientsSlice';
import { mockIngridientsStore } from '../mockData';

const initialState: IngredientsState = {
  ingredients: [],
  isIngredientsLoading: false,
  error: null
};

describe('ingridients slice', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('selectors test', () => {
    it('should handle ingredientsSelector', () => {
      expect(
        ingredientsSelector({
          ingredients: mockIngridientsStore
        })
      ).toBe(mockIngridientsStore.ingredients);
    });

    it('should handle isIngredientsLoadingSelector', () => {
      expect(
        isIngredientsLoadingSelector({
          ingredients: mockIngridientsStore
        })
      ).toBe(mockIngridientsStore.isIngredientsLoading);
    });
  });

  describe('extraReducers test', () => {
    describe('getIngredientsThunk', () => {
      it('should handle pending state', () => {
        const action = { type: getIngredientsThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.isIngredientsLoading).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: getIngredientsThunk.rejected.type,
          error: { message: 'Failed to fetch feeds' }
        };
        const state = reducer(initialState, action);
        expect(state.isIngredientsLoading).toBe(false);
        expect(state.error).toBe('Failed to fetch feeds');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = mockIngridientsStore.ingredients;

        const action = {
          type: getIngredientsThunk.fulfilled.type,
          payload: mockResponse
        };
        const state = reducer(initialState, action);
        expect(state.isIngredientsLoading).toBe(false);
        expect(state.ingredients).toEqual(mockResponse);
      });
    });
  });
});
