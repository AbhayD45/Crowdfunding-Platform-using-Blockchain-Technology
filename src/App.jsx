import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import BackingPage from './views/BackingPage'
import InfoPage from './views/InfoPage'
import Project from './views/Project'
import ProjectsPage from './views/ProjectsPage'
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const loadBlockchain = async () => {
      await isWallectConnected()
      console.log('Blockchain loaded')
      setLoaded(true)
    }

    loadBlockchain()
  }, [])

  useEffect(() => {
    if (!loaded) return

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location, loaded])

  return (
    <div className="min-h-screen relative">
      <Header />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/backing" element={<BackingPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
