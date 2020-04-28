import {
    LOGIN_AUTHENTICATION_INIT,
    LOGIN_AUTHENTICATION_SUCCESS,
    LOGIN_AUTHENTICATION_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
    loginAuth: [],
    isLoading: false,
    error: null
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_AUTHENTICATION_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case LOGIN_AUTHENTICATION_SUCCESS :
        return {
            ...state,
            loginAuth : action.data,
            isLoading : false
        };
        case LOGIN_AUTHENTICATION_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default LoginReducer;
