import { useEffect } from 'react'
import { BrowserRouter } from 'react-router'
import AppRoutes from '../routes/AppRoutes'

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App