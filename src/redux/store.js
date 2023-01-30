import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "../API/contactsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

import { formReducer } from "./formSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);

