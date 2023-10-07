import { createBrowserRouter } from "react-router-dom";
import TypesOfComponents from "./TypesOfComponents.ts";
import { Buttons } from '../components/buttons/Buttons.tsx';
import App from "./App.tsx";

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
          element: <div>Element</div>,
        },
        {
          path: TypesOfComponents.inputs,
          element: <div>Element</div>,
        },
        {
          path: TypesOfComponents.loader,
          element: <div>Element</div>,
        },
        {
          path: TypesOfComponents.notifications,
          element: <div>Element</div>,
        },
        {
          path: TypesOfComponents.selects,
          element: <div>Element</div>,
        },
      ],
    }
  ]);