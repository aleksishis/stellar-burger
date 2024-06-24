import reducer, {
  FeedState,
  ordersSelector,
  isFeedsLoadingSelector,
  orderSelector,
  isOrderLoadingSelector,
  totalSelector,
  totalTodaySelector,
  getFeedsThunk,
  getOrderByNumberThunk
} from '../feedSlice';
import { mockFeedStore } from '../mockData';

const initialState: FeedState = {
  orders: [],
  isFeedsLoading: false,
  order: null,
  isOrderLoading: false,
  total: 0,
  totalToday: 0,
  error: null
};

describe('feed slice', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('selectors test', () => {
    it('should handle ordersSelector', () => {
      expect(
        ordersSelector({
          feed: mockFeedStore
        })
      ).toBe(mockFeedStore.orders);
    });

    it('should handle isFeedsLoadingSelector', () => {
      expect(
        isFeedsLoadingSelector({
          feed: mockFeedStore
        })
      ).toBe(mockFeedStore.isFeedsLoading);
    });

    it('should handle orderSelector', () => {
      expect(
        orderSelector({
          feed: mockFeedStore
        })
      ).toBe(mockFeedStore.order);
    });

    it('should handle isOrderLoadingSelector', () => {
      expect(
        isOrderLoadingSelector({
          feed: mockFeedStore
        })
      ).toBe(mockFeedStore.isOrderLoading);
    });

    it('should handle totalSelector', () => {
      expect(
        totalSelector({
          feed: mockFeedStore
        })
      ).toBe(mockFeedStore.total);
    });

    it('should handle totalTodaySelector', () => {
      expect(
        totalTodaySelector({
          feed: mockFeedStore
        })
      ).toBe(mockFeedStore.totalToday);
    });
  });

  describe('extraReducers test', () => {
    describe('getFeedsThunk', () => {
      it('should handle pending state', () => {
        const action = { type: getFeedsThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.isFeedsLoading).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: getFeedsThunk.rejected.type,
          error: { message: 'Failed to fetch feeds' }
        };
        const state = reducer(initialState, action);
        expect(state.isFeedsLoading).toBe(false);
        expect(state.error).toBe('Failed to fetch feeds');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = {
          orders: mockFeedStore.orders,
          total: mockFeedStore.total,
          totalToday: mockFeedStore.totalToday
        };

        const action = {
          type: getFeedsThunk.fulfilled.type,
          payload: mockResponse
        };
        const state = reducer(initialState, action);
        expect(state.isFeedsLoading).toBe(false);
        expect(state.orders).toEqual(mockResponse.orders);
        expect(state.total).toBe(mockResponse.total);
        expect(state.totalToday).toBe(mockResponse.totalToday);
      });
    });

    describe('getOrderByNumberThunk', () => {
      it('should handle pending state', () => {
        const action = { type: getOrderByNumberThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.isOrderLoading).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: getOrderByNumberThunk.rejected.type,
          error: { message: 'Failed to fetch order' }
        };
        const state = reducer(initialState, action);
        expect(state.isOrderLoading).toBe(false);
        expect(state.error).toBe('Failed to fetch order');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = {
          orders: mockFeedStore.orders
        };
        const action = {
          type: getOrderByNumberThunk.fulfilled.type,
          payload: mockResponse
        };
        const state = reducer(initialState, action);
        expect(state.isOrderLoading).toBe(false);
        expect(state.order).toEqual(mockResponse.orders[0]);
      });
    });
  });
});
