import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categoriesSlice";
import { thunk } from "redux-thunk";
import { productsReducer } from "./productsSlice";
import { cartReducer } from "./cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PersistConfig } from "redux-persist";

const persistConfig: PersistConfig<unknown> = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
