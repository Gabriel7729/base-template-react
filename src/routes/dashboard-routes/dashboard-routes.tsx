import { Routes, Route } from "react-router-dom";
import { mainRouter } from "./main-router";

export const DashboardRoutes = (): JSX.Element => {
  return (
    <Routes>
      {mainRouter.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
