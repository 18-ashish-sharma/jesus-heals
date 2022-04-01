import {
  API_REQUEST,
  ON_COMPLETE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../action_types";

const initialState = {
  isLoading: false,
  data: {},
};

const tasks = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_REQUEST:
      return {
        ...state,
        isLoading: payload,
      };
    case ON_COMPLETE:
      return {
        ...state,
        isLoading: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        lisdatatData: payload,
        isLoading: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default tasks;
