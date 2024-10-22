import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import CarDetail from "./components/CarDetail"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardetail",
    element: <CarDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
