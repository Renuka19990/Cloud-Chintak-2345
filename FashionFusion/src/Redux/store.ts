// store.ts
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./reduxer";


interface RootState {
  auth: ReturnType<typeof authReducer>;
}

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
});

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
