import SectionWrapper from '../layout/SectionWrapper'
import UnitCard from '../shared/UnitCard'
import { units } from '../../data/units'

function Units() {
  return (
    <SectionWrapper id="units">
      <h2 className="text-3xl font-bold text-center mb-10">Our Units</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Units