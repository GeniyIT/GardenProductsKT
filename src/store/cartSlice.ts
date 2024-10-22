import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TItemCart = {
  id: number;
  image: string;
  title: string;
  price: number;
  discont_price: number | null;
  count: number;
};
export type TItemInsert = Omit<TItemCart, "count">;

export interface IItemsCart {
  [idProduct: string]: TItemCart;
}

export interface ICartState {
  items: IItemsCart;
  totalPrice: number;
}

const initialCartState: ICartState = {
  items: {},
  totalPrice: 0,
};

const updateTotalSum = (state: ICartState) => {
  state.totalPrice = Object.values(state.items).reduce(
    (sum, item) => sum + item.count * (item.discont_price ?? item.price),
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem: (state, action: PayloadAction<TItemInsert>) => {
      const item = state.items[action.payload.id];
      if (item) {
        item.count++;
      } else {
        const writetableData = { count: 1, ...action.payload };
        state.items[action.payload.id] = writetableData;
      }
      updateTotalSum(state);
    },
    decCountItem: (state, action: PayloadAction<number>) => {
      const item = state.items[action.payload];
      if (item && item.count > 1) {
        item.count--;
      } else {
        delete state.items[action.payload];
      }
      updateTotalSum(state);
    },
    incCountItem: (state, action: PayloadAction<number>) => {
      const item = state.items[action.payload];
      item.count++;
      updateTotalSum(state);
    },
    sendOrder: (state) => {
      const items = state.items;
      for (const key in items) {
        delete items[key];
      }
      updateTotalSum(state);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      delete state.items[action.payload];
      updateTotalSum(state);
    },
  },
});

export const { addItem, decCountItem, sendOrder, deleteItem, incCountItem } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
