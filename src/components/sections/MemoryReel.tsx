import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Lightbox from '../ui/Lightbox'
import { memories } from '../../data/memories'

const SLIDE_DURATION = 5000
const IMAGES_PER_SLIDE = 2

function MemoryReel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [failedImages, setFailedImages] = useState<string[]>([])
  const [selectedMemoryId, setSelectedMemoryId] = useState<string | null>(
    null
  )

  const availableMemories = memories.filter(
    (memory) => !failedImages.includes(memory.id)
  )

  const currentMemories = availableMemories.slice(
    currentIndex,
    currentIndex + IMAGES_PER_SLIDE
  )

  const totalSlides = Math.ceil(
    availableMemories.length / IMAGES_PER_SLIDE
  )

  const currentSlide =
    Math.floor(currentIndex / IMAGES_PER_SLIDE) + 1

  function showPrevious() {
    setCurrentIndex((current) => {
      const previous = current - IMAGES_PER_SLIDE

      if (previous < 0) {
        const lastSlideIndex =
          Math.floor(
            (availableMemories.length - 1) / IMAGES_PER_SLIDE
          ) * IMAGES_PER_SLIDE

        return lastSlideIndex
      }

      return previous
    })
  }

  function showNext() {
    setCurrentIndex((current) => {
      const next = current + IMAGES_PER_SLIDE

      if (next >= availableMemories.length) {
        return 0
      }

      return next
    })
  }

  function handleImageError(imageId: string) {
    setFailedImages((current) => {
      if (current.includes(imageId)) {
        return current
      }

      return [...current, imageId]
    })
  }

  useEffect(() => {
    if (!isPlaying || availableMemories.length === 0) {
      return
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((current) => {
        const next = current + IMAGES_PER_SLIDE

        return next >= availableMemories.length ? 0 : next
      })
    }, SLIDE_DURATION)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isPlaying, availableMemories.length])

  useEffect(() => {
    if (
      availableMemories.length > 0 &&
      currentIndex >= availableMemories.length
    ) {
      setCurrentIndex(0)
    }
  }, [availableMemories.length, currentIndex])

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (selectedMemoryId) {
        return
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }

      if (event.key === ' ') {
        event.preventDefault()
        setIsPlaying((current) => !current)
      }
    }

    document.addEventListener('keydown', handleKeyboard)

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }
  })

  if (availableMemories.length === 0) {
    return (
      <p className="py-20 text-center text-white/70">
        No memories are currently available.
      </p>
    )
  }

  return (
    <>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.12}
            onDragEnd={(_, information) => {
              if (information.offset.x < -70) {
                showNext()
              }

              if (information.offset.x > 70) {
                showPrevious()
              }
            }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid cursor-grab grid-cols-1 gap-4 active:cursor-grabbing sm:grid-cols-2 lg:gap-6"
          >
            {currentMemories.map((memory, index) => (
              <motion.button
                key={memory.id}
                type="button"
                onClick={() => setSelectedMemoryId(memory.id)}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 0.985,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative h-[38svh] min-h-[280px] cursor-zoom-in overflow-hidden bg-black/40 sm:h-[70vh] sm:min-h-[500px] sm:max-h-[760px]"
              >
                <img
                  src={memory.photoUrl}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
                />

                <div className="absolute inset-0 bg-black/20" />

                <img
                  src={memory.photoUrl}
                  alt={memory.alt}
                  draggable={false}
                  onError={() => handleImageError(memory.id)}
                  className="relative z-10 h-full w-full object-contain"
                />

                <div className="pointer-events-none absolute inset-0 z-20 ring-1 ring-inset ring-white/20 transition group-hover:ring-[#ef3340]" />

                <div className="pointer-events-none absolute bottom-4 right-4 z-30 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-xl text-[#00344d] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex flex-col items-center gap-5">
          <p
            className="text-sm font-bold uppercase tracking-[0.18em] text-[#9bb8c5]"
            aria-live="polite"
          >
            Slide {currentSlide} of {totalSlides}
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Memories {currentIndex + 1}–
            {Math.min(
              currentIndex + currentMemories.length,
              availableMemories.length
            )}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous memories"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-2xl text-white transition hover:bg-white hover:text-[#00344d]"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying((current) => !current)}
              className="min-w-32 rounded-full bg-[#c90016] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-[#00344d]"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next memories"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-2xl text-white transition hover:bg-white hover:text-[#00344d]"
            >
              ›
            </button>
          </div>

          <p className="text-center text-xs text-white/50">
            Swipe on mobile or use the keyboard arrow keys
          </p>
        </div>
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

export default MemoryReel