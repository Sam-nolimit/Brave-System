import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App, {
  loader as rootLoader,
  action as rootAction
} from "./App";
import ErrorPage from "./error-page";
import Contact,{ loader as contactLoader, action as contactAction } from "./Pages/Clients/contact";
import EditContact, { action as editAction } from "./Pages/Clients/Edit";
import { action as destroyAction } from "./Pages/Clients/destroy";
import Index from "./Pages/Clients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
    { index: true, element: <Index /> },
      {
       path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
         action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
         errorElement: <div>Oops! There was an error.</div>,
      },
    ]
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);