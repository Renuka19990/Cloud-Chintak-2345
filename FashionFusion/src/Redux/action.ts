// actions.ts
import axios from "axios";
import { Dispatch } from "redux";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LoginFailureAction, LoginSuccessAction, LogoutAction ,User} from "./actionType";

export const loginSuccess = (user: []): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<User[]>("https://mock-server-app-1.onrender.com/users");

      const users: User[] = response.data;

      const authenticatedUser = users.filter((user) => user.email === email && user.password === password);

      if (authenticatedUser.length > 0) {
        dispatch(loginSuccess(authenticatedUser));
      } else {
        dispatch(loginFailure("Invalid Username or Password"));
        console.log("Invalid Username or Password");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
