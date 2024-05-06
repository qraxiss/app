import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "layout";

//routes
import { publicRoutes } from "./public-routes";
import { authProtectedRoutes, PrivateRoutes } from "./private-routes";

export const AppRouter = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route>
            {publicRoutes.map((route, idx) => (
              <Route
                path={route.path}
                element={<Layout>{route.component}</Layout>}
                key={idx}
              />
            ))}
          </Route>
          <Route element={<PrivateRoutes />}>
            {authProtectedRoutes.map((route, idx) => (
              <Route
                path={route.path}
                element={<Layout>{route.component}</Layout>}
                key={`private-route-${idx}`}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
