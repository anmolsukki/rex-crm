import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import swal from 'sweetalert';
import history from '../ActionTypes/ActionHistory';
import { getHeaders } from "../Header/AuthHeader";

export const getPerformance = (data) => {
  let url = connection.concat("/api/PerformanceMatrixMainParameters");
  return async (dispatch)  => {
    dispatch(actionTypes.GET_PERF_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res,'Performance data get successfully')
      dispatch(actionTypes.GET_PERF_SUCCESS(res.data.data));
    })
    .catch((error) =>{
      console.log(error, "Performance data not found error");
      dispatch(actionTypes.GET_PERF_ERROR(error));
      if(error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
}

export const addPerformance = (data) => {
  let url = connection.concat("/api/PerformanceMatrixMainParameters");
  return async dispatch => {
    dispatch(actionTypes.ADD_PERF_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "performance add successfully");
      dispatch(actionTypes.ADD_PERF_SUCCESS(res));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Performance Added",
          icon: "success",
          dangerMode: false,
          }).then((result => {
          if(result) {
            window.location.reload();
          }
      }));
      }
    })
    .catch(error => {
      console.log(error, "performance not add error");
      dispatch(actionTypes.ADD_PERF_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const getPerformanceById = (data) => {
  let url = connection.concat(`/api/PerformanceMatrixMainParameters/${data.id}`);
  return async (dispatch)  => {
    dispatch(actionTypes.GET_PERF_BY_ID_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res,'Performance data By Id get successfully')
      dispatch(actionTypes.GET_PERF_BY_ID_SUCCESS(res.data.data));
    })
    .catch((error) =>{
      console.log(error, "Performance data By Id not found error");
      dispatch(actionTypes.GET_PERF_BY_ID_ERROR(error));
      if(error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
}

export const editPerformance = (data) => {
  let url = connection.concat(`/api/PerformanceMatrixMainParameters/${data.id}`);
  return async dispatch => {
    dispatch(actionTypes.EDIT_PERF_INIT());
    return axios
    .patch(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "Performance edit successfully");
      dispatch(actionTypes.EDIT_PERF_SUCCESS(data));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Performance Edited",
          icon: "success",
          dangerMode: false,
          }).then((result => {
          if(result) {
            history.push('/performance')
          }
      }));
      }
    })
    .catch(error => {
      console.log(error, "Performance not edited error");
      dispatch(actionTypes.EDIT_PERF_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};
