import { getAllProducts } from "../utils/api";
import { PayloadAction } from "./../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice, current, Dispatch } from "@reduxjs/toolkit";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  discont_price: number | null;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}

export interface IFilterOpts {
  price: {
    from: number | null;
    to: number | null;
  };
  getDiscont: boolean;
  sortMethod: "default" | "lower" | "upper";
}

interface IProductsState {
  loading: boolean;
  error: string | null;
  products: IProduct[];
  salesProducts: IProduct[];
  currentCategoryProducts: IProduct[];
  currentProduct: IProduct | null;
  filteredProducts: IProduct[];
  filterOpts: IFilterOpts;
}

const initialProductsState: IProductsState = {
  loading: false,
  error: null,
  products: [],
  salesProducts: [],
  currentCategoryProducts: [],
  filteredProducts: [],
  currentProduct: null,
  filterOpts: {
    sortMethod: "default",
    price: { from: null, to: null },
    getDiscont: null,
  },
};
export const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    getSalesProducts: (state) => {
      console.log(
        (state.salesProducts = state.products.filter(
          (product) => product.discont_price
        ))
      );
      state.salesProducts = state.products.filter(
        (product) => product.discont_price
      );
    },

    setCurrentProduct: (state, action: PayloadAction<number>) => {
      state.currentProduct = state.products[action.payload - 1];
    },

    setCurrentCategoryProducts: (state, action: PayloadAction<number>) => {
      console.log(`CATEGORY ID`, action);
      state.currentCategoryProducts = state.products.filter(
        (product) => product.categoryId === action.payload
      );
    },
    setFilterOptions: (state, action: PayloadAction<IFilterOpts>) => {
      state.filterOpts = action.payload;
    },
    setFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
      console.log("[FILTERED PRODUCTS OPTIONS]: ", current(state.filterOpts));
      console.log("[FILTERED PRODUCTS ACTION]: ", action.payload);
      const priceOpts = state.filterOpts.price;
      const discontCheck = state.filterOpts.getDiscont;

      if (priceOpts.from === null) priceOpts.from = 0;
      if (
        priceOpts.to === null ||
        priceOpts.to === 0 ||
        priceOpts.to < priceOpts.from
      )
        priceOpts.to = Infinity;

      state.filteredProducts = action.payload.filter(
        (product) =>
          product.price >= priceOpts.from &&
          product.price <= priceOpts.to &&
          (discontCheck ? product.discont_price : true)
      );

      switch (state.filterOpts.sortMethod) {
        case "lower":
          state.filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "upper":
          state.filteredProducts.sort((a, b) => b.price - a.price);
          break;
      }
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  getSalesProducts,
  setCurrentProduct,
  setCurrentCategoryProducts,
  setFilterOptions,
  setFilteredProducts,
} = productsSlice.actions;
export const fetchAllProducts = () => async (dispatch: Dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const productsReply = await getAllProducts();
    dispatch(fetchProductsSuccess(productsReply.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchProductsFailure("Fetch products failed"));
  }
};

export const productsReducer = productsSlice.reducer;
