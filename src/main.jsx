import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import AuthProvider from "./Providers/AuthProvider";
// import PrivateRoute from "./router/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <PrivateRoute> */}
        <RouterProvider router={router} />
      {/* </PrivateRoute> */}
    </AuthProvider>
  </React.StrictMode>
);
