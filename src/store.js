import { configureStore } from '@reduxjs/toolkit';
import userReducer from '././Features/user/userSlice.js';
import cartReducer from './Features/cart/cartSlice.js';
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
