import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import { memories } from '../../data/memories'

const PREVIEW_COUNT = 9

function MemoriesPreview() {
  const [failedImages, setFailedImages] = useState<string[]>([])

  const previewMemories = memories
    .filter((memory) => !failedImages.includes(memory.id))
    .slice(0, PREVIEW_COUNT)

  function handleImageError(imageId: string) {
    setFailedImages((current) => {
      if (current.includes(imageId)) {
        return current
      }

      return [...current, imageId]
    })
  }

  return (
    <SectionWrapper
      id="memories-preview"
      className="overflow-hidden bg-[#00344d] text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="mb-4 text-lg font-black uppercase tracking-[0.18em] text-[#ef3340]">
            Moments We Shared
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
            Department Memories
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#c4d6de]">
            A glimpse into the services, setups, friendships and unseen
            moments that shaped our journey.
          </p>
        </motion.div>

        <div className="columns-2 gap-3 sm:columns-3 lg:gap-5">
          {previewMemories.map((memory, index) => {
            const direction = index % 2 === 0 ? -40 : 40

            return (
              <motion.div
                key={memory.id}
                initial={{
                  opacity: 0,
                  x: direction,
                  y: 40,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: 'easeOut',
                }}
                className="mb-3 break-inside-avoid overflow-hidden lg:mb-5"
              >
                <img
                  src={memory.photoUrl}
                  alt={memory.alt}
                  loading="lazy"
                  onError={() => handleImageError(memory.id)}
                  className="h-auto w-full transition duration-700 hover:scale-105"
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/memories"
            className="inline-flex items-center gap-3 rounded-full bg-[#c90016] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-[#00344d]"
          >
            Explore All Memories
            <span aria-hidden="true">→</span>
          </Link>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#9bb8c5]">
            Over 400 moments to explore
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default MemoriesPreview