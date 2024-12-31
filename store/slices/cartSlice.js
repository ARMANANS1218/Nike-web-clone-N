import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        if (action.payload.isOtherColor) {
          state.cartItems.push({
            ...action.payload,
            quanity: 1,
            totalPrice: action.payload.price,
          });
        } else {
          item.quanity++;
          item.totalPrice = item.price * item.quanity;
        }
      } else {
        state.cartItems.push({
          ...action.payload,
          quanity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            product.totalPrice = product.price * action.payload.val;
          }
          return { ...product, [action.payload.key]: action.payload.val };
        }
        return product;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
