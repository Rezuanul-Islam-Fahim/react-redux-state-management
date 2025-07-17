import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);


  return (
    <h1>This is react-app</h1>
  )
}

export default App