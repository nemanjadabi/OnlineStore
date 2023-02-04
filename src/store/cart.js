import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], numberOfItems: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => action.payload.product.id === item.id
      );
      if (itemIndex < 0) {
        state.items.push({
          ...action.payload.product,
          amount: action.payload.amount,
        });
      } else {
        state.items[itemIndex].amount += action.payload.amount;
      }
      state.numberOfItems = state.items
        .map((item) => item.amount)
        .reduce((curr, next) => curr + next, 0);
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => action.payload.product.id === item.id
      );
      state.items.splice(itemIndex, 1);
      state.numberOfItems -= action.payload.amount;
    },
    emptyCart(state) {
      state.items = [];
      state.numberOfItems = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
