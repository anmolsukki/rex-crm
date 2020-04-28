import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import UserProfileReducer from "../Reducers/UserProfileReducer";
import DepartmentsReducer from "../Reducers/DepartmentsReducer";
import PerformanceReducer from "../Reducers/PerformanceReducer";
import SubPerformance from "../Reducers/SubPerformanceReducer";
import CalReducer from "../Reducers/CalculationReducer";
import TimeLogReducer from "../Reducers/TimeLogReducer";
import MomReducer from "../Reducers/MomReducer";
import SalesReducer from "../Reducers/SalesReducer";
import LoginReducer from "../Reducers/LoginReducer";
import HrCandidacyReducer from "../Reducers/HrCandidacyReducer";

const reducer = combineReducers({
  CtrUser: UserProfileReducer,
  CtrDepartment: DepartmentsReducer,
  CtrPerformance: PerformanceReducer,
  CtrSubPerformance: SubPerformance,
  CtrCalReducer: CalReducer,
  CtrMom: MomReducer,
  ctrTimeLog: TimeLogReducer,
  CtrSales: SalesReducer,
  CtrlLogin: LoginReducer,
  CtrlHrCandidacy: HrCandidacyReducer
});

const logger = store => {
  return next => {
    return action => {
      // console.log("[Middleware] dispatching", action);
      const result = next(action);
      // console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
