import Hero from './components/sections/Hero'
import OurStory from './components/sections/OurStory'
import HodMessage from './components/sections/HodMessage'
import Executives from './components/sections/Executives'
import GradClass from './components/sections/GradClass'
import DeptStructure from './components/sections/DeptStructure'
import Units from './components/sections/Units'
import Memories from './components/sections/Memories'
import Awards from './components/sections/Awards'
import Gratitude from './components/sections/Gratitude'
import NextChapter from './components/sections/NextChapter'

function App() {
  return (
    <>
      <Hero />

      <main id="yearbook-content">
        <OurStory />
        <HodMessage />
        <DeptStructure />
        <Units />
        <Executives />
        <GradClass />
        <Memories />
        <Awards />
        <Gratitude />
        <NextChapter />
      </main>
    </>
  )
}

export default App