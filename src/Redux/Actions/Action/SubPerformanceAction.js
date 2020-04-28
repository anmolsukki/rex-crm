import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import swal from 'sweetalert';
import history from '../ActionTypes/ActionHistory';
import { getHeaders } from "../Header/AuthHeader";

export const getSubPerformance = () => {
  let url = connection.concat("/api/PerformanceMatrixSubParameters");
  return async (dispatch)  => {
    dispatch(actionTypes.GET_SUBPERF_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res,'sub performance data get successfully')
      dispatch(actionTypes.GET_SUBPERF_SUCCESS(res.data.data));
    })
    .catch((error) =>{
      console.log(error, "sub performance  data not found error");
      dispatch(actionTypes.GET_SUBPERF_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
}

export const addSubPerformance = (data) => {
  let url = connection.concat("/api/PerformanceMatrixSubParameters");
  return async dispatch => {
    dispatch(actionTypes.ADD_SUBPERF_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "sub performance data add successfully");
      dispatch(actionTypes.ADD_SUBPERF_SUCCESS(res));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Sub Performance Added",
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
      console.log(error, "sub performance data not add error");
      dispatch(actionTypes.ADD_SUBPERF_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const getSubPerformanceById = (data) => {
  let url = connection.concat(`/api/PerformanceMatrixSubParameters/${data.id}`);
  return async (dispatch)  => {
    dispatch(actionTypes.GET_SUBPERF_BY_ID_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res,'Sub Performance Data By Id Get Successfully')
      dispatch(actionTypes.GET_SUBPERF_BY_ID_SUCCESS(res.data.data));
    })
    .catch((error) =>{
      console.log(error, "Sub Performance Data By Id not found error");
      dispatch(actionTypes.GET_SUBPERF_BY_ID_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
}

export const editSubPerformance = (data) => {
  let url = connection.concat(`/api/PerformanceMatrixSubParameters/${data.id}`);
  return async dispatch => {
    dispatch(actionTypes.EDIT_SUBPERF_INIT());
    return axios
    .patch(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "data edit successfully");
      dispatch(actionTypes.EDIT_SUBPERF_SUCCESS(data));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Sub Performance Edited",
          icon: "success",
          dangerMode: false,
          }).then((result => {
          if(result) {
            history.push('/subPerformance')
          }
      }));
      }
    })
    .catch(error => {
      console.log(error, "data not edited error");
      dispatch(actionTypes.EDIT_SUBPERF_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};
