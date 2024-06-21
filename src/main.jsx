import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root';
import { Prod } from './Product';
import { Api } from './Api';
import { Map } from './Map';
import { Graph } from './Graph';

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/prod",
    element: <Prod />,
  },
  {
    path: "/api",
    element: <Api />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/graph",
    element: <Graph />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
