import { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "@routes/routePaths";

interface Props {
  children: JSX.Element | JSX.Element[] | null | undefined;
}

const PublicRoute = ({ children }: Props) => {
  const isAuthenticated = "";

  if (isAuthenticated) {
    return <Navigate to={ROUTES.unAuthorized} />;
  }
  return children;
};

export default PublicRoute;
