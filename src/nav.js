export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "User Profile",
      url: "/users",
      icon: "fa fa-user-circle-o"
    },
    {
      name: "Departments",
      url: "/departments",
      icon: "fa fa-group"
    },
    {
      name: "Sales",
      url: "/proposal",
      icon: "fa fa-briefcase"
    },
    {
      name: "Performance Matrix",
      icon: "fa fa-pie-chart",
      children: [
        {
          name: "Main Parameters",
          url: "/performance",
          icon: "fa fa-line-chart"
        },
        {
          name: "Sub Performance",
          url: "/subPerformance",
          icon: "fa fa-area-chart"
        },
        {
          name: "Evaluation",
          url: "/evaluation",
          icon: "fa fa-calculator"
        }
      ]
    },
    {
      name: "Time Log",
      url: "/timelog",
      icon: "fa fa-history"
    },
    {
      name: "Minutes Of Meeting",
      url: "/meeting",
      icon: "fa fa-check-square"
    },
    {
      name: "Hr Canidacy",
      url: "/hrCandidacy",
      icon: "fa fa-suitcase"
    },
  ]
};
