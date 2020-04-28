import {
  GET_CALCULATION_INIT,
  GET_CALCULATION_SUCCESS,
  GET_CALCULATION_ERROR,

  SAVE_CALCULATION_INIT,
  SAVE_CALCULATION_SUCCESS,
  SAVE_CALCULATION_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
  calculationData: [],
  saveData: [],
  isLoading: false,
  error: null
};

const CalculationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CALCULATION_INIT:
    return {
      ...state,
      isLoading: true
    };
    case GET_CALCULATION_SUCCESS:
    return {
      ...state,
      calculationData: action.data ? action.data : null,
      isLoading: false
    };
    case GET_CALCULATION_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };

    case SAVE_CALCULATION_INIT:
    return {
      ...state,
      isLoading: true
    };
    case SAVE_CALCULATION_SUCCESS:
    return {
      ...state,
      saveData: action.data ? action.data : null,
      isLoading: false
    };
    case SAVE_CALCULATION_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };
    default:
  }
  return state;
};

export default CalculationReducer;
