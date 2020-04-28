import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import swal from 'sweetalert';
import history from '../ActionTypes/ActionHistory';
import { getHeaders } from "../Header/AuthHeader"

export const getDepartment = () => {
  let url = connection.concat("/api/department");
  return async dispatch => {
    dispatch(actionTypes.DEPARTMENTS_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "department data get successfully");
      dispatch(actionTypes.DEPARTMENTS_SUCCESS(res.data.data));
    })
    .catch(error => {
      console.log(error, "department data not found error");
      dispatch(actionTypes.DEPARTMENTS_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const addDepartments = data => {
  let url = connection.concat("/api/department");
  return async dispatch => {
    dispatch(actionTypes.ADD_DEPT_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "department data add successfully");
      dispatch(actionTypes.ADD_DEPT_SUCCESS(res));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Department Added",
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
      console.log(error, "department data not add error");
      dispatch(actionTypes.ADD_DEPT_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const getDepartmentById = (data) => {
  let url = connection.concat(`/api/department/${data.id}`);
  return async dispatch => {
    dispatch(actionTypes.DEPT_BY_ID_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "department data get successfully");
      dispatch(actionTypes.DEPT_BY_ID_SUCCESS(res.data.data));
    })
    .catch(error => {
      console.log(error, "department data not found error");
      dispatch(actionTypes.DEPT_BY_ID_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const editDepartment = data => {
  let url = connection.concat(`/api/department/${data.id}`);
  return async dispatch => {
    dispatch(actionTypes.EDIT_DEPT_INIT());
    return axios
    .patch(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "department data edit successfully");
      dispatch(actionTypes.EDIT_DEPT_SUCCESS(data));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Department Edited",
          icon: "success",
          dangerMode: false,
          }).then((result => {
          if(result) {
            history.push('/departments')
          }
      }));
      }
    })
    .catch(error => {
      console.log(error, "department data not edited error");
      dispatch(actionTypes.EDIT_DEPT_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};
