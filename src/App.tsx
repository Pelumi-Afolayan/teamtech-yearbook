import { Route, Routes } from 'react-router'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import GraduatesPage from './pages/GraduatesPage'
import MemoriesPage from './pages/MemoriesPage'
import ScrollToHash from './components/shared/ScrollToHash'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
      </Routes>
    </>
  )
}

export default App