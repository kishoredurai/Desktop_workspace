import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Profile } from "../pages/user/profile";
import { Login } from "../login/Login";
import { Dashboard } from "../pages/user/dashboard";
import { Machine_screen } from "../pages/user/machine_screen";
import { Ticket } from "../pages/user/ticket";
import { New_feed } from "../pages/user/sub_page/new_feed";
import { Feed_detail } from "../pages/user/sub_page/feed_detail";



// admin page componenets

import { Admin_dasboard } from "../pages/admin/admin_dashboard";
import { Container_image } from "../pages/admin/container_image";
import { Container } from "../pages/admin/container";
import { Conatiner_user } from "../pages/admin/container_user";
import { New_image } from "../pages/admin/sub_page/new_image";
import { New_container } from "../pages/admin/sub_page/new_container";




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
    path: "/ticket",
    element: <Ticket />,
  },
  {
    path: "/ticket/new",
    element: <New_feed />,
  },
  {
    path: "/ticket/details/",
    element: <Feed_detail />,
  },
  {
    path: "/home",
    element: <Machine_screen />
  },
  {
    path: "/admin/dashboard",
    element: <Admin_dasboard />
  },
  {
    path: "/admin/image",
    element: <Container_image />
  },
  {
    path: "/admin/image/new",
    element: <New_image />
  },
  {
    path: "/admin/container",
    element: <Container />
  },
  {
    path: "/admin/container/new",
    element: <New_container />
  },
  {
    path: "/admin/container/users",
    element: <Conatiner_user />
  },
  {
    path: "*",
    element: <Login />,
  },
];

export default Router;
