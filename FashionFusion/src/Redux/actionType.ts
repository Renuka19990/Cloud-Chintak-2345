import { NavigateFunction } from "react-router-dom";

// actionType.ts
export const LOGIN_SUCCESS:string = "LOGIN_SUCCESS";
export const LOGIN_FAILURE:string = "LOGIN_FAILURE" ;
export const LOGOUT:string= "LOGOUT" 

interface User {
  email: string;
  password: string;
  navigate:NavigateFunction
  // Add any other properties present in your user object
}
