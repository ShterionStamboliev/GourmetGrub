import { Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout>Home page</MainLayout>} />
            <Route path="/user" element={<div>This is the user page</div>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes