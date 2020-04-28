import {
    GET_PERFORMANCE_INIT,
    GET_PERFORMANCE_SUCCESS,
    GET_PERFORMANCE_ERROR,

    ADD_PERFORMANCE_INIT,
    ADD_PERFORMANCE_SUCCESS,
    ADD_PERFORMANCE_ERROR,

    GET_PERFORMANCE_BY_ID_INIT,
    GET_PERFORMANCE_BY_ID_SUCCESS,
    GET_PERFORMANCE_BY_ID_ERROR,

    EDIT_PERFORMANCE_INIT,
    EDIT_PERFORMANCE_SUCCESS,
    EDIT_PERFORMANCE_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
    getPerforData: [],
    addPerform: [],
    getPerforById: [],
    editData: [],
    isLoading: false,
    error: null
}

const PerformanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PERFORMANCE_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_PERFORMANCE_SUCCESS : 
        return {
            ...state,
            getPerforData : action.data ? action.data : null,
            isLoading : false
        };
        case GET_PERFORMANCE_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case ADD_PERFORMANCE_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case ADD_PERFORMANCE_SUCCESS : 
        return {
            ...state,
            addPerform : action.data ? action.data : null,
            isLoading : false
        };
        case ADD_PERFORMANCE_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_PERFORMANCE_BY_ID_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_PERFORMANCE_BY_ID_SUCCESS : 
        return {
            ...state,
            getPerforById : action.data ? action.data : null,
            isLoading : false
        };
        case GET_PERFORMANCE_BY_ID_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case EDIT_PERFORMANCE_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case EDIT_PERFORMANCE_SUCCESS : 
        return {
            ...state,
            editData : action.data,
            isLoading : false
        };
        case EDIT_PERFORMANCE_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default PerformanceReducer;
