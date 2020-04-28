import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import swal from 'sweetalert';
import history from '../ActionTypes/ActionHistory';
import { getHeaders } from "../Header/AuthHeader";

export const getUsersDataAction = () => {
  let url = connection.concat("/api/users");
  return async dispatch => {
    dispatch(actionTypes.USERS_DATA_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "Users data get successfully");
      dispatch(actionTypes.USERS_DATA_SUCCESS(res.data));
    })
    .catch(error => {
      console.log(error, "Users data not found error");
      dispatch(actionTypes.USERS_DATA_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const getUserDepartment = () => {
  let url = connection.concat("/api/department");
  return async dispatch => {
    dispatch(actionTypes.USER_DEPARTMENTS_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "UserDepartment data success");
      dispatch(
        actionTypes.USER_DEPARTMENTS_SUCCESS(res.data.data ? res.data.data : [])
      );
    })
    .catch(error => {
      console.log(error, "UserDepartment data not found error");
      dispatch(actionTypes.USER_DEPARTMENTS_ERROR(error));
      if(error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const addUsersDataAction = data => {
  let url = connection.concat("/api/users");
  return async dispatch => {
    dispatch(actionTypes.ADD_USER_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "Add User successfully");
      dispatch(actionTypes.ADD_USER_SUCCESS(res.data));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "User Added",
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
      console.log(error, "Add User error");
      dispatch(actionTypes.ADD_USER_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const getUsersById = data => {
  let url = connection.concat("/api/users/" + data.id);
  return async dispatch => {
    dispatch(actionTypes.EDIT_USER_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res.data, "getUsersById data success");
      dispatch(actionTypes.EDIT_USER_SUCCESS(res.data));
    })
    .catch(error => {
      console.log(error, "getUsersById error");
      dispatch(actionTypes.EDIT_USER_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const userPermissionDataAction = () => {
  let url = connection.concat("/api/getPermissions");
  return async dispatch => {
    dispatch(actionTypes.USERS_PERMISSION_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "Permission data get successfully");
      dispatch(actionTypes.USERS_PERMISSION_SUCCESS(res.data));
    })
    .catch(error => {
      console.log(error, "Permission data not found error");
      dispatch(actionTypes.USERS_PERMISSION_ERROR(error));
      if(error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const updateUsers = data => {
  let url = connection.concat("/api/users/" + data.id);
  return async dispatch => {
    dispatch(actionTypes.UPDATE_USER_INIT());
    return axios
    .patch(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "updateUsers data success");
      dispatch(actionTypes.UPDATE_USER_SUCCESS(res.data));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "User Data Updated",
          icon: "success",
          dangerMode: false,
          }).then((result => {
          if(result) {
            history.push('/users')
          }
      }));
      }
    })
    .catch(error => {
      console.log(error, "data not found error");
      dispatch(actionTypes.UPDATE_USER_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
      else {
        swal({
          title: "Error",
          text: "Something Went Wrong",
          icon: "error",
          dangerMode: true,
        })
      }
    });
  };
};
