import { useReducer } from "react";

const initialState = (food) => ({
  quantity: +food.quantity,
  price: +food.price,
});

const reducer = (state, action) => {
  const basePrice = action.payload.price / action.payload.quantity;
  switch (action.type) {
    case "INCREASE_QUANTITY":
      return {
        ...state,
        quantity: state.quantity + 1,
        price: state.price + basePrice,
      };
    case "DECREASE_QUANTITY":
      if (state.quantity > 1) {
        return {
          ...state,
          quantity: state.quantity - 1,
          price: state.price - basePrice,
        };
      }
      return state;
    default:
      return state;
  }
};

const useQuantity = (food) => {
  const [state, dispatch] = useReducer(reducer, food, initialState);

  const increaseQuantity = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { price: food.price, quantity: food.quantity },
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { price: food.price, quantity: food.quantity },
    });
  };

  return [state, increaseQuantity, decreaseQuantity];
};

export default useQuantity;
