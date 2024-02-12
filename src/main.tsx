import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Error } from "./components/pages/Error/index";
import { App } from "./App";
import { Home } from "./components/pages/Home/index";
import { Contacts } from "./components/pages/Contacts/index";
import { Transfer } from "./components/pages/Transfer";
import "./index.css";
import store from "./store";
import { ChangeUser } from "./components/pages/ChangeUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ChangeUser />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/transfer/:id",
        element: <Transfer />,
      },
      {
        path: "/home/:id",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </React.StrictMode>
  </Provider>
);
