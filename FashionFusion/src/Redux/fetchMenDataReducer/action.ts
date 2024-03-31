/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionType";



interface FetchDataRequestAction extends Action<typeof FETCH_DATA_REQUEST> {}

interface FetchDataSuccessAction extends Action<typeof FETCH_DATA_SUCCESS> {
  payload: any;
}

interface FetchDataFailureAction extends Action<typeof FETCH_DATA_FAILURE> {
  payload: string;
}





export const fetchDataRequestAction = (): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccessAction = (data: any[]): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailureAction = (error: string): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});




export const fetchData = (): ThunkAction<void, any, null, Action> => {
  return async (dispatch) => {
    dispatch(fetchDataRequestAction());
    try {
      const res = await axios.get('https://mock-server-app-1.onrender.com/womens');
      dispatch(fetchDataSuccessAction(res.data));
    } catch (error:any) {
      dispatch(fetchDataFailureAction(error.message));
    }
  };
};
