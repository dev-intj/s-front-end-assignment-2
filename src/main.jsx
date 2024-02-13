import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Root from "./routes/blogs";
import Details from "./routes/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "blogs",
    element: <Root />,
  },
  {
    path: "blogs/:blogID",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
