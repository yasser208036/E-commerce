import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, thumbnail, title, description, price, discountPercentage } =
        action.payload;
      const discountPrice = (
        price -
        (price * discountPercentage) / 100
      ).toFixed(2);
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          id,
          thumbnail,
          title,
          description,
          price,
          discountPercentage,
          discountPrice,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
//  onClick={() => handleDelete(item.id)}
