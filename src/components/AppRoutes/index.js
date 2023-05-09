import { Routes, Route } from "react-router-dom";
import Dashboard from "../../modules/Dashboard";

import { routesData } from "./../../static-data";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {routesData.map((item, index) => (
          <Route key={index} path={`/${item.path}`} element={item.element} />
        ))}
      </Routes>
    </>
  );
}

export default AppRoutes;
