import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import { creativeSupport } from '../../data/creativeSupport'
import type { CreativeSupportMember } from '../../types/creativeSupport'

interface CreativeSupportCardProps {
  member: CreativeSupportMember
  index: number
}

function CreativeSupportCard({
  member,
  index,
}: CreativeSupportCardProps) {
  const initials = member.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
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
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden bg-white shadow-lg"
    >
      {member.photoUrl ? (
        <div className="overflow-hidden">
          <img
            src={member.photoUrl}
            alt={member.name}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-[#00344d] to-[#2f7899]">
          <span className="text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
            {initials}
          </span>
        </div>
      )}

      <div className="border-t-4 border-[#c90016] px-4 py-6 text-center">
        <h3 className="text-base font-black uppercase leading-tight text-[#00344d] sm:text-lg">
          {member.name}
        </h3>

        {member.nickname && (
          <p className="mt-1 text-sm font-semibold italic text-[#59717d]">
            “{member.nickname}”
          </p>
        )}

        <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-[#c90016]">
          Creative Support
        </p>

        <p className="mt-1 text-xs font-medium text-[#657d88]">
          {member.contribution}
        </p>
      </div>
    </motion.article>
  )
}

function CreativeSupport() {
  return (
    <SectionWrapper
      id="creative-support"
      className="overflow-hidden bg-[#f5ecdc] text-[#00344d]"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-lg font-black uppercase tracking-[0.18em] text-[#c90016]">
            Beyond the Team
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
            Creative Support
          </h2>

          <div className="mx-auto my-7 h-[3px] w-16 bg-[#c90016]" />

          <p className="mx-auto max-w-3xl text-base leading-8 text-[#46616e] sm:text-lg">
            During some of our busiest seasons, these creatives stepped
            in to support the Graphics Design Unit. Though they were not
            official members of the Technical Department, their talent,
            availability and willingness to help made a meaningful
            difference to our work.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold italic leading-7 text-[#00344d] sm:text-base">
            We appreciate every design, every deadline met and every
            moment they chose to build with us.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {creativeSupport.map((member, index) => (
            <CreativeSupportCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CreativeSupport