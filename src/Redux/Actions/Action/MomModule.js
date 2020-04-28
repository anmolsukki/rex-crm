import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import swal from 'sweetalert';
import history from '../ActionTypes/ActionHistory';
import { getHeaders } from "../Header/AuthHeader";

let url;
export const getMomData = (data) => {
  if (data === undefined) {
    url = connection.concat(`/api/mom`);
  }
  else {
    url = connection.concat(`/api/mom/${data.id}`);
  }
  return async dispatch => {
    dispatch(actionTypes.MOM_GET_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "Mom data get successfully");
      dispatch(actionTypes.MOM_GET_SUCCESS(res.data.data));
    })
    .catch(error => {
      console.log(error, "Mom data not found error");
      dispatch(actionTypes.MOM_GET_ERROR(error));
      if(error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const submitMomData = data => {
  let url = connection.concat("/api/mom");
  return async dispatch => {
    dispatch(actionTypes.SUB_MOM_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "mom submitted successfully");
      dispatch(actionTypes.SUB_MOM_SUCCESS(res));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Minutes Of Meeting Submitted",
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
      console.log(error, "mom dubmitted error");
      dispatch(actionTypes.SUB_MOM_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const editMomDataAction = data => {
  let url = connection.concat(`/api/mom/${data.id}`);
  return async dispatch => {
    dispatch(actionTypes.EDIT_MOM_INIT());
    return axios
    .patch(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "Mom Edited successfully");
      dispatch(actionTypes.EDIT_MOM_SUCCESS(res));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Minutes Of Meeting Edited",
          icon: "success",
          dangerMode: false,
          }).then((result => {
          if(result) {
            history.push('/meeting')
          }
      }));
      }
    })
    .catch(error => {
      console.log(error, "Mom Edited error");
      dispatch(actionTypes.EDIT_MOM_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};