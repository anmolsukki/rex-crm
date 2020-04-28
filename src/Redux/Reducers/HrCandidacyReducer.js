import {
    GET_HR_CANDIDACY_INIT,
    GET_HR_CANDIDACY_SUCCESS,
    GET_HR_CANDIDACY_ERROR,

    GET_HR_CANDIDACY_BY_ID_INIT,
    GET_HR_CANDIDACY_BY_ID_SUCCESS,
    GET_HR_CANDIDACY_BY_ID_ERROR,

    ADD_HR_CANDIDACY_INIT,
    ADD_HR_CANDIDACY_SUCCESS,
    ADD_HR_CANDIDACY_ERROR,

    EDIT_HR_CANDIDACY_INIT,
    EDIT_HR_CANDIDACY_SUCCESS,
    EDIT_HR_CANDIDACY_ERROR,

    EDIT_HR_CANDIDACY_STATUS_INIT,
    EDIT_HR_CANDIDACY_STATUS_SUCCESS,
    EDIT_HR_CANDIDACY_STATUS_ERROR
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
    getCandidate: [],
    getCandidateById: [],
    addCandidate: [],
    editCandidate: [],
    isLoading: false,
    error: null
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_HR_CANDIDACY_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_HR_CANDIDACY_SUCCESS :
        return {
            ...state,
            getCandidate : action.data,
            isLoading : false
        };
        case GET_HR_CANDIDACY_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_HR_CANDIDACY_BY_ID_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_HR_CANDIDACY_BY_ID_SUCCESS :
        return {
            ...state,
            getCandidateById : action.data,
            isLoading : false
        };
        case GET_HR_CANDIDACY_BY_ID_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case ADD_HR_CANDIDACY_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case ADD_HR_CANDIDACY_SUCCESS :
        return {
            ...state,
            addCandidate : action.data,
            isLoading : false
        };
        case ADD_HR_CANDIDACY_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case EDIT_HR_CANDIDACY_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case EDIT_HR_CANDIDACY_SUCCESS :
        return {
            ...state,
            editCandidate : action.data,
            isLoading : false
        };
        case EDIT_HR_CANDIDACY_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case EDIT_HR_CANDIDACY_STATUS_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case EDIT_HR_CANDIDACY_STATUS_SUCCESS :
        const datas = action.data.id
        const datasStatus = action.data.outcome
        state.getCandidate = state.getCandidate.map(candidate => {
            if (candidate.id === datas) {
                candidate.outcome = datasStatus
                return candidate
            }
            else {
                return candidate
            }
        })
        return {
            ...state,
            isLoading : false
        };
        case EDIT_HR_CANDIDACY_STATUS_ERROR : 
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
