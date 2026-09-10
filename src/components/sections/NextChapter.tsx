import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import PersonCard from '../shared/PersonCard'
import { newExecutives } from '../../data/newExecutives'

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
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
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
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                  ease: 'easeOut',
                }}
              >
                <PersonCard person={person} />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
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