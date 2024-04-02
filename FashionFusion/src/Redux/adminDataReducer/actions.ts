import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
//  import { RootState } from "../store"; 
import { IS_ERROR, IS_KIDS_SUCCESS, IS_LOADING, IS_MEN_SUCCESS, IS_USERS_SUCCESS, IS_WOMEN_SUCCESS } from "./actionType";


// Define action creators

export const getLoading = (): Action<typeof IS_LOADING> => {
  return { type: IS_LOADING };
};

export const getError = (): Action<typeof IS_ERROR> => {
  return { type: IS_ERROR };
};

export const getMenSuccess = (payload: any): { type: string; payload: any } => {
  return { type: IS_MEN_SUCCESS, payload };
};

export const getWomenSuccess = (payload: any): { type: string; payload: any } => {
  return { type: IS_WOMEN_SUCCESS, payload };
};

export const getKidSuccess = (payload: any): { type: string; payload: any } => {
  return { type: IS_KIDS_SUCCESS, payload };
};

export const getUserSuccess = (payload: any): { type: string; payload: any } => {
  return { type: IS_USERS_SUCCESS, payload };
};

// Define async action creators using Thunk
export const getMenData = (url: string): ThunkAction<void, any,null, Action<string>> => async (dispatch) => {
  try {
    dispatch(getLoading());

    let res = await fetch(url);
    let data = await res.json();

    if (Object.keys(data).length === 0) {
      dispatch(getError());
    } else {
      dispatch(getMenSuccess(data));
    }
  } catch (error) {
    console.log(error);
    dispatch(getError());
  }
};

export const getWomenData = (url: string): ThunkAction<void, any, null, Action<string>> => async (dispatch) => {
  try {
    dispatch(getLoading());

    let res = await fetch(url);
    let data = await res.json();

    if (Object.keys(data).length === 0) {
      dispatch(getError());
    } else {
      dispatch(getWomenSuccess(data));
    }
  } catch (error) {
    console.log(error);
    dispatch(getError());
  }
};

export const getKidData = (url: string): ThunkAction<void, any, null, Action<string>> => async (dispatch) => {
  try {
    dispatch(getLoading());

    let res = await fetch(url);
    let data = await res.json();

    if (Object.keys(data).length === 0) {
      dispatch(getError());
    } else {
      dispatch(getKidSuccess(data));
    }
  } catch (error) {
    console.log(error);
    dispatch(getError());
  }
};

export const getUserData = (url: string): ThunkAction<void, any, null, Action<string>>=> async (dispatch) => {
  try {
    dispatch(getLoading());

    let res = await fetch(url);
    let data = await res.json();

    if (Object.keys(data).length === 0) {
      dispatch(getError());
    } else {
      dispatch(getUserSuccess(data));
    }
  } catch (error) {
    console.log(error);
    dispatch(getError());
  }
};
