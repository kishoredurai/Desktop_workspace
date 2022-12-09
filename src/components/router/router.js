import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "../pages/user/profile";
import { Login } from "../login/Login";
import { Dashboard } from "../pages/user/dashboard";
import { Machine_screen } from "../pages/user/machine_screen";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routerList.map((route, i) => (
          <Route exact key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
const routerList = [
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/home",
    element: <Machine_screen />
  },
  {
    path: "*",
    element: <Login />,
  },
];

export default Router;
