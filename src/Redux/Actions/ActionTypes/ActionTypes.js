import {
  // User Module
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
  UPDATE_USERS_ERROR,

  // Department Module
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
  EDIT_DEPARTMENTS_ERROR,

  // Performance Main Parameter
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
  EDIT_PERFORMANCE_ERROR,

  // Sub Performance
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
  EDIT_SUBPERFORMANCE_ERROR,

// Evaluation
  GET_CALCULATION_INIT,
  GET_CALCULATION_SUCCESS,
  GET_CALCULATION_ERROR,

  SAVE_CALCULATION_INIT,
  SAVE_CALCULATION_SUCCESS,
  SAVE_CALCULATION_ERROR,

// Mom Modules
  GET_MOM_INIT,
  GET_MOM_SUCCESS,
  GET_MOM_ERROR,

  SUBMIT_MOM_INIT,
  SUBMIT_MOM_SUCCESS,
  SUBMIT_MOM_ERROR,

  EDIT_MOM_DATA_INIT,
  EDIT_MOM_DATA_SUCCESS,
  EDIT_MOM_DATA_ERROR,

// Time Log
  ADD_CHECKIN_INIT,
  ADD_CHECKIN_SUCCESS,
  ADD_CHECKIN_ERROR,

  UPDATE_CHECKOUT_INIT,
  UPDATE_CHECKOUT_SUCCESS,
  UPDATE_CHECKOUT_ERROR,

// Sales Modules
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

  GET_SALES_DROPDOWN_INIT,
  GET_SALES_DROPDOWN_SUCCESS,
  GET_SALES_DROPDOWN_ERROR,

  UPDATE_STATUS_INIT,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_ERROR,

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

  // Authentication
  LOGIN_AUTHENTICATION_INIT,
  LOGIN_AUTHENTICATION_SUCCESS,
  LOGIN_AUTHENTICATION_ERROR,

  // Hr Candidacy
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
} from "../ActionConstant/ActionConstants";

export const USERS_DATA_INIT = () => ({ type: GET_USERS_DATA_INIT });
export const USERS_DATA_SUCCESS = data => ({ type: GET_USERS_DATA_SUCCESS, data: data });
export const USERS_DATA_ERROR = data => ({ type: GET_USERS_DATA_ERROR, data: data });

export const USER_DEPARTMENTS_INIT = () => ({ type: GET_USERS_DEPARTMENTS_INIT });
export const USER_DEPARTMENTS_SUCCESS = data => ({ type: GET_USERS_DEPARTMENTS_SUCCESS, data: data });
export const USER_DEPARTMENTS_ERROR = data => ({ type: GET_USERS_DEPARTMENTS_ERROR, data: data });

export const ADD_USER_INIT = () => ({ type: ADD_USERS_DATA_INIT });
export const ADD_USER_SUCCESS = data => ({ type: ADD_USERS_DATA_SUCCESS, data: data });
export const ADD_USER_ERROR = data => ({ type: ADD_USERS_DATA_ERROR, data: data });

export const EDIT_USER_INIT = () => ({ type: EDIT_USERS_INIT });
export const EDIT_USER_SUCCESS = data => ({ type: EDIT_USERS_SUCCESS, data: data });
export const EDIT_USER_ERROR = data => ({ type: EDIT_USERS_ERROR, data: data });

export const USERS_PERMISSION_INIT = () => ({ type: GET_USERS_PERMISSION_INIT });
export const USERS_PERMISSION_SUCCESS = data => ({ type: GET_USERS_PERMISSION_SUCCESS, data: data });
export const USERS_PERMISSION_ERROR = data => ({ type: GET_USERS_PERMISSION_ERROR, data: data });

export const UPDATE_USER_INIT = () => ({ type: UPDATE_USERS_INIT });
export const UPDATE_USER_SUCCESS = data => ({ type: UPDATE_USERS_SUCCESS, data: data });
export const UPDATE_USER_ERROR = data => ({ type: UPDATE_USERS_ERROR, data: data });

// Department Module
export const DEPARTMENTS_INIT = () => ({ type: GET_DEPARTMENTS_INIT });
export const DEPARTMENTS_SUCCESS = data => ({ type: GET_DEPARTMENTS_SUCCESS, data: data });
export const DEPARTMENTS_ERROR = data => ({ type: GET_DEPARTMENTS_ERROR, data: data });

