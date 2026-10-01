import Hero from '../components/sections/Hero'
import OurStory from '../components/sections/OurStory'
import HodMessage from '../components/sections/HodMessage'
import DeptStructure from '../components/sections/DeptStructure'
import Units from '../components/sections/Units'
import Executives from '../components/sections/Executives'
import GradClass from '../components/sections/GradClass'
import MemoriesPreview from '../components/sections/MemoriesPreview'
import Awards from '../components/sections/Awards'
import Gratitude from '../components/sections/Gratitude'
import NextChapter from '../components/sections/NextChapter'
import Guestbook from '../components/sections/Guestbook' 
import CreativeSupport from '../components/sections/CreativeSupport'

function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <HodMessage />
      <DeptStructure />
      <Units />
      <CreativeSupport />
      <Executives />
      <GradClass />
      <MemoriesPreview />
      <Awards />
      <Gratitude />
      <NextChapter />
      <Guestbook />
    </>
  )
}

export default HomePage