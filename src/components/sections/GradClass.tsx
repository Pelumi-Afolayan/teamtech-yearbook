import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import GraduateCard from '../shared/GraduateCard'
import Reveal from '../ui/Reveal'
import { graduates } from '../../data/graduates'

function GradClass() {
  return (
    <SectionWrapper
      id="graduating-class"
      className="overflow-hidden bg-[#f5ecdc] text-[#00344d]"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal direction="left">
          <div className="mb-14">
            <p className="mb-4 text-lg font-black uppercase tracking-[0.18em] text-[#c90016]">
              Class of 2026
            </p>

            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              The Graduating Class
            </h2>

            <div className="mt-7 flex items-center gap-4">
              <div className="h-[3px] w-16 bg-[#c90016]" />

              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#59717d]">
                {graduates.length} stories. One legacy.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {graduates.map((graduate, index) => {
            const mobilePosition = index % 2
            const tabletPosition = index % 3
            const desktopPosition = index % 4

            return (
              <motion.div
                key={graduate.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.85,
                  delay:
                    typeof window !== 'undefined' &&
                    window.innerWidth >= 1024
                      ? desktopPosition * 0.1
                      : typeof window !== 'undefined' &&
                          window.innerWidth >= 640
                        ? tabletPosition * 0.1
                        : mobilePosition * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <GraduateCard
                  graduate={graduate}
                  index={index}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default GradClass