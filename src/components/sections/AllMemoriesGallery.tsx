import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Lightbox from '../ui/Lightbox'
import { memories } from '../../data/memories'

function AllMemoriesGallery() {
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [selectedMemoryId, setSelectedMemoryId] = useState<string | null>(
    null
  )

  const availableMemories = memories.filter(
    (memory) => !failedImages.includes(memory.id)
  )

  function handleImageError(imageId: string) {
    setFailedImages((current) => {
      if (current.includes(imageId)) {
        return current
      }

      return [...current, imageId]
    })
  }

  return (
    <>
      <div className="columns-1 gap-3 sm:columns-2 md:gap-5 lg:columns-3 xl:columns-4">
        {availableMemories.map((memory, index) => {
          const direction = index % 2 === 0 ? -30 : 30

          return (
            <motion.button
              key={memory.id}
              type="button"
              onClick={() => setSelectedMemoryId(memory.id)}
              initial={{
                opacity: 0,
                x: direction,
                y: 40,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.55,
                delay: (index % 8) * 0.05,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 0.98,
              }}
              className="group relative mb-3 block w-full break-inside-avoid cursor-zoom-in overflow-hidden bg-[#082c3d] md:mb-5"
            >
              <img
                src={memory.photoUrl}
                alt={memory.alt}
                loading="lazy"
                onError={() => handleImageError(memory.id)}
                className="block h-auto w-full transition duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

              <div className="pointer-events-none absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-lg text-[#00344d] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                ↗
              </div>

              <span className="sr-only">
                Open memory {memory.id}
              </span>
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {selectedMemoryId && (
          <Lightbox
            memories={availableMemories}
            selectedId={selectedMemoryId}
            onSelect={setSelectedMemoryId}
            onClose={() => setSelectedMemoryId(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default AllMemoriesGallery