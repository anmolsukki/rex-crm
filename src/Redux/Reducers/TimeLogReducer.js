import {
  ADD_CHECKIN_INIT,
  ADD_CHECKIN_SUCCESS,
  ADD_CHECKIN_ERROR,
  
  UPDATE_CHECKOUT_INIT,
  UPDATE_CHECKOUT_SUCCESS,
  UPDATE_CHECKOUT_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
  postData: [],
  patchData: [],
  isLoading: false,
  error: null
};

const TimeLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHECKIN_INIT:
    return {
      ...state,
      isLoading: true
    };
    case ADD_CHECKIN_SUCCESS:
    return {
      ...state,
      postData: action.data ? action.data : null,
      isLoading: false
    };
    case ADD_CHECKIN_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };

    case UPDATE_CHECKOUT_INIT:
    return {
      ...state,
      isLoading: true
    };
    case UPDATE_CHECKOUT_SUCCESS:
    return {
      ...state,
      patchData: action.data ? action.data : null,
      isLoading: false
    };
    case UPDATE_CHECKOUT_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };
    default:
  }
  return state;
};

export default TimeLogReducer;