export const ADD_DEPT_INIT = () => ({ type: ADD_DEPARTMENTS_INIT });
export const ADD_DEPT_SUCCESS = data => ({ type: ADD_DEPARTMENTS_SUCCESS, data: data });
export const ADD_DEPT_ERROR = data => ({ type: ADD_DEPARTMENTS_ERROR, data: data });

export const DEPT_BY_ID_INIT = () => ({ type: GET_DEPARTMENTS_BY_ID_INIT });
export const DEPT_BY_ID_SUCCESS = data => ({ type: GET_DEPARTMENTS_BY_ID_SUCCESS, data: data });
export const DEPT_BY_ID_ERROR = data => ({ type: GET_DEPARTMENTS_BY_ID_ERROR, data: data });

export const EDIT_DEPT_INIT = () => ({ type: EDIT_DEPARTMENTS_INIT });
export const EDIT_DEPT_SUCCESS = data => ({ type: EDIT_DEPARTMENTS_SUCCESS, data: data });
export const EDIT_DEPT_ERROR = data => ({ type: EDIT_DEPARTMENTS_ERROR, data: data });

// Performance Main Parameter
export const GET_PERF_INIT = () => ({ type: GET_PERFORMANCE_INIT });
export const GET_PERF_SUCCESS = data => ({ type: GET_PERFORMANCE_SUCCESS, data: data });
export const GET_PERF_ERROR = data => ({ type: GET_PERFORMANCE_ERROR, data: data });

export const ADD_PERF_INIT = () => ({ type: ADD_PERFORMANCE_INIT });
export const ADD_PERF_SUCCESS = data => ({ type: ADD_PERFORMANCE_SUCCESS, data: data });
export const ADD_PERF_ERROR = data => ({ type: ADD_PERFORMANCE_ERROR, data: data });

export const GET_PERF_BY_ID_INIT = () => ({ type: GET_PERFORMANCE_BY_ID_INIT });
export const GET_PERF_BY_ID_SUCCESS = data => ({ type: GET_PERFORMANCE_BY_ID_SUCCESS, data: data });
export const GET_PERF_BY_ID_ERROR = data => ({ type: GET_PERFORMANCE_BY_ID_ERROR, data: data });

export const EDIT_PERF_INIT = () => ({ type: EDIT_PERFORMANCE_INIT });
export const EDIT_PERF_SUCCESS = data => ({ type: EDIT_PERFORMANCE_SUCCESS, data: data });
export const EDIT_PERF_ERROR = data => ({ type: EDIT_PERFORMANCE_ERROR, data: data });

// Sub Performance
export const GET_SUBPERF_INIT = () => ({ type: GET_SUBPERFORMANCE_INIT });
export const GET_SUBPERF_SUCCESS = data => ({ type: GET_SUBPERFORMANCE_SUCCESS, data: data });
export const GET_SUBPERF_ERROR = data => ({ type: GET_SUBPERFORMANCE_ERROR, data: data });

export const ADD_SUBPERF_INIT = () => ({ type: ADD_SUBPERFORMANCE_INIT });
export const ADD_SUBPERF_SUCCESS = data => ({ type: ADD_SUBPERFORMANCE_SUCCESS, data: data });
export const ADD_SUBPERF_ERROR = data => ({ type: ADD_SUBPERFORMANCE_ERROR, data: data });

export const GET_SUBPERF_BY_ID_INIT = () => ({ type: GET_SUBPERFORMANCE_BY_ID_INIT });
export const GET_SUBPERF_BY_ID_SUCCESS = data => ({ type: GET_SUBPERFORMANCE_BY_ID_SUCCESS, data: data });
export const GET_SUBPERF_BY_ID_ERROR = data => ({ type: GET_SUBPERFORMANCE_BY_ID_ERROR, data: data });

export const EDIT_SUBPERF_INIT = () => ({ type: EDIT_SUBPERFORMANCE_INIT });
export const EDIT_SUBPERF_SUCCESS = data => ({ type: EDIT_SUBPERFORMANCE_SUCCESS, data: data });
export const EDIT_SUBPERF_ERROR = data => ({ type: EDIT_SUBPERFORMANCE_ERROR, data: data });

