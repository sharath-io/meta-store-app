export const  cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const newProduct = state.products.find(
          (product) => product._id === action.payload
        );
        return {
          ...state,
          cart: [...state.cart, { ...newProduct, qty: 1 }],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((product) => product._id !== action.payload),
        };
      case "ADD_QTY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      case "SUB_QTY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload ? { ...item, qty: item.qty - 1 } : item
          ),
        };
      default:
        return state;
    }
  };