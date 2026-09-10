import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import PersonCard from '../shared/PersonCard'
import Reveal from '../ui/Reveal'
import { executives } from '../../data/executives'

function Executives() {
  return (
    <SectionWrapper
      id="executives"
      className="overflow-hidden bg-[#f5ecdc]"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal direction="left">
          <h2 className="mb-10 text-5xl font-black uppercase leading-[0.82] tracking-[-0.06em] sm:text-6xl md:text-8xl">
            <span className="block bg-gradient-to-r from-[#00344d] to-[#75a9c4] bg-clip-text text-transparent">
              Outgoing
            </span>

            <span className="block bg-gradient-to-r from-[#00344d] to-[#75a9c4] bg-clip-text text-transparent">
              Executives
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {executives.map((person, index) => {
            const isLastPerson = index === executives.length - 1
            const hasOddMobileTotal = executives.length % 2 !== 0
            const hasIncompleteDesktopRow = executives.length % 3 === 1

            return (
              <motion.div
                key={person.id}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.85,
                  delay: (index % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  isLastPerson && hasOddMobileTotal
                    ? 'col-span-2 mx-auto w-[calc(50%-0.5rem)]'
                    : '',
                  isLastPerson && hasIncompleteDesktopRow
                    ? 'md:col-span-1 md:col-start-2 md:mx-0 md:w-full'
                    : '',
                ].join(' ')}
              >
                <PersonCard person={person} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Executives