import { Navigate, Outlet } from "react-router-dom"
import auth from "../auth"

export const AppRoutes = () => {
    return (
        auth.isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />
    )
}