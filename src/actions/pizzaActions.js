import axios from 'axios';
export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' });
  
    try {
        const response = await axios.get('https://mern-wnei.onrender.com/api/pizzas/getallpizzas');
      console.log(response);
      dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'GET_PIZZAS_FAILED', payload: error });
    }
  };


  export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: 'ADD_PIZZA_REQUEST' });
  
    try {
      const response = await axios.post('https://mern-wnei.onrender.com/api/pizzas/add-item', pizza);
      console.log(response);
      dispatch({ type: 'ADD_PIZZA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
    }
  };
  
  export const removePizza = (pizzaId) => async (dispatch) => {
    dispatch({ type: 'REMOVE_PIZZA_REQUEST' });
    
    try {
        // Make a request to your backend to delete the pizza by ID
        await axios.delete(`/api/pizzas/remove-item/${pizzaId}`);
        dispatch({ type: 'REMOVE_PIZZA_SUCCESS', payload: pizzaId });
    } catch (error) {
        dispatch({ type: 'REMOVE_PIZZA_FAILED', payload: error });
    }
};
  


export const editPizza = (pizza) => async (dispatch) => {
  dispatch({ type: 'ADD_PIZZA_REQUEST' });

  try {
    const response = await axios.post('https://mern-wnei.onrender.com/api/pizzas/add-item', pizza);
    console.log(response);
    dispatch({ type: 'ADD_PIZZA_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
  }
};