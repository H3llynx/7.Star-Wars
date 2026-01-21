import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./features/HomePage/HomePage";

export const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
]);