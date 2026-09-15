import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import PersonCard from '../shared/PersonCard'
import { newExecutives } from '../../data/newExecutives'
import { incomingUnits } from '../../data/incomingUnits'
import type { IncomingUnitLeader } from '../../types/incomingUnit'

interface UnitLeaderCardProps {
  leader: IncomingUnitLeader
}

function UnitLeaderCard({ leader }: UnitLeaderCardProps) {
  const initials =
    leader.name === 'To Be Added'
      ? 'TBA'
      : leader.name
          .split(' ')
          .map((word) => word[0])
          .join('')
          .slice(0, 2)

  return (
    <article className="h-full overflow-hidden bg-[#f5ecdc] shadow-sm">
      {leader.photoUrl ? (
        <img
          src={leader.photoUrl}
          alt={leader.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top"
        />
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-[#00344d] to-[#2f7899]">
          <span className="text-3xl font-black text-white">
            {initials}
          </span>
        </div>
      )}

      <div className="flex h-32 flex-col items-center justify-center border-t-4 border-[#c90016] px-3 py-4 text-center sm:h-28">
        <h4 className="text-sm font-black uppercase leading-tight text-[#00344d]">
          {leader.name}
        </h4>

        <p className="mt-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.08em] text-[#c90016]">
          {leader.position}
        </p>
      </div>
    </article>
  )
}

function NextChapter() {
  return (
    <section
      id="next-chapter"
      className="overflow-hidden bg-[#75a9c4] text-[#00344d]"
    >
      <SectionWrapper>
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-lg font-black uppercase tracking-[0.2em] text-[#c90016]">
              2026/2027
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              The Next Chapter
            </h2>

            <p className="mt-5 text-lg font-bold uppercase tracking-[0.12em] text-[#174d66]">
              New Executives
            </p>

            <div className="mx-auto mt-7 h-[3px] w-16 bg-[#c90016]" />
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {newExecutives.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: (index % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <PersonCard person={person} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="mb-12 mt-24 text-center"
          >
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#c90016]">
              Serving Across Every Unit
            </p>

            <h3 className="text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">
              New Unit Leadership
            </h3>
          </motion.div>

          <div className="space-y-16">
            {incomingUnits.map((unit, unitIndex) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.85,
                  delay: (unitIndex % 2) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-7 flex items-center gap-4">
                  <h4 className="shrink-0 text-xl font-black uppercase sm:text-2xl">
                    {unit.name}
                  </h4>

                  <div className="h-[2px] w-full bg-[#c90016]" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {unit.leaders.map((leader) => (
                    <div
                      key={leader.id}
                      className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
                    >
                      <UnitLeaderCard leader={leader} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="bg-[#00344d] px-6 py-16 text-center text-white"
      >
        <p className="font-sans text-2xl font-semibold italic leading-relaxed text-[#f5ecdc] sm:text-4xl">
          “Built by those before us.
          <span className="block">
            Carried forward by those who come after us.”
          </span>
        </p>

        <p className="mt-7 text-sm font-black uppercase tracking-[0.25em] text-[#ef3340]">
          The legacy continues
        </p>
      </motion.div>
    </section>
  )
}

export default NextChapter