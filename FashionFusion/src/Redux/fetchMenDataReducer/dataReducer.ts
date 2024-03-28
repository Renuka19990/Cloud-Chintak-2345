/* eslint-disable @typescript-eslint/no-explicit-any */
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './actionType';

interface DataState {
    isLoading: boolean;
    data: any[];
    isError: boolean | null | string;
}

const initialState: DataState = {
    isLoading: false,
    data: [],
    isError: false,
};

export type DataActionTypes =
    | { type: typeof FETCH_DATA_REQUEST }
    | { type: typeof FETCH_DATA_SUCCESS; payload: any[] }
    | { type: typeof FETCH_DATA_FAILURE; payload: string };

export const dataReducer = (state: DataState = initialState, action: DataActionTypes): DataState => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, isLoading: true, isError: null };

        case FETCH_DATA_SUCCESS:
            if ('payload' in action && Array.isArray(action.payload)) {
                return { ...state, isLoading: false, data: action.payload, isError: null };
            }
            return state;

        case FETCH_DATA_FAILURE:
            if ('payload' in action && typeof action.payload === 'string') {
                return { ...state, isLoading: false, isError: action.payload };
            }
            return state;

        default:
            return state;
    }
};
