import {
    PROPOSAL_SUBMISSION_INIT,
    PROPOSAL_SUBMISSION_SUCCESS,
    PROPOSAL_SUBMISSION_ERROR,

    POST_PROPOSAL_SUBMIT_INIT,
    POST_PROPOSAL_SUBMIT_SUCCESS,
    POST_PROPOSAL_SUBMIT_ERROR,

    GET_PROPOSAL_BY_ID_INIT,
    GET_PROPOSAL_BY_ID_SUCCESS,
    GET_PROPOSAL_BY_ID_ERROR,

    UPLOAD_PROPOSAL_INIT,
    UPLOAD_PROPOSAL_SUCCESS,
    UPLOAD_PROPOSAL_ERROR,

    UPDATE_STATUS_INIT,
    UPDATE_STATUS_SUCCESS,
    UPDATE_STATUS_ERROR,

    GET_SALES_DROPDOWN_INIT,
    GET_SALES_DROPDOWN_SUCCESS,
    GET_SALES_DROPDOWN_ERROR,

    BUTTON_SELECT_STATUS_INIT,
    BUTTON_SELECT_STATUS_SUCCESS,
    BUTTON_SELECT_STATUS_ERROR,

    GET_SALES_TARGET_INIT,
    GET_SALES_TARGET_SUCCESS,
    GET_SALES_TARGET_ERROR,

    DELETE_ACTIVE_STATUS_INIT,
    DELETE_ACTIVE_STATUS_SUCCESS,
    DELETE_ACTIVE_STATUS_ERROR,

    IMPORT_CSV_FILE_INIT,
    IMPORT_CSV_FILE_SUCCESS,
    IMPORT_CSV_FILE_ERROR,

    GET_SALES_TARGET_BY_ID_INIT,
    GET_SALES_TARGET_BY_ID_SUCCESS,
    GET_SALES_TARGET_BY_ID_ERROR,
} from "../Actions/ActionConstant/ActionConstants";

const initialState = {
    getData: [],
    getDropDown: [],
    getAllData: [],
    getDataById: [],
    statusData: [],
    deleteData: [],
    getTargetData: [],
    csvData: [],
    salesTargetDataById: [],
    isLoading: false,
    error: null
}

const SalesReducer = (state = initialState, action) => {
    switch(action.type) {
        case PROPOSAL_SUBMISSION_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case PROPOSAL_SUBMISSION_SUCCESS : 
        return {
            ...state,
            getData : action.data,
            isLoading : false
        };
        case PROPOSAL_SUBMISSION_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case BUTTON_SELECT_STATUS_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case BUTTON_SELECT_STATUS_SUCCESS : 
        return {
            ...state,
            statusData : action.data,
            isLoading : false
        };
        case BUTTON_SELECT_STATUS_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case POST_PROPOSAL_SUBMIT_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case POST_PROPOSAL_SUBMIT_SUCCESS : 
        return {
            ...state,
            getData : action.data,
            isLoading : false
        };
        case POST_PROPOSAL_SUBMIT_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_PROPOSAL_BY_ID_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_PROPOSAL_BY_ID_SUCCESS : 
        return {
            ...state,
            getDataById : action.data,
            isLoading : false
        };
        case GET_PROPOSAL_BY_ID_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case UPLOAD_PROPOSAL_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case UPLOAD_PROPOSAL_SUCCESS : 
        return {
            ...state,
            getData : action.data,
            isLoading : false
        };
        case UPLOAD_PROPOSAL_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case UPDATE_STATUS_INIT :
        return {
            ...state,
            isLoading : true
        };
        case UPDATE_STATUS_SUCCESS :
        const datas = action.data.id;
        const datasStatus = action.data.status
        state.getData.data = state.getData.data.map(sale=> {
            if(sale.id === datas) {
                sale.status = datasStatus
                return sale;
            }
            else {
                return sale;
            }
        });
        return {
            ...state,
            isLoading : !state.isLoading,
        };
        case UPDATE_STATUS_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_SALES_DROPDOWN_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_SALES_DROPDOWN_SUCCESS : 
        return {
            ...state,
            getDropDown : action.data,
            isLoading : false
        };
        case GET_SALES_DROPDOWN_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_SALES_TARGET_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_SALES_TARGET_SUCCESS : 
        return {
            ...state,
            getTargetData : action.data,
            isLoading : false
        };
        case GET_SALES_TARGET_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case DELETE_ACTIVE_STATUS_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case DELETE_ACTIVE_STATUS_SUCCESS : 
        return {
            ...state,
            deleteData : action.data,
            isLoading : false
        };
        case DELETE_ACTIVE_STATUS_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case IMPORT_CSV_FILE_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case IMPORT_CSV_FILE_SUCCESS : 
        return {
            ...state,
            csvData : action.data,
            isLoading : false
        };
        case IMPORT_CSV_FILE_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };

        case GET_SALES_TARGET_BY_ID_INIT : 
        return {
            ...state,
            isLoading : true
        };
        case GET_SALES_TARGET_BY_ID_SUCCESS : 
        return {
            ...state,
            salesTargetDataById : action.data,
            isLoading : false
        };
        case GET_SALES_TARGET_BY_ID_ERROR : 
        return {
            ...state,
            error : action.data ? action.data : null,
            isLoading : false
        };
        default : 
    }
    return state;
};

export default SalesReducer;
