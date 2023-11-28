import { createBrowserRouter } from "react-router-dom";
import TypesOfComponents from "./TypesOfComponents.ts";
import App from "./App.tsx";
import {
    Icons,
    Inputs,
    Loader,
    Notifications,
    Dropdown,
    Tooltips,
} from "../components/index.ts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
                element: <Dropdown />,
            },
            {
                path: TypesOfComponents.tooltips,
                element: <Tooltips />,
            },
        ],
    },
]);
