import React from "react";

const LoginPage = React.lazy(() => import("../pages/Login"));

const PublicRouteList = [
  {
    path: "/",
    component: LoginPage,
  },
];

export { PublicRouteList };
