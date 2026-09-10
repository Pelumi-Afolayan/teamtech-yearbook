import { Route, Routes } from 'react-router'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import ScrollToHash from './components/shared/ScrollToHash'
import HomePage from './pages/HomePage'
import GraduatesPage from './pages/GraduatesPage'
import MemoriesPage from './pages/MemoriesPage'

function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graduates" element={<GraduatesPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App