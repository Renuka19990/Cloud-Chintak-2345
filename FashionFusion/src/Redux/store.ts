// store.ts
// import { applyMiddleware, combineReducers, createStore, Store } from "redux";
// import {thunk} from "redux-thunk";
// import { AuthReducer } from "./Reducers/AuthReducer";
// import { dataReducer } from "./fetchMenDataReducer/dataReducer";
// import { productReducer } from "./adminDataReducer/reducer";


// interface RootState {
//   auth: ReturnType<typeof AuthReducer>;
  
// }


// const rootReducer = combineReducers<RootState>({
//   auth: AuthReducer,
//   data:dataReducer,
//   Products: productReducer
// });

// const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
import productReducer from "./adminDataReducer/reducer"
import {configureStore} from "@reduxjs/toolkit";
 const store = configureStore({
  reducer:{
    // auth: AuthReducer,
    // data:dataReducer,
    Products: productReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;