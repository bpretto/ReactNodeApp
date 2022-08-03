import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AllTasks } from "../pages/app/AllTasks";
import { Home } from "../pages/auth/Home";
import { Login } from "../pages/auth/Login";
import { Signup } from "../pages/auth/Signup";

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />    
                <Route path="/AllTasks" element={<AllTasks />} />            
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}
