


import { loginReducer } from "./Reducers/AuthReducer";
import productReducer from "./adminDataReducer/reducer"
import {configureStore} from "@reduxjs/toolkit";
 const store = configureStore({
  reducer:{
     auth: loginReducer,
    // data:dataReducer,
    Products: productReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;