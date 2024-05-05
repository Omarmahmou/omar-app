import { createSlice } from "@reduxjs/toolkit";
import Product from "../../components/Product";

export const cartslice = createSlice({
  initialState: [],
  name: "cartslice",
  reducers: {
    addToCart: (state, action) => {
      const findproduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findproduct) {
        findproduct.qantity += 1;
        // code
      } else {
        const productclone = { ...action.payload, qantity: 1 };
        state.push(productclone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartslice.actions;
export default cartslice.reducer;
