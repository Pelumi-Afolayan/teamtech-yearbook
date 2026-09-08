import { motion } from 'motion/react'
import type { Award } from '../../types/award'

interface AwardCardProps {
  award: Award
  index: number
}

function AwardCard({
  award,
  index,
}: AwardCardProps) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.12,
        ease: 'easeOut',
      }}
      className="group overflow-hidden bg-[#00344d] shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={award.photoUrl}
          alt={award.recipient}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#f1c75b] bg-[#00344d] text-center text-[10px] font-black uppercase tracking-[0.08em] text-[#f1c75b]">
          2026
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00344d] to-transparent" />
      </div>

      <div className="relative px-6 pb-7 pt-5 text-center">
        <div className="mx-auto mb-5 h-[2px] w-12 bg-[#f1c75b]" />

        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f1c75b]">
          {award.title}
        </p>

        <h3 className="mt-3 text-xl font-black uppercase leading-tight text-white">
          {award.recipient}
        </h3>

        {award.unit && (
          <p className="mt-2 text-sm font-medium text-[#a9c6d3]">
            {award.unit}
          </p>
        )}
      </div>
    </motion.article>
  )
}

export default AwardCard