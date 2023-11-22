export const getAllPizzasReducer =(state={pizzas: []},action)=>{
    switch(action.type)
    {
        case 'GET_PIZZAS_REQUEST': return{
            loading:true,
            ...state
        }
        case 'GET_PIZZAS_SUCCESS': return{
            loading: false,
            pizzas: action.payload
        }
        case 'GET_PIZZAS_FAILED': return{
            loading:false,
            error:action.payload
        }
        default: return state
    }
}

export const addPizzaReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_REQUEST':
      return {
        loading: true,
        success: false,
      };
    case 'ADD_PIZZA_SUCCESS':
      return {
        loading: false,
        success: true,
        pizza: action.payload,
      };
    case 'ADD_PIZZA_FAILED':
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const removePizzaReducer = (state = {}, action) => {
  switch (action.type) {
      case 'REMOVE_PIZZA_REQUEST':
          return {
              loading: true,
          };
      case 'REMOVE_PIZZA_SUCCESS':
          // Filter out the removed pizza from the state
          return {
              loading: false,
              success: true,
              removedPizzaId: action.payload,
          };
      case 'REMOVE_PIZZA_FAILED':
          return {
              loading: false,
              error: action.payload,
          };
      default:
          return state;
  }
};
