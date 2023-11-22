export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case 'PLACE_ORDER_REQUEST':
        return {
          loading: true,
        };
      case 'PLACE_ORDER_SUCCESS':
        return {
          loading: false,
          success: true,
        };
      case 'PLACE_ORDER_FAILED':
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getUserOrdersReducer = (state = { orders: [], loading: false, error: null }, action) => {
    switch (action.type) {
      case 'GET_USER_ORDERS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'GET_USER_ORDERS_SUCCESS':
        return {
          ...state,
          loading: false,
          orders: action.payload,
          error: null
        };
      case 'GET_USER_ORDERS_FAILED':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state
    }
  };
  