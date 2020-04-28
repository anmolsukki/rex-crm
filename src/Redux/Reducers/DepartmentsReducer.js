import {
    GET_DEPARTMENTS_INIT,
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_ERROR,

    ADD_DEPARTMENTS_INIT,
    ADD_DEPARTMENTS_SUCCESS,
    ADD_DEPARTMENTS_ERROR,

    GET_DEPARTMENTS_BY_ID_INIT,
    GET_DEPARTMENTS_BY_ID_SUCCESS,
    GET_DEPARTMENTS_BY_ID_ERROR,

    EDIT_DEPARTMENTS_INIT,
    EDIT_DEPARTMENTS_SUCCESS,
    EDIT_DEPARTMENTS_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
    getDeptData: [],
    addData: [],
    getDeptDataById: [],
    editDeptData: [],
    isLoading: false,
    error: null
}

const DepartmentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DEPARTMENTS_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_DEPARTMENTS_SUCCESS : 
        return {
            ...state,
            getDeptData : action.data,
            isLoading : false
        };
        case GET_DEPARTMENTS_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case ADD_DEPARTMENTS_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case ADD_DEPARTMENTS_SUCCESS : 
        return {
            ...state,
            addData : action.data,
            isLoading : false
        };
        case ADD_DEPARTMENTS_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_DEPARTMENTS_BY_ID_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_DEPARTMENTS_BY_ID_SUCCESS : 
        return {
            ...state,
            getDeptDataById : action.data,
            isLoading : false
        };
        case GET_DEPARTMENTS_BY_ID_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case EDIT_DEPARTMENTS_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case EDIT_DEPARTMENTS_SUCCESS : 
        return {
            ...state,
            editDeptData : action.data ? action.data : null,
            isLoading : false
        };
        case EDIT_DEPARTMENTS_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default DepartmentsReducer;
