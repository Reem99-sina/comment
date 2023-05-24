import { configureStore } from "@reduxjs/toolkit";

import { api } from "@/features/api/api";
import  dataSlice  from "@/features/data/analyticsSlice";


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    data:dataSlice
    // properties: propertiesSlice,
    // filter: filterSlice,
    // agent: agentSlice,
    // lang: langSlice,
    // building: buildingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});