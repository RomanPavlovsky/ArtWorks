import { configureStore } from "@reduxjs/toolkit";
import items from "./Slices/itemsSlice";
import categories from "./Slices/categoriesSlice";
import search from "./Slices/searchSlice";

export const store = configureStore({
  reducer: { items, categories, search },
});
