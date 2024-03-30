
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import {thunk} from "redux-thunk";
import { AuthReducer } from "./Reducers/AuthReducer";



interface RootState {
  auth: ReturnType<typeof AuthReducer>;
}

const rootReducer = combineReducers<RootState>({
  auth: AuthReducer,
});

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