// Evaluation
export const GET_CAL_INIT = () => ({ type: GET_CALCULATION_INIT });
export const GET_CAL_SUCCESS = data => ({ type: GET_CALCULATION_SUCCESS, data: data });
export const GET_CAL_ERROR = data => ({ type: GET_CALCULATION_ERROR, data: data });

export const SAVE_CAL_INIT = () => ({ type: SAVE_CALCULATION_INIT });
export const SAVE_CAL_SUCCESS = data => ({ type: SAVE_CALCULATION_SUCCESS, data: data });
export const SAVE_CAL_ERROR = data => ({ type: SAVE_CALCULATION_ERROR, data: data });

// Mom Modules
export const MOM_GET_INIT = () => ({ type: GET_MOM_INIT });
export const MOM_GET_SUCCESS = data => ({ type: GET_MOM_SUCCESS, data: data });
export const MOM_GET_ERROR = data => ({ type: GET_MOM_ERROR, data: data });

export const SUB_MOM_INIT = () => ({ type: SUBMIT_MOM_INIT });
export const SUB_MOM_SUCCESS = data => ({ type: SUBMIT_MOM_SUCCESS, data: data });
export const SUB_MOM_ERROR = data => ({ type: SUBMIT_MOM_ERROR, data: data });

export const EDIT_MOM_INIT = () => ({ type: EDIT_MOM_DATA_INIT });
export const EDIT_MOM_SUCCESS = data => ({ type: EDIT_MOM_DATA_SUCCESS, data: data });
export const EDIT_MOM_ERROR = data => ({ type: EDIT_MOM_DATA_ERROR, data: data });

// Time Log
export const CHECKIN_INIT = () => ({ type: ADD_CHECKIN_INIT });
export const CHECKIN_SUCCESS = data => ({ type: ADD_CHECKIN_SUCCESS, data: data });
export const CHECKIN_ERROR = data => ({ type: ADD_CHECKIN_ERROR, data: data });

export const CHECKOUT_INIT = () => ({ type: UPDATE_CHECKOUT_INIT });
export const CHECKOUT_SUCCESS = data => ({ type: UPDATE_CHECKOUT_SUCCESS, data: data });
export const CHECKOUT_ERROR = data => ({ type: UPDATE_CHECKOUT_ERROR, data: data });

// Sales Modules
export const PROP_SUB_INIT = () => ({ type: PROPOSAL_SUBMISSION_INIT });
export const PROP_SUB_SUCCESS = data => ({ type: PROPOSAL_SUBMISSION_SUCCESS, data: data });
export const PROP_SUB_ERROR = data => ({ type: PROPOSAL_SUBMISSION_ERROR, data: data });

export const POST_PROP_SUB_INIT = () => ({ type: POST_PROPOSAL_SUBMIT_INIT });
export const POST_PROP_SUB_SUCCESS = data => ({ type: POST_PROPOSAL_SUBMIT_SUCCESS, data: data });
export const POST_PROP_SUB_ERROR = data => ({ type: POST_PROPOSAL_SUBMIT_ERROR, data: data });

export const GET_PROP_ID_INIT = () => ({ type: GET_PROPOSAL_BY_ID_INIT });
export const GET_PROP_ID_SUCCESS = data => ({ type: GET_PROPOSAL_BY_ID_SUCCESS, data: data });
export const GET_PROP_ID_ERROR = data => ({ type: GET_PROPOSAL_BY_ID_ERROR, data: data });

export const UP_PROPOSAL_INIT = () => ({ type: UPLOAD_PROPOSAL_INIT });
export const UP_PROPOSAL_SUCCESS = data => ({ type: UPLOAD_PROPOSAL_SUCCESS, data: data });
export const UP_PROPOSAL_ERROR = data => ({ type: UPLOAD_PROPOSAL_ERROR, data: data });

export const UP_FILTER_INIT = () => ({ type: UPDATE_STATUS_INIT });
export const UP_FILTER_SUCCESS = (data) => ({ type: UPDATE_STATUS_SUCCESS, data });
export const UP_FILTER_ERROR = data => ({ type: UPDATE_STATUS_ERROR, data: data });

export const GET_DROP_INIT = () => ({ type: GET_SALES_DROPDOWN_INIT });
export const GET_DROP_SUCCESS = (data) => ({ type: GET_SALES_DROPDOWN_SUCCESS, data });
export const GET_DROP_ERROR = data => ({ type: GET_SALES_DROPDOWN_ERROR, data: data });

