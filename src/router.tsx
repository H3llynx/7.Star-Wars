import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./features/HomePage/HomePage";
import { StarShips } from "./features/StarShips/StarShips";
import { ShipView } from "./features/StarShips/components/ShipView/ShipView";

export const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "starships",
                element: <StarShips />
            },
            {
                path: "starships/:id",
                element: <ShipView />
            }
        ]
    }
]);