import {
    GET_MOM_INIT,
    GET_MOM_SUCCESS,
    GET_MOM_ERROR,

    SUBMIT_MOM_INIT,
    SUBMIT_MOM_SUCCESS,
    SUBMIT_MOM_ERROR,

    EDIT_MOM_DATA_INIT,
    EDIT_MOM_DATA_SUCCESS,
    EDIT_MOM_DATA_ERROR,
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
    postMomData: [],
    getMomData: [],
    editMomData: [],
    isLoading: false,
    error: null
}

const MomReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOM_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_MOM_SUCCESS : 
        return {
            ...state,
            getMomData : action.data ? action.data : null,
            isLoading : false
        };
        case GET_MOM_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case SUBMIT_MOM_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case SUBMIT_MOM_SUCCESS : 
        return {
            ...state,
            postMomData : action.data ? action.data : null,
            isLoading : false
        };
        case SUBMIT_MOM_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case EDIT_MOM_DATA_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case EDIT_MOM_DATA_SUCCESS : 
        return {
            ...state,
            editMomData : action.data ? action.data : null,
            isLoading : false
        };
        case EDIT_MOM_DATA_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default MomReducer;
