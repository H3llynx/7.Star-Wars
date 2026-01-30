import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading/Loading";

export function ProtectedRoutes({ children }: { children: ReactNode }) {
    const { user, loading } = useAppSelector(state => state.auth)
    if (loading) {
        return <Loading />
    }

    if (!user && !loading) {
        return <Navigate to="/auth" replace />
    }

    return (
        <>{children}</>
    )
}