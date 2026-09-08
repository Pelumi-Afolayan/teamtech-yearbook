import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Memory } from '../../types/memory'

interface LightboxProps {
  memories: Memory[]
  selectedId: string
  onSelect: (id: string) => void
  onClose: () => void
}

function Lightbox({
  memories,
  selectedId,
  onSelect,
  onClose,
}: LightboxProps) {
  const currentIndex = memories.findIndex(
    (memory) => memory.id === selectedId
  )

  const currentMemory = memories[currentIndex]

  function showPrevious() {
    const previousIndex =
      currentIndex === 0
        ? memories.length - 1
        : currentIndex - 1

    onSelect(memories[previousIndex].id)
  }

  function showNext() {
    const nextIndex =
      currentIndex === memories.length - 1
        ? 0
        : currentIndex + 1

    onSelect(memories[nextIndex].id)
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  })

  if (!currentMemory) {
    return null
  }

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Memory photograph viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photograph"
        className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/50 text-2xl text-white transition hover:bg-white hover:text-black"
      >
        ×
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          showPrevious()
        }}
        aria-label="Previous photograph"
        className="absolute left-3 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white backdrop-blur transition hover:bg-white hover:text-black sm:left-8 sm:h-14 sm:w-14"
      >
        ‹
      </button>

      <div
        className="relative flex h-full w-full items-center justify-center px-12 sm:px-20"
        onClick={(event) => event.stopPropagation()}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={currentMemory.id}
            src={currentMemory.fullPhotoUrl}
            alt={currentMemory.alt}
            initial={{
              opacity: 0,
              scale: 0.96,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              x: -30,
            }}
            transition={{
              duration: 0.35,
              ease: 'easeOut',
            }}
            className="max-h-[88vh] max-w-full object-contain shadow-2xl"
          />
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          showNext()
        }}
        aria-label="Next photograph"
        className="absolute right-3 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white backdrop-blur transition hover:bg-white hover:text-black sm:right-8 sm:h-14 sm:w-14"
      >
        ›
      </button>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold tracking-[0.18em] text-white/60">
        {currentIndex + 1} / {memories.length}
      </p>
    </motion.div>
  )
}

export default Lightbox