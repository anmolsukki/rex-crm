import {
  GET_USERS_DATA_INIT,
  GET_USERS_DATA_SUCCESS,
  GET_USERS_DATA_ERROR,

  GET_USERS_DEPARTMENTS_INIT,
  GET_USERS_DEPARTMENTS_SUCCESS,
  GET_USERS_DEPARTMENTS_ERROR,

  ADD_USERS_DATA_INIT,
  ADD_USERS_DATA_SUCCESS,
  ADD_USERS_DATA_ERROR,

  EDIT_USERS_INIT,
  EDIT_USERS_SUCCESS,
  EDIT_USERS_ERROR,

  GET_USERS_PERMISSION_INIT,
  GET_USERS_PERMISSION_SUCCESS,
  GET_USERS_PERMISSION_ERROR,

  UPDATE_USERS_INIT,
  UPDATE_USERS_SUCCESS,
  UPDATE_USERS_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
  userData: [],
  userDepartData: [],
  addUserData: [],
  userDataById: [],
  permissionData: [],
  updateUserData: [],
  isLoading: false,
  error: null
};

const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_DATA_INIT:
    return {
      ...state,
      isLoading: true
    };
    case GET_USERS_DATA_SUCCESS:
    return {
      ...state,
      userData: action.data,
      isLoading: false
    };
    case GET_USERS_DATA_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };

    case GET_USERS_DEPARTMENTS_INIT:
    return {
      ...state,
      isLoading: true
    };
    case GET_USERS_DEPARTMENTS_SUCCESS:
    return {
      ...state,
      userDepartData: action.data ? action.data : null,
      isLoading: false
    };
    case GET_USERS_DEPARTMENTS_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };

    case ADD_USERS_DATA_INIT:
    return {
      ...state,
      isLoading: true
    };
    case ADD_USERS_DATA_SUCCESS:
    return {
      ...state,
      addUserData: action.data,
      isLoading: false
    };
    case ADD_USERS_DATA_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };
      
    case EDIT_USERS_INIT:
    return {
      ...state,
      isLoading: true
    };
    case EDIT_USERS_SUCCESS:
    return {
      ...state,
      userDataById: action.data,
      isLoading: false
    };
    case EDIT_USERS_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };

    case GET_USERS_PERMISSION_INIT:
    return {
      ...state,
      isLoading: true
    };
    case GET_USERS_PERMISSION_SUCCESS:
    return {
      ...state,
      permissionData: action.data,
      isLoading: false
    };
    case GET_USERS_PERMISSION_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };

    case UPDATE_USERS_INIT:
    return {
      ...state,
      isLoading: true
    };
    case UPDATE_USERS_SUCCESS:
    return {
      ...state,
      updateUserData: action.data,
      isLoading: false
    };
    case UPDATE_USERS_ERROR:
    return {
      ...state,
      error: action.data ? action.data : null,
      isLoading: false
    };
    default:
  }
  return state;
};

export default UserProfileReducer;
