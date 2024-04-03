import { Action, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NavigateFunction } from 'react-router-dom';

import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT,User} from './actionType';


export const loginData = createAsyncThunk(
  'login/loginData',
  async ({ email, password, navigate }: { email: string, password: string, navigate: NavigateFunction }, { dispatch }) => {
    try {
      const response = await axios.get<User[]>("https://mock-server-app-1.onrender.com/users");

      const users: User[] = response.data;
      console.log(response.data);
      const authenticatedUser = users.find((user) => user.email === email && user.password === password);

      if (authenticatedUser) {
        dispatch(loginSuccess(authenticatedUser));
        alert("Login successful");
        navigate("/");
      } else {
        dispatch(loginFailure("Invalid Username or Password"));
        console.log("Invalid Username or Password");
        alert("Invalid Username or Password");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);



export const loginSuccess = (user: User[]): { type: string; payload: User[] } => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string):  { type: string; payload: string }  => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = (): Action<typeof LOGOUT> => ({
  type: LOGOUT,
});
