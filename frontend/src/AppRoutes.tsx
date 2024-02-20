import { Navigate, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<div>This is the home page</div>} />
            <Route path="/user" element={<div>This is the user page</div>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes