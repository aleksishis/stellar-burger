import reducer, {
  UserState,
  isAuthCheckedSelector,
  loginUserRequestSelector,
  userNameSelector,
  userEmailSelector,
  userSelector,
  userOrdersSelector,
  ordersRequestSelector,
  errorSelector,
  clearErrors,
  loginUserThunk,
  logoutUserThunk,
  getUserThunk,
  registerUserThunk,
  updateUserThunk,
  getOrdersThunk
} from '../userSlice';
import { mockUserStore } from '../mockData';

const initialState: UserState = {
  isAuthenticated: false,
  loginUserRequest: false,
  user: null,
  orders: [],
  ordersRequest: false,
  error: null
};

describe('user slice', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('selectors test', () => {
    it('should handle isAuthCheckedSelector', () => {
      expect(
        isAuthCheckedSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.isAuthenticated);
    });

    it('should handle loginUserRequestSelector', () => {
      expect(
        loginUserRequestSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.loginUserRequest);
    });

    it('should handle userNameSelector', () => {
      expect(
        userNameSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.user?.name);
    });

    it('should handle userEmailSelector', () => {
      expect(
        userEmailSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.user?.email);
    });

    it('should handle userSelector', () => {
      expect(
        userSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.user);
    });

    it('should handle userOrdersSelector', () => {
      expect(
        userOrdersSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.orders);
    });

    it('should handle ordersRequestSelector', () => {
      expect(
        ordersRequestSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.ordersRequest);
    });

    it('should handle errorSelector', () => {
      expect(
        errorSelector({
          user: mockUserStore
        })
      ).toBe(mockUserStore.error);
    });
  });

  describe('reducers test', () => {
    it('should handle clearErrors', () => {
      const actual = reducer(
        {
          ...mockUserStore,
          error: 'test error'
        },
        clearErrors()
      );
      expect(actual.error).toEqual(null);
    });
  });

  describe('extraReducers test', () => {
    describe('loginUserThunk', () => {
      it('should handle pending state', () => {
        const action = { type: loginUserThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.loginUserRequest).toBe(true);
        expect(state.error).toBe(null);
      });

      it('should handle rejected state', () => {
        const action = {
          type: loginUserThunk.rejected.type,
          error: { message: 'Failed to login user' }
        };
        const state = reducer(initialState, action);
        expect(state.loginUserRequest).toBe(false);
        expect(state.error).toBe('Failed to login user');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = mockUserStore.user;

        const action = {
          type: loginUserThunk.fulfilled.type,
          payload: mockResponse
        };
        const state = reducer(initialState, action);
        expect(state.user).toEqual(mockResponse);
        expect(state.loginUserRequest).toBe(false);
        expect(state.isAuthenticated).toEqual(true);
      });
    });

    describe('logoutUserThunk', () => {
      it('should handle pending state', () => {
        const action = { type: logoutUserThunk.pending.type };
        const state = reducer(mockUserStore, action);
        expect(state.user).toBe(null);
        expect(state.loginUserRequest).toBe(false);
        expect(state.isAuthenticated).toBe(false);
      });
    });

    describe('getUserThunk', () => {
      it('should handle pending state', () => {
        const action = { type: getUserThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.loginUserRequest).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: getUserThunk.rejected.type,
          error: { message: 'Failed to get user' }
        };
        const state = reducer(initialState, action);
        expect(state.user).toEqual(null);
        expect(state.loginUserRequest).toBe(false);
        expect(state.error).toBe('Failed to get user');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = mockUserStore;

        const action = {
          type: getUserThunk.fulfilled.type,
          payload: mockResponse
        };
        const state = reducer(initialState, action);
        expect(state.user).toEqual(mockResponse.user);
        expect(state.loginUserRequest).toBe(false);
        expect(state.isAuthenticated).toEqual(true);
      });
    });

    describe('registerUserThunk', () => {
      it('should handle pending state', () => {
        const action = { type: registerUserThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.isAuthenticated).toBe(false);
        expect(state.loginUserRequest).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: registerUserThunk.rejected.type,
          error: { message: 'Failed to register user' }
        };
        const state = reducer(initialState, action);
        expect(state.isAuthenticated).toBe(false);
        expect(state.loginUserRequest).toBe(false);
        expect(state.error).toBe('Failed to register user');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = mockUserStore.user;

        const action = {
          type: registerUserThunk.fulfilled.type,
          payload: mockResponse
        };
        const state = reducer(initialState, action);
        expect(state.user).toEqual(mockResponse);
        expect(state.loginUserRequest).toBe(false);
        expect(state.isAuthenticated).toEqual(true);
      });
    });

    describe('updateUserThunk', () => {
      it('should handle pending state', () => {
        const action = { type: updateUserThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.loginUserRequest).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: updateUserThunk.rejected.type,
          error: { message: 'Failed to update user' }
        };
        const state = reducer(initialState, action);
        expect(state.loginUserRequest).toBe(false);
        expect(state.error).toBe('Failed to update user');
      });

      it('should handle fulfilled state', () => {
        const mockResponse = mockUserStore;

        const action = {
          type: updateUserThunk.fulfilled.type,
          payload: {
            user: mockResponse.user
          }
        };
        const state = reducer(initialState, action);
        expect(state.user).toEqual(mockResponse.user);
        expect(state.loginUserRequest).toBe(false);
        expect(state.isAuthenticated).toEqual(true);
      });
    });

    describe('getOrdersThunk', () => {
      it('should handle pending state', () => {
        const action = { type: getOrdersThunk.pending.type };
        const state = reducer(initialState, action);
        expect(state.ordersRequest).toBe(true);
      });

      it('should handle rejected state', () => {
        const action = {
          type: getOrdersThunk.rejected.type,
          error: { message: 'Failed to get orders' }
        };
        const state = reducer(initialState, action);
        expect(state.error).toBe('Failed to get orders');
        expect(state.ordersRequest).toBe(false);
      });

      it('should handle fulfilled state', () => {
        const mockResponse = mockUserStore;

        const action = {
          type: getOrdersThunk.fulfilled.type,
          payload: mockResponse.orders
        };
        const state = reducer(initialState, action);
        expect(state.orders).toEqual(mockResponse.orders);
        expect(state.ordersRequest).toBe(false);
      });
    });
  });
});
