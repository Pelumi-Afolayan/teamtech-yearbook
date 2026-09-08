import SectionWrapper from '../layout/SectionWrapper'
import UnitCard from '../shared/UnitCard'
import { units } from '../../data/units'

function Units() {
  return (
    <SectionWrapper
      id="units"
      className="bg-[#00344d] text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-4 text-lg font-black uppercase tracking-[0.18em] text-[#ef3340]">
            Where We Serve
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
            Our Units
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#c4d6de]">
            Different skills, distinct responsibilities and one shared
            commitment to serving with excellence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {units.map((unit, index) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Units