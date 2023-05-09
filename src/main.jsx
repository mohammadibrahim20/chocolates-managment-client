import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Create from "./components/Create.jsx";
import Home from "./components/Home.jsx";
import Update from "./components/Update.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chocolates"),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`)
      },
      {
        path: "addProduct",
        element: <Create></Create>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
