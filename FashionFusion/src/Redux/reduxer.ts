// reducer.ts
import { AuthActionTypes, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./actionType";

interface User {
  email: string;
  password: string;
  // Add any other properties present in your user object
}

interface InitialUserState {
  isLoggedIn: boolean;
  user: User[];
  error: string | null;
}

const initialUserState: InitialUserState = {
  isLoggedIn: false,
  user: [],
  error: null,
};

export const authReducer = (state = initialUserState, action:AuthActionTypes): InitialUserState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
        error: action.payload,
      };
    case LOGOUT:
      return initialUserState;
    default:
      return state;
  }
};
