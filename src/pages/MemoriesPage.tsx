import { useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import AllMemoriesGallery from '../components/sections/AllMemoriesGallery'
import MemoryReel from '../components/sections/MemoryReel'

type MemoryView = 'gallery' | 'reel'

function MemoriesPage() {
  const [currentView, setCurrentView] =
    useState<MemoryView>('reel')

  return (
    <main className="min-h-screen bg-[#00344d] pb-20 pt-20 text-white">
      <div className="border-b border-white/10 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 transition hover:text-[#ef3340]"
          >
            ← Back to Yearbook
          </Link>

          <p className="hidden text-xs font-bold uppercase tracking-[0.2em] text-[#9bb8c5] sm:block">
            Legacy of Lights
          </p>
        </div>
      </div>

      <section className="px-4 pb-12 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center"
          >
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#ef3340]">
              RUC Team Tech
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Department Memories
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#c4d6de]">
              Relive the services, friendships, celebrations and unseen
              moments that shaped our journey.
            </p>
          </motion.div>

          <div
            className="mx-auto mb-12 flex w-fit rounded-full border border-white/20 bg-black/15 p-1"
            role="group"
            aria-label="Choose memories view"
          >
            <button
              type="button"
              onClick={() => setCurrentView('reel')}
              aria-pressed={currentView === 'reel'}
              className={`rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition sm:px-7 ${
                currentView === 'reel'
                  ? 'bg-[#c90016] text-white'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              Memory Reel
            </button>

            <button
              type="button"
              onClick={() => setCurrentView('gallery')}
              aria-pressed={currentView === 'gallery'}
              className={`rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition sm:px-7 ${
                currentView === 'gallery'
                  ? 'bg-[#c90016] text-white'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              Gallery
            </button>
          </div>

          <AnimatePresence mode="wait">
            {currentView === 'reel' ? (
              <motion.div
                key="reel"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
              >
                <MemoryReel />
              </motion.div>
            ) : (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
              >
                <AllMemoriesGallery />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}

export default MemoriesPage