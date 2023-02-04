import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import productsApi from "./../api/products";

const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const categories = state.products.categories;
    if (categories.length) {
      return categories;
    } else {
      const data = await productsApi.fetchAllCategories();
      return ["all", ...data];
    }
  }
);

const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const data = await productsApi.fetchAllProducts();
    return data;
  }
);

const fetchProductsInCategory = createAsyncThunk(
  "products/fetchProductsInCategory",
  async (tab, thunkAPI) => {
    const state = thunkAPI.getState();
    const selectedCategory = state.products.categories[tab];
    const data = await productsApi.fetchProductsInCategory(selectedCategory);
    return data;
  }
);

const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const data = await productsApi.fetchSingleProduct(id);
    return data;
  }
);

const initialProductsState = {
  product: [],
  products: [],
  productsLoading: false,
  categories: [],
  categoriesLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.categoriesLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesLoading = false;
      })
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsLoading = false;
      })
      .addCase(fetchProductsInCategory.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(fetchProductsInCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsLoading = false;
      })
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.productsLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.productsLoading = false;
      });
  },
});

export const productsActions = {
  fetchCategories,
  fetchAllProducts,
  fetchProductsInCategory,
  fetchSingleProduct,
};

export default productsSlice.reducer;
