import { Route, Routes } from 'react-router'
import { AuthBlocker } from './components/AuthBlocker'
import Layout from './components/Layout'
import AuthCallbackPage from './pages/AuthCallbackPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <AuthBlocker>
                            <DashboardPage />
                        </AuthBlocker>
                    }
                />
                <Route path="/auth/callback" element={<AuthCallbackPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
        </Routes>
    )
}

export default App
