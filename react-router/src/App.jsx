
import { useEffect, useState } from 'react'; // Import the useState hook from the react package
import './App.css'
import {EVENTS} from './const'
import HomePage from './pages/Home'
import AboutPage from './pages/AboutUs'







function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
  const onLoadingChange = () => {
      setCurrentPath(window.location.pathname)
    }
  
  window.addEventListener(EVENTS.PUSHSTATE, onLoadingChange)
  window.addEventListener(EVENTS.POPSTATE, onLoadingChange)


  return () => {
    window.removeEventListener(EVENTS.PUSHSTATE, onLoadingChange)
    window.removeEventListener(EVENTS.POPSTATE, onLoadingChange)}
  },[])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
