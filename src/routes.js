import React from "react";
import DefaultLayout from "./containers/DefaultLayout";

const Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));

const UserTable = React.lazy(() => import("./views/UserProfile/UserTables"));
const AddUsers = React.lazy(() => import("./views/UserProfile/AddUser"));
const EditUsers = React.lazy(() => import("./views/UserProfile/EditUser"));

const Departments = React.lazy(() => import("./views/Departments/DepartmentTables"));
const AddDepartment = React.lazy(() => import("./views/Departments/AddDepartment"));
const EditDepartment = React.lazy(() => import("./views/Departments/EditDepartment"));

const Performance = React.lazy(() => import("./views/Performance/PerformanceTable"));
const AddPerformance = React.lazy(() => import("./views/Performance/AddPerformance"));
const EditPerformance = React.lazy(() => import("./views/Performance/EditPerformance"));

const SubPerformance = React.lazy(() => import("./views/SubPerformance/SubPerformanceTable"));
const AddSubPerformance = React.lazy(() => import("./views/SubPerformance/AddSubPerformance"));
const EditSubPerformance = React.lazy(() => import("./views/SubPerformance/EditSubPerformance"));

const Evaluation = React.lazy(() => import("./views/Evaluation/EvaluationTable"));
const ShowEvaluation = React.lazy(() => import("./views/Evaluation/ShowCalculations"));

const TimeLog = React.lazy(() => import("./views/TimeLog/TimeLog"));

const MOMList = React.lazy(() => import("./views/Mom/MomList"));
const MOMSteps = React.lazy(() => import("./views/Mom/MomForm"));
const MOMEdit = React.lazy(() => import("./views/Mom/EditMom"));

const Sales = React.lazy(() => import("./views/Sales/ProposalTable"));
const FollowUp = React.lazy(() => import("./views/Sales/FollowUp"));
const Closed = React.lazy(() => import("./views/Sales/Closed"));
const AddProposal = React.lazy(() => import("./views/Sales/AddProposal"));
const EditProposal = React.lazy(() => import("./views/Sales/EditProposal"));
const SalesTarget = React.lazy(() => import("./views/Sales/SalesTarget"));
const Graph = React.lazy(() => import("./views/Sales/GraphView"));

const HrCandidacy = React.lazy(() => import("./views/HrCandidacy/HrCandidacyList"));
const PendingHrCandidacy = React.lazy(() => import("./views/HrCandidacy/CandidatePending"));
const SelectedHrCandidacy = React.lazy(() => import("./views/HrCandidacy/SelectedCandidate"));
const AddHrCandidacy = React.lazy(() => import("./views/HrCandidacy/AddCandidate"));
const EditHrCandidacy = React.lazy(() => import("./views/HrCandidacy/EditCandidate"));

const routes = [
  { path: "/", name: "Home", component: DefaultLayout, exact: true, isPrivate: true },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
 
  { path: "/users", name: "Users", component: UserTable, exact: true, isPrivate: true },
  { path: "/users/add", name: "Add User", component: AddUsers, exact: true, isPrivate: true },
  { path: "/users/edit/:id", name: "Edit User", component: EditUsers, exact: true, isPrivate: true },

  { path: "/departments", name: "Departments", component: Departments, exact: true, isPrivate: true },
  { path: "/departments/add", name: "Add-Department", component: AddDepartment, exact: true, isPrivate: true },
  { path: "/departments/edit/:id", name: "Edit-Department", component: EditDepartment, exact: true, isPrivate: true },
 
  { path: "/performance", name: "Performance", component: Performance, exact: true, isPrivate: true },
  { path: "/performance/add", name: "Add-Performance", component: AddPerformance, exact: true, isPrivate: true },
  { path: "/performance/edit/:id", name: "Edit-performance", component: EditPerformance, exact: true, isPrivate: true },
  
  { path: "/subPerformance", name: "Sub-Performance", component: SubPerformance, exact: true, isPrivate: true },
  { path: "/subPerformance/add", name: "Add-Sub-Performance", component: AddSubPerformance, exact: true, isPrivate: true },
  { path: "/subPerformance/edit/:id", name: "Edit-Sub-Performance", component: EditSubPerformance, exact: true, isPrivate: true },
  
  { path: "/evaluation", name: "Evaluation", component: Evaluation, exact: true, isPrivate: true },
  { path: "/evaluation/show", name: "Show-Evaluation", component: ShowEvaluation, exact: true, isPrivate: true },

  { path: "/timelog", name: "Time Log", component: TimeLog, exact: true, isPrivate: true },

  { path: "/meeting", name: "Minute Of Meetings", component: MOMList, exact: true, isPrivate: true },
  { path: "/meeting/add", name: "Add Minute Of Meetings", component: MOMSteps, exact: true, isPrivate: true },
  { path: "/meeting/edit/:id", name: "Edit Minute Of Meetings", component: MOMEdit, exact: true, isPrivate: true },

  { path: "/proposal", name: "Sales", component: Sales, exact: true, isPrivate: true },
  { path: "/proposal/follow", name: "Follow Up", component: FollowUp, exact: true, isPrivate: true },
  { path: "/proposal/close", name: "Closed", component: Closed, exact: true, isPrivate: true },
  { path: "/proposal/add", name: "Add Proposal", component: AddProposal, exact: true, isPrivate: true },
  { path: "/proposal/edit/:id", name: "Edit Proposal", component: EditProposal, exact: true, isPrivate: true },
  { path: "/proposal/target", name: "Target", component: SalesTarget, exact: true, isPrivate: true },
  { path: "/proposal/target/:id", name: "Graph", component: Graph, exact: true, isPrivate: true },

  { path: "/hrCandidacy", name: "HR Candidacy", component: HrCandidacy, exact: true, isPrivate: true },
  { path: "/hrCandidacy/pending", name: "Pending Candidate", component: PendingHrCandidacy, exact: true, isPrivate: true },
  { path: "/hrCandidacy/selected", name: "Selected Candidate", component: SelectedHrCandidacy, exact: true, isPrivate: true },
  { path: "/hrCandidacy/add", name: "Add HR Candidacy", component: AddHrCandidacy, exact: true, isPrivate: true },
  { path: "/hrCandidacy/edit/:id", name: "Edit HR Candidacy", component: EditHrCandidacy, exact: true, isPrivate: true },
];

export default routes;
