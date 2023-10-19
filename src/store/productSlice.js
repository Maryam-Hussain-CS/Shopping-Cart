import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idle",
    selectedProduct: null,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    clear(state) {
      state.data = [];
      state.status = "idle";
    },
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setStatus, clear, selectProduct } =
  productSlice.actions;
export default productSlice.reducer;
