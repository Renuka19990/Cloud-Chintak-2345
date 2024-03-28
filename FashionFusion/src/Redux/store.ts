// store.ts
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import {thunk} from "redux-thunk";
<<<<<<< HEAD
import { AuthReducer } from "./Reducers/AuthReducer";

=======
import { authReducer } from "./reduxer";
import { dataReducer } from "./fetchMenDataReducer/dataReducer";
>>>>>>> a3ab43b96930f7618d449692943aea66457d4634


interface RootState {
  auth: ReturnType<typeof AuthReducer>;
}

const rootReducer = combineReducers<RootState>({
<<<<<<< HEAD
  auth: AuthReducer,
=======
  auth: authReducer,
  data: dataReducer,
>>>>>>> a3ab43b96930f7618d449692943aea66457d4634
});

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
