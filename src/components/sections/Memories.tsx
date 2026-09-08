import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import Lightbox from '../ui/Lightbox'
import { memories } from '../../data/memories'

const MEMORIES_PER_SET = 12

function Memories() {
  const [currentSet, setCurrentSet] = useState(0)
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [selectedMemoryId, setSelectedMemoryId] = useState<string | null>(
    null
  )

  const availableMemories = memories.filter(
    (memory) => !failedImages.includes(memory.id)
  )

  const totalSets = Math.ceil(
    availableMemories.length / MEMORIES_PER_SET
  )

  const firstMemoryIndex = currentSet * MEMORIES_PER_SET

  const currentMemories = availableMemories.slice(
    firstMemoryIndex,
    firstMemoryIndex + MEMORIES_PER_SET
  )

  function handleImageError(imageId: string) {
    setFailedImages((currentFailedImages) => {
      if (currentFailedImages.includes(imageId)) {
        return currentFailedImages
      }

      return [...currentFailedImages, imageId]
    })
  }

  function showPreviousSet() {
    setSelectedMemoryId(null)
    setCurrentSet((current) => Math.max(current - 1, 0))
  }

  function showNextSet() {
    setSelectedMemoryId(null)
    setCurrentSet((current) =>
      Math.min(current + 1, totalSets - 1)
    )
  }

  return (
    <>
      <SectionWrapper
        id="memories"
        className="overflow-hidden bg-[#00344d] text-white"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-12"
          >
            <p className="mb-4 text-lg font-black uppercase tracking-[0.18em] text-[#ef3340]">
              Moments We Shared
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
              Department Memories
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#c4d6de]">
              Every service, every setup, every late night and every unseen
              moment became part of the story we now celebrate.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSet}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6"
            >
              {currentMemories.map((memory, index) => {
                const horizontalDirection = index % 2 === 0 ? -40 : 40
                const rotation = index % 3 === 0 ? -2 : 2

                return (
                  <motion.button
                    key={memory.id}
                    type="button"
                    onClick={() => setSelectedMemoryId(memory.id)}
                    initial={{
                      opacity: 0,
                      x: horizontalDirection,
                      y: 40,
                      scale: 0.8,
                      rotate: rotation,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.07,
                      ease: 'easeOut',
                    }}
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative mb-4 block w-full break-inside-avoid cursor-zoom-in overflow-hidden bg-[#082c3d] lg:mb-6"
                  >
                    <img
                      src={memory.photoUrl}
                      alt={memory.alt}
                      loading="lazy"
                      onError={() => handleImageError(memory.id)}
                      className="block h-auto w-full transition duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                    <div className="pointer-events-none absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-lg text-[#00344d] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </div>

                    <span className="sr-only">
                      Open image {memory.id}
                    </span>
                  </motion.button>
                )
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p
              className="text-sm font-bold uppercase tracking-[0.15em] text-[#9bb8c5]"
              aria-live="polite"
            >
              Memories {firstMemoryIndex + 1}–
              {Math.min(
                firstMemoryIndex + currentMemories.length,
                availableMemories.length
              )}{' '}
              of {availableMemories.length}
            </p>

            <div className="flex w-full gap-3 sm:w-auto">
              {currentSet > 0 && (
                <button
                  type="button"
                  onClick={showPreviousSet}
                  className="flex-1 rounded-full border border-white/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-[#00344d] sm:flex-none"
                >
                  ← Previous
                </button>
              )}

              {currentSet < totalSets - 1 && (
                <button
                  type="button"
                  onClick={showNextSet}
                  className="flex-1 rounded-full bg-[#c90016] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-[#00344d] sm:flex-none"
                >
                  Next Moments →
                </button>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {selectedMemoryId !== null && (
          <Lightbox
            memories={currentMemories}
            selectedId={selectedMemoryId}
            onSelect={setSelectedMemoryId}
            onClose={() => setSelectedMemoryId(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Memories