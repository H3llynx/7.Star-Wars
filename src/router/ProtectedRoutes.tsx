import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "../app/hooks";

export function ProtectedRoutes({ children }: { children: ReactNode }) {
    const { user } = useAppSelector(state => state.auth)

    if (!user) {
        return <Navigate to="/auth" replace />
    }

    return (
        <>{children}</>
    )
}