import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AllTasks } from "../pages/app/AllTasks";
import { CreateTask } from '../pages/app/CreateTask';
import { UpdateTask } from '../pages/app/UpdateTask';
import { Home } from "../pages/auth/Home";
import { Login } from "../pages/auth/Login";
import { Signup } from "../pages/auth/Signup";
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthRoutes />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route element={<AppRoutes />} >
                    <Route path="/all-tasks" element={<AllTasks />} />
                    <Route path="/create-task" element={<CreateTask />} />
                    <Route path="/update-task" element={<UpdateTask />} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}
