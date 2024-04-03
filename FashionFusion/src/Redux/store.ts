
import productReducer from "./adminDataReducer/reducer"
import { configureStore } from "@reduxjs/toolkit";
import menSlice from "./ProductsSlice/menSlice";
import womenSlice from "./ProductsSlice/womenSlice";


const store = configureStore({
  reducer: {
    // auth: AuthReducer,
    // data:dataReducer,
    menData: menSlice,
    womenData: womenSlice,
    Products: productReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;