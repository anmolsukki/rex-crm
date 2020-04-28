import * as actionTypes from "../ActionTypes/ActionTypes";
import connection from "../../../Config/APIurl/connection";
import axios from "axios";
import { toast } from "react-toastify";
import history from '../ActionTypes/ActionHistory';
import { getHeaders } from "../Header/AuthHeader"

export const loginAuthAction = data => {
  let url = connection.concat("/login");
  return async dispatch => {
    dispatch(actionTypes.LOGIN_AUTH_INIT());
    return axios
    .post(url, data, {headers: await getHeaders(true)})
    .then(res => {
      console.log(res, "Login successfully");
      dispatch(actionTypes.LOGIN_AUTH_SUCCESS(res.data));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userRole", res.data.user.id);
      localStorage.setItem("roleId", res.data.user.roleId);
      localStorage.setItem("guid", res.data.user.guid);
      // eslint-disable-next-line
      localStorage.getItem("roleId") == 3 ? 
      toast.info("Logged In Successfully!", {
        autoClose: 1000,
        onClose: () => history.push("/user/dashboard")
      }) :
      toast.info("Logged In Successfully!", {
        autoClose: 1000,
        onClose: () => history.push("/dashboard")
      });
    })
    .catch(error => {
      console.log(error, "Login error");
      dispatch(actionTypes.LOGIN_AUTH_ERROR(error));
      toast.error("Something Went Wrong!", {
        autoClose: 1000
      })
    });
  };
};
