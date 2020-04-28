import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import swal from 'sweetalert';
import { getHeaders } from "../Header/AuthHeader";

export const getAddCalculation = () => {
  let url = connection.concat("/api/matrixCalculation/addcalculation");
  return async dispatch => {
    dispatch(actionTypes.GET_CAL_INIT());
    return axios
    .get(url, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "calculation data get successfully");
      dispatch(actionTypes.GET_CAL_SUCCESS(res.data.data));
    })
    .catch(error => {
      console.log(error, "calculation data not found error");
      dispatch(actionTypes.GET_CAL_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};

export const saveCalculation = data => {
  let url = connection.concat("/api/matrixCalculation/calculateUserPerformance");
  return async dispatch => {
    dispatch(actionTypes.SAVE_CAL_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "save calculation data get successfully");
      dispatch(actionTypes.SAVE_CAL_SUCCESS(res));
      if(res.status === 200){
        swal({
          title: "Success",
          text: "Feedback Saved",
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
      console.log(error, "save calculation data not found error");
      dispatch(actionTypes.SAVE_CAL_ERROR(error));
      if(error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("roleId");
      }
    });
  };
};
