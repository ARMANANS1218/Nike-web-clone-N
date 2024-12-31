import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
export default configureStore({
  reducer: {
    cart: cartSlice,
    wishList: wishlistSlice,
  },
});
