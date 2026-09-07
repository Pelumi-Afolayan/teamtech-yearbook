import SectionWrapper from '../layout/SectionWrapper'
import PersonCard from '../shared/PersonCard'
import { executives } from '../../data/executives'

function Executives() {
  return (
    <SectionWrapper id="executives">
      <h2 className="text-3xl font-bold text-center mb-10">
        Outgoing Executives
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {executives.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Executives