export const SELECT_STATUS_INIT = () => ({ type: BUTTON_SELECT_STATUS_INIT });
export const SELECT_STATUS_SUCCESS = (data) => ({ type: BUTTON_SELECT_STATUS_SUCCESS, data: data });
export const SELECT_STATUS_ERROR = data => ({ type: BUTTON_SELECT_STATUS_ERROR, data: data });

export const SALES_TARGET_INIT = () => ({ type: GET_SALES_TARGET_INIT });
export const SALES_TARGET_SUCCESS = (data) => ({ type: GET_SALES_TARGET_SUCCESS, data: data });
export const SALES_TARGET_ERROR = data => ({ type: GET_SALES_TARGET_ERROR, data: data });

export const DELETE_STATUS_INIT = () => ({ type: DELETE_ACTIVE_STATUS_INIT });
export const DELETE_STATUS_SUCCESS = (data) => ({ type: DELETE_ACTIVE_STATUS_SUCCESS, data: data });
export const DELETE_STATUS_ERROR = data => ({ type: DELETE_ACTIVE_STATUS_ERROR, data: data });


export const CSV_FILE_INIT = () => ({ type: IMPORT_CSV_FILE_INIT });
export const CSV_FILE_SUCCESS = (data) => ({ type: IMPORT_CSV_FILE_SUCCESS, data: data });
export const CSV_FILE_ERROR = data => ({ type: IMPORT_CSV_FILE_ERROR, data: data });

export const TARGET_BY_ID_INIT = () => ({ type: GET_SALES_TARGET_BY_ID_INIT });
export const TARGET_BY_ID_SUCCESS = (data) => ({ type: GET_SALES_TARGET_BY_ID_SUCCESS, data: data });
export const TARGET_BY_ID_ERROR = data => ({ type: GET_SALES_TARGET_BY_ID_ERROR, data: data });

// Authentication
export const LOGIN_AUTH_INIT = () => ({ type: LOGIN_AUTHENTICATION_INIT });
export const LOGIN_AUTH_SUCCESS = (data) => ({ type: LOGIN_AUTHENTICATION_SUCCESS, data: data });
export const LOGIN_AUTH_ERROR = data => ({ type: LOGIN_AUTHENTICATION_ERROR, data: data });

// Hr Candidacy
export const GET_CANDIDACY_INIT = () => ({ type: GET_HR_CANDIDACY_INIT });
export const GET_CANDIDACY_SUCCESS = (data) => ({ type: GET_HR_CANDIDACY_SUCCESS, data: data });
export const GET_CANDIDACY_ERROR = data => ({ type: GET_HR_CANDIDACY_ERROR, data: data });

export const GET_CANDIDACY_BY_ID_INIT = () => ({ type: GET_HR_CANDIDACY_BY_ID_INIT });
export const GET_CANDIDACY_BY_ID_SUCCESS = (data) => ({ type: GET_HR_CANDIDACY_BY_ID_SUCCESS, data: data });
export const GET_CANDIDACY_BY_ID_ERROR = data => ({ type: GET_HR_CANDIDACY_BY_ID_ERROR, data: data });

export const ADD_CANDIDACY_INIT = () => ({ type: ADD_HR_CANDIDACY_INIT });
export const ADD_CANDIDACY_SUCCESS = (data) => ({ type: ADD_HR_CANDIDACY_SUCCESS, data: data });
export const ADD_CANDIDACY_ERROR = data => ({ type: ADD_HR_CANDIDACY_ERROR, data: data });

export const EDIT_CANDIDACY_INIT = () => ({ type: EDIT_HR_CANDIDACY_INIT });
export const EDIT_CANDIDACY_SUCCESS = (data) => ({ type: EDIT_HR_CANDIDACY_SUCCESS, data: data });
export const EDIT_CANDIDACY_ERROR = data => ({ type: EDIT_HR_CANDIDACY_ERROR, data: data });

export const EDIT_CANDIDACY_STATUS_INIT = () => ({ type: EDIT_HR_CANDIDACY_STATUS_INIT });
export const EDIT_CANDIDACY_STATUS_SUCCESS = (data) => ({ type: EDIT_HR_CANDIDACY_STATUS_SUCCESS, data: data });
export const EDIT_CANDIDACY_STATUS_ERROR = data => ({ type: EDIT_HR_CANDIDACY_STATUS_ERROR, data: data });
