// // actions.ts
// import axios from "axios";
// import { Dispatch } from "redux";
// import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LoginFailureAction, LoginSuccessAction, LogoutAction ,User} from "./actionType";

// export const loginSuccess = (user: []): LoginSuccessAction => ({
//   type: LOGIN_SUCCESS,
//   payload: user,
// });

// export const loginFailure = (error: string): LoginFailureAction => ({
//   type: LOGIN_FAILURE,
//   payload: error,
// });

// export const logout = (): LogoutAction => ({
//   type: LOGOUT,
// });

// export const login = (email: string, password: string) => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await axios.get<User[]>("https://mock-server-app-1.onrender.com/users");

//       const users: User[] = response.data;

//       const authenticatedUser = users.filter((user) => user.email === email && user.password === password);

//       if (authenticatedUser.length > 0) {
//         dispatch(loginSuccess(authenticatedUser));
//       } else {
//         dispatch(loginFailure("Invalid Username or Password"));
//         console.log("Invalid Username or Password");
//       }
//     } catch (error) {
//       dispatch(loginFailure(error.message));
//     }
//   };
// };
// actions.ts
// import axios from "axios";
// import { ThunkDispatch } from "redux-thunk";
// import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LoginFailureAction, LoginSuccessAction, LogoutAction, User } from "./actionType";
// import { useNavigate } from "react-router-dom";

// export const loginSuccess = (user: User[]): LoginSuccessAction => ({
//   type: LOGIN_SUCCESS,
//   payload: user,
// });

// export const loginFailure = (error: string): LoginFailureAction => ({
//   type: LOGIN_FAILURE,
//   payload: error,
// });

// export const logout = (): LogoutAction => ({
//   type: LOGOUT,
// });

// // const navigate=useNavigate();
// export const login = (email: string, password: string) => {
 
//   return async (dispatch: ThunkDispatch<any, any, any>) => {
//     try {
//       const response = await axios.get<User[]>("https://mock-server-app-1.onrender.com/users");

//       const users: User[] = response.data;
//         console.log(response.data);
//       const authenticatedUser = users.filter((user) => user.email === email && user.password === password);

//       if (authenticatedUser.length > 0) {
//         dispatch(loginSuccess(authenticatedUser));
//         alert("Login successFull")
//       //  navigate("/admin");
//       } else {
//         dispatch(loginFailure("Invalid Username or Password"));
//         console.log("Invalid Username or Password");
//         alert("Invalid Username or Password")
//       }
//     } catch (error) {
//       dispatch(loginFailure(error.message));
//     }
//   };
// };
//.................................................................


import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LoginFailureAction, LoginSuccessAction, LogoutAction, User } from "./actionType";
import { NavigateFn } from "react-router-dom";

export const loginSuccess = (user: User[]): LoginSuccessAction => ({
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

export const login = (email: string, password: string, navigate: NavigateFn) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const response = await axios.get<User[]>("https://mock-server-app-1.onrender.com/users");

      const users: User[] = response.data;
      console.log(response.data);
      const authenticatedUser = users.filter((user) => user.email === email && user.password === password);

      if (authenticatedUser.length > 0) {
        dispatch(loginSuccess(authenticatedUser));
        alert("Login successFull");
        navigate("/"); // Use navigate here
      } else {
        dispatch(loginFailure("Invalid Username or Password"));
        console.log("Invalid Username or Password");
        alert("Invalid Username or Password");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
