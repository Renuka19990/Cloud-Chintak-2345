// store.ts
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./reduxer";
import { dataReducer } from "./fetchMenDataReducer/dataReducer";


interface RootState {
  auth: ReturnType<typeof authReducer>;
}

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  data: dataReducer,
});

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
