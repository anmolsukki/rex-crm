import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import swal from 'sweetalert';
import history from '../ActionTypes/ActionHistory';
import { getHeaders } from "../Header/AuthHeader"

let url;
export const getHrCandidacyAction = (data) => {
    if (data === undefined) {
        url = connection.concat(`/api/hrcandidacy`);
    }
    else {
        if (data.outcome && data.timePeriod) {
            url = connection.concat(`/api/hrcandidacy?timePeriod=${data.timePeriod}&outcome=${data.outcome}`);
        }
        else {
            if (data.outcome) {
                url = connection.concat(`/api/hrcandidacy?outcome=${data.outcome}`);
            }
            if (data.timePeriod) {
                url = connection.concat(`/api/hrcandidacy?timePeriod=${data.timePeriod}`);
            }
        }
    }
    return async dispatch => {
        dispatch(actionTypes.GET_CANDIDACY_INIT());
        return axios
        .get(url, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Hr Candidacy data get successfully");
            dispatch(actionTypes.GET_CANDIDACY_SUCCESS(res.data.data));
        })
        .catch(error => {
            console.log(error, "Hr Candidacy data not found error");
            dispatch(actionTypes.GET_CANDIDACY_ERROR(error));
            if(error.response && error.response.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                localStorage.removeItem("roleId");
        }
        });
    };
};

export const getCandidateById = (data) => {
    let url = connection.concat(`/api/hrcandidacy/${data.id}?edit=${data.emp}`);
    return async dispatch => {
        dispatch(actionTypes.GET_CANDIDACY_BY_ID_INIT());
        return axios
        .get(url, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Hr Candidacy By Id data get successfully");
            dispatch(actionTypes.GET_CANDIDACY_BY_ID_SUCCESS(res.data.data));
        })
        .catch(error => {
            console.log(error, "Hr Candidacy By Id data not found error");
            dispatch(actionTypes.GET_CANDIDACY_BY_ID_ERROR(error));
            if(error.response.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                localStorage.removeItem("roleId");
            }
        });
    };
};

export const addCandidateAction = (data) => {
    let url = connection.concat(`/api/hrcandidacy`);
    return async dispatch => {
        dispatch(actionTypes.ADD_CANDIDACY_INIT());
        return axios
        .post(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Add Hr Candidacy data get successfully");
            dispatch(actionTypes.ADD_CANDIDACY_SUCCESS(res));
            if(res.status === 200){
                swal({
                    title: "Success",
                    text: "Candidate Added",
                    icon: "success",
                    dangerMode: false,
                })
                .then((result => {
                    if(result) {
                        window.location.reload();
                    }
                }));
            }
        })
        .catch(error => {
            console.log(error, "Add Hr Candidacy data not found error");
            dispatch(actionTypes.ADD_CANDIDACY_ERROR(error));
            if(error.response.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                localStorage.removeItem("roleId");
            }
        });
    };
};

export const editHrCandidacy = data => {
    let url = connection.concat(`/api/hrcandidacy/${data.id}`);
    return async dispatch => {
        dispatch(actionTypes.EDIT_CANDIDACY_INIT());
        return axios
        .patch(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Hr Candidacy data edit successfully");
            dispatch(actionTypes.EDIT_CANDIDACY_SUCCESS(data));
            if(res.status === 200) {
                swal({
                    title: "Success",
                    text: "Hr Candidacy Edited",
                    icon: "success",
                    dangerMode: false,
                })
                .then((result => {
                    if(result) {
                        history.push('/hrCandidacy')
                    }
                }));
            }
        })
        .catch(error => {
            console.log(error, "Hr Candidacy data not edited error");
            dispatch(actionTypes.EDIT_CANDIDACY_ERROR(error));
            if(error.response && error.response.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                localStorage.removeItem("roleId");
            }
        });
    };
};

export const editHrCandidacyStatus = data => {
    let url = connection.concat(`/api/hrcandidacy/${data.id}`);
    return async dispatch => {
        dispatch(actionTypes.EDIT_CANDIDACY_STATUS_INIT());
        return axios
        .patch(url, data, {headers: await getHeaders(true)})
        .then(res => {
            console.log(res, "Hr Candidacy Status data edit successfully");
            dispatch(actionTypes.EDIT_CANDIDACY_STATUS_SUCCESS(data));
        })
        .catch(error => {
            console.log(error, "Hr Candidacy Status data not edited error");
            dispatch(actionTypes.EDIT_CANDIDACY_STATUS_ERROR(error));
            if(error.response && error.response.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                localStorage.removeItem("roleId");
            }
        });
    };
};
