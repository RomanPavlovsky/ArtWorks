import { configureStore } from "@reduxjs/toolkit";
import items from "./Slices/itemsSlice";
import categories from "./Slices/categoriesSlice";
import search from "./Slices/searchSlice";
import modal from "./Slices/modalSlice";

export const store = configureStore({
  reducer: { items, categories, search, modal },
});
