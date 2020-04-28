import React from "react";
import DefaultLayout from "./containers/DefaultLayout";

const Dashboard = React.lazy(() => import("./UserRoles/Dashboard/Dashboard"));

const Proposal = React.lazy(() => import("./UserRoles/Sales/ProposalTable"));
const UserFollowUp = React.lazy(() => import("./UserRoles/Sales/FollowUp"));
const UserClosed = React.lazy(() => import("./UserRoles/Sales/Closed"));
const UserAddProposal = React.lazy(() => import("./UserRoles/Sales/AddProposal"));
const UserEditProposal = React.lazy(() => import("./UserRoles/Sales/EditProposal"));
const UserTarget = React.lazy(() => import("./UserRoles/Sales/GraphView"));

const MOMList = React.lazy(() => import("./views/Mom/MomList"));
const MOMSteps = React.lazy(() => import("./views/Mom/MomForm"));
const MOMEdit = React.lazy(() => import("./views/Mom/EditMom"));

const userRoutes = [
  { path: "/", name: "Home", component: DefaultLayout, exact: true, isPrivate: true },
  { path: "/user/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  
  { path: "/user/proposal", name: "Proposal", component: Proposal, exact: true, isPrivate: true },
  { path: "/user/proposal/follow", name: "Follow Up", component: UserFollowUp, exact: true, isPrivate: true },
  { path: "/user/proposal/close", name: "Closed", component: UserClosed, exact: true, isPrivate: true },
  { path: "/user/proposal/add", name: "Add Proposal", component: UserAddProposal, exact: true, isPrivate: true },
  { path: "/user/proposal/edit/:id", name: "Edit Proposal", component: UserEditProposal, exact: true, isPrivate: true },
  { path: "/user/proposal/target", name: "Target", component: UserTarget, exact: true, isPrivate: true },

  { path: "/meeting", name: "Minute Of Meetings", component: MOMList, exact: true, isPrivate: true },
  { path: "/meeting/add", name: "Add Minute Of Meetings", component: MOMSteps, exact: true, isPrivate: true },
  { path: "/meeting/edit/:id", name: "Edit Minute Of Meetings", component: MOMEdit, exact: true, isPrivate: true }
];

export default userRoutes;
