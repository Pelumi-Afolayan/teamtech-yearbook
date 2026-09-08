import SectionWrapper from '../layout/SectionWrapper'
import PersonCard from '../shared/PersonCard'
import { executives } from '../../data/executives'

function Executives() {
  return (
    <SectionWrapper
      id="executives"
      className="bg-[#f5ecdc]"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-5xl font-black uppercase leading-[0.82] tracking-[-0.06em] sm:text-6xl md:text-8xl">
          <span className="block bg-gradient-to-r from-[#00344d] to-[#75a9c4] bg-clip-text text-transparent">
            Outgoing
          </span>

          <span className="block bg-gradient-to-r from-[#00344d] to-[#75a9c4] bg-clip-text text-transparent">
            Executives
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {executives.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Executives