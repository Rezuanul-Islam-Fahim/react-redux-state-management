import { Routes, Route } from 'react-router'
import Dashboard from '../features/Dashboard'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoutes