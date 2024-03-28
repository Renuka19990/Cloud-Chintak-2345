// actionType.ts
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAILURE = "LOGIN_FAILURE" as const;
export const LOGOUT = "LOGOUT" as const;

interface User {
  email: string;
  password: string;
  // Add any other properties present in your user object
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User[];
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginSuccessAction | LoginFailureAction | LogoutAction;
