import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRouteList } from "@routes/routeMapper";
import PublicRoute from "@routes/publicRoutes";

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRouteList?.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PublicRoute>{<route.component />}</PublicRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
