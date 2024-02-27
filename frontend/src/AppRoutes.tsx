import { Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import GuardRoute from "./auth/GuardRoute"
import { RestaurantPage } from "./pages/RestaurantPage"

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout showHero>
                        <HomePage />
                    </MainLayout>
                }
            />
            <Route
                path="/auth-callback"
                element={
                    <AuthCallbackPage />
                }
            />
            <Route element={<GuardRoute />}>
                <Route
                    path="/my-profile"
                    element={
                        <MainLayout>
                            <UserProfilePage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/my-restaurant"
                    element={
                        <MainLayout>
                            <RestaurantPage />
                        </MainLayout>
                    }
                />
            </Route>

            <Route
                path="*"
                element={
                    <Navigate to="/" />
                }
            />
        </Routes>
    )
}

export default AppRoutes