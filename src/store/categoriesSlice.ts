import { PayloadAction } from "../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getAllCategories } from "../utils/api";

export interface ICategory {
  id: number;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface ICategoriesState {
  loading: boolean;
  categories: ICategory[];
  error: string | null;
}

const inititialCategoriesState: ICategoriesState = {
  loading: false,
  categories: [],
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState: inititialCategoriesState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess: (state, action: PayloadAction<ICategory[]>) => {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} = categoriesSlice.actions;

export const fetchCategories = () => async (dispatch: Dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const reply = await getAllCategories();
    dispatch(fetchCategoriesSuccess(reply.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchCategoriesFailure("Fetch categories failed"));
  }
};

export const categoriesReducer = categoriesSlice.reducer;
