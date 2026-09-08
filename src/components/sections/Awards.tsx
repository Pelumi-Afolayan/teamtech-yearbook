import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import AwardCard from '../shared/AwardCard'
import { awards } from '../../data/awards'

function Awards() {
  return (
    <SectionWrapper
      id="awards"
      className="bg-[#f5ecdc] text-[#00344d]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-4 text-lg font-black uppercase tracking-[0.18em] text-[#c90016]">
            Celebrating Excellence
          </p>

          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
            Unit Recognition & Awards
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#516a76]">
            Honouring the individuals whose dedication, growth and service
            made a meaningful difference throughout the session.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <AwardCard
              key={award.id}
              award={award}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Awards