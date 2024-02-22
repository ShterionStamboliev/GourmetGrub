import { Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout> <HomePage /> </MainLayout>} />
            <Route path="/user" element={<div>This is the user page</div>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes