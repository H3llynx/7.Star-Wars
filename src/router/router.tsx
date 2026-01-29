import { createHashRouter } from "react-router";
import { Layout } from "../components/Layout/Layout";
import { Auth } from "../features/Auth/Auth";
import { HomePage } from "../features/HomePage/HomePage";
import { StarShips } from "../features/StarShips/StarShips";
import { ShipView } from "../features/StarShips/components/ShipView/ShipView";
import { ProtectedRoutes } from "./ProtectedRoutes";

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
                path: "/starships",
                element: (
                    <ProtectedRoutes>
                        <StarShips />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/starships/:id",
                element: (
                    <ProtectedRoutes>
                        <ShipView />
                    </ProtectedRoutes>
                )
            },
            {
                path: "/auth",
                element: <Auth />
            },
        ]
    }
]);