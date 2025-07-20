import { Routes, Route } from 'react-router'
import Dashboard from '@/features/Dashboard'
import { Counter } from '@/features/Counter'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path='/counter-app' element={<Counter />} />
        </Routes>
    )
}

export default AppRoutes