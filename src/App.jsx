import { Outlet } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <h1>Helloo App</h1>
      <Outlet />
    </AppProvider>
  )
}

export default App
