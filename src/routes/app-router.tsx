import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./private-routes";
import { DashboardRoutes } from "./dashboard-routes";
import { PublicRoutes } from "./public-routes";
import { Unauthorized } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/unAuthorize"
        element={
          <PublicRoutes>
            <Unauthorized />
          </PublicRoutes>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
