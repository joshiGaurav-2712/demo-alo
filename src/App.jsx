import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ElementDefault } from "./screens/ElementDefault";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementDefault />,
  },
  {
    path: "/390w-default",
    element: <ElementDefault />,
  },
  
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
