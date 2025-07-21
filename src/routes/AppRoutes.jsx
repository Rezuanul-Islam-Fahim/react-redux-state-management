import { Routes, Route } from 'react-router';
import { Counter } from '@/features/Counter';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Counter />} />
    </Routes>
  );
};

export default AppRoutes;
