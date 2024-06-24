import reducer, {
  OrderState,
  isOrderLoadingSelector,
  orderSelector,
  orderBurgerThunk
} from '../orderSlice';
import { mockOrderStore } from '../mockData';

const initialState: OrderState = {
  order: null,
  isOrderLoading: false,
  error: null
};

describe('order slice', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('selectors test', () => {
    it('should handle isOrderLoadingSelector', () => {
      expect(
        isOrderLoadingSelector({
          order: mockOrderStore
        })
      ).toBe(mockOrderStore.isOrderLoading);
    });

    it('should handle orderSelector', () => {
      expect(
        orderSelector({
          order: mockOrderStore
        })
      ).toBe(mockOrderStore.order);
    });
  });

  describe('extraReducers test', () => {
    describe('orderBurgerThunk', () => {
      it('should handle pending state', () => {
        const action = { type: orderBurgerThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.isOrderLoading).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: orderBurgerThunk.rejected.type,
          error: { message: 'Failed to fetch feeds' }
        };
        const state = reducer(initialState, action);
        expect(state.isOrderLoading).toBe(false);
        expect(state.error).toBe('Failed to fetch feeds');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = mockOrderStore.order;

        const action = {
          type: orderBurgerThunk.fulfilled.type,
          payload: {
            order: mockResponse
          }
        };
        const state = reducer(initialState, action);
        expect(state.isOrderLoading).toBe(false);
        expect(state.order).toEqual(mockResponse);
      });
    });
  });
});
