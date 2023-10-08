import { createBrowserRouter } from "react-router-dom";
import TypesOfComponents from "./TypesOfComponents.ts";
import App from "./App.tsx";
import { Buttons, Icons, Inputs, Loader, Notifications, Selects, Tooltips } from "../components/index.ts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: TypesOfComponents.buttons,
          element: <Buttons />,
        },
        {
          path: TypesOfComponents.icons,
          element: <Icons />,
        },
        {
          path: TypesOfComponents.inputs,
          element: <Inputs />,
        },
        {
          path: TypesOfComponents.loader,
          element: <Loader />,
        },
        {
          path: TypesOfComponents.notifications,
          element: <Notifications />,
        },
        {
          path: TypesOfComponents.selects,
          element: <Selects />,
        },
        {
          path: TypesOfComponents.tooltips,
          element: <Tooltips />,
        },
      ],
    }
  ]);