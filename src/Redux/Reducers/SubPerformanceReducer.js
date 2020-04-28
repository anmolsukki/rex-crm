import {
    GET_SUBPERFORMANCE_INIT,
    GET_SUBPERFORMANCE_SUCCESS,
    GET_SUBPERFORMANCE_ERROR,

    ADD_SUBPERFORMANCE_INIT,
    ADD_SUBPERFORMANCE_SUCCESS,
    ADD_SUBPERFORMANCE_ERROR,

    GET_SUBPERFORMANCE_BY_ID_INIT,
    GET_SUBPERFORMANCE_BY_ID_SUCCESS,
    GET_SUBPERFORMANCE_BY_ID_ERROR,

    EDIT_SUBPERFORMANCE_INIT,
    EDIT_SUBPERFORMANCE_SUCCESS,
    EDIT_SUBPERFORMANCE_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
    getSubPrefData: [],
    addSubPref: [],
    getSubPrefById: [],
    editSubPref: [],
    isLoading: false,
    error: null
}

const SubPerformanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SUBPERFORMANCE_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_SUBPERFORMANCE_SUCCESS : 
        return {
            ...state,
            getSubPrefData : action.data ? action.data : null,
            isLoading : false
        };
        case GET_SUBPERFORMANCE_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case ADD_SUBPERFORMANCE_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case ADD_SUBPERFORMANCE_SUCCESS : 
        return {
            ...state,
            addSubPref : action.data ? action.data : null,
            isLoading : false
        };
        case ADD_SUBPERFORMANCE_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_SUBPERFORMANCE_BY_ID_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_SUBPERFORMANCE_BY_ID_SUCCESS : 
        return {
            ...state,
            getSubPrefById : action.data ? action.data : null,
            isLoading : false
        };
        case GET_SUBPERFORMANCE_BY_ID_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case EDIT_SUBPERFORMANCE_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case EDIT_SUBPERFORMANCE_SUCCESS : 
        return {
            ...state,
            editSubPref : action.data ? action.data : null,
            isLoading : false
        };
        case EDIT_SUBPERFORMANCE_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default SubPerformanceReducer;
