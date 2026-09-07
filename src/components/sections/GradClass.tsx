import SectionWrapper from '../layout/SectionWrapper'
import GraduateCard from '../shared/GraduateCard'
import { graduates } from '../../data/graduates'

function GradClass() {
  return (
    <SectionWrapper id="graduating-class">
      <h2 className="text-3xl font-bold text-center mb-10">
        Graduating Class — 2026
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {graduates.map((graduate) => (
          <GraduateCard key={graduate.id} graduate={graduate} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default GradClass