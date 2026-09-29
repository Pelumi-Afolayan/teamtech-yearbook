import { useMemo } from 'react'
import { motion } from 'motion/react'
import { memories } from '../../data/memories'

function Hero() {
  const heroMemories = useMemo(() => {
    return [...memories]
      .sort(() => Math.random() - 0.5)
      .slice(0, 15)
  }, [])

  const imageColumns = [
    heroMemories.filter((_, index) => index % 3 === 0),
    heroMemories.filter((_, index) => index % 3 === 1),
    heroMemories.filter((_, index) => index % 3 === 2),
  ]

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-[#00344d]"
    >
      {/* Scrolling photo collage */}
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-3 gap-4 px-4 py-6 sm:gap-10 sm:px-12 sm:py-8 lg:gap-16 lg:px-28"
        aria-hidden="true"
      >
        {imageColumns.map((column, columnIndex) => {
          const repeatedImages = [...column, ...column]

          return (
            <div
              key={columnIndex}
              className={`relative overflow-hidden ${
                columnIndex === 1 ? '-translate-y-24' : ''
              }`}
            >
              <motion.div
                animate={{
                  y: ['0%', '-50%'],
                }}
                transition={{
                  duration: 22 + columnIndex * 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex flex-col gap-3 sm:gap-5 lg:gap-7"
              >
                {repeatedImages.map((memory, imageIndex) => (
                  <div
                    key={`${memory.id}-${imageIndex}`}
                    className="overflow-hidden rounded-sm border-2 border-white/70 bg-[#082c3d] shadow-2xl sm:border-4"
                  >
                    <img
                      src={memory.photoUrl}
                      alt=""
                      loading={imageIndex < 4 ? 'eager' : 'lazy'}
                      className={`w-full object-cover ${
                        (imageIndex + columnIndex) % 3 === 0
                          ? 'aspect-[4/5]'
                          : (imageIndex + columnIndex) % 3 === 1
                            ? 'aspect-square'
                            : 'aspect-[4/3]'
                      }`}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Light overlay — photographs remain clearly visible */}
      <div className="pointer-events-none absolute inset-0 bg-[#001d2b]/25" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#001d2b]/35 via-transparent to-[#001d2b]/50" />

      {/* Main hero writing */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <div className="rounded-3xl border border-white/20 bg-[#00283b]/75 px-5 py-10 shadow-2xl backdrop-blur-[5px] sm:px-12 sm:py-14">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] sm:text-sm">
              RUC Chapel of Power
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              <span className="block">Technical</span>
              <span className="block">Department</span>
            </h1>

            <div className="mx-auto mt-7 h-[3px] w-16 bg-[#ef3340]" />

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.24em] sm:text-lg">
              Graduating Class of 2026
            </p>

            <p className="mt-3 font-['Playfair_Display_Variable'] text-2xl font-semibold italic text-[#f5ecdc] sm:text-4xl">
              Legacy of Lights
            </p>

            <a
              href="#our-story"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#c90016] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-white hover:text-[#00344d]"
            >
              Enter Yearbook
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs"
      >
        Scroll
      </motion.div>
    </section>
  )
}

export default Hero