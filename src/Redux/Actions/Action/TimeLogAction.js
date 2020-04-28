import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import { toast } from 'react-toastify';
import { getHeaders } from "../Header/AuthHeader";

export const addCheckIn = data => {
  let url = connection.concat("/api/timelog");
  return async dispatch => {
    dispatch(actionTypes.CHECKIN_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "data Check In successfully");
      dispatch(actionTypes.CHECKIN_SUCCESS(res));
      toast.success(res.data.result)
    })
    .catch(error => {
      console.log(error, "data Check In error");
      dispatch(actionTypes.CHECKIN_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const updateCheckout = (userId) => {
  let url = connection.concat(`/api/timelog/${userId.userId}`);
  return async dispatch => {
    dispatch(actionTypes.CHECKOUT_INIT());
    return axios
    .patch(url, userId, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "checkout successfully");
      dispatch(actionTypes.CHECKOUT_SUCCESS(userId));
      toast.success(res.data.result)
    })
    .catch(error => {
      console.log(error, "checkout error");
      dispatch(actionTypes.CHECKOUT_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};
