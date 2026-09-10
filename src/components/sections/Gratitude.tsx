import { motion } from 'motion/react'
import SectionWrapper from '../layout/SectionWrapper'
import { getCloudinaryUrl } from '../../lib/cloudinary'

function Gratitude() {
  const backgroundImage = getCloudinaryUrl('app', {
    width: 2000,
  })

  return (
    <section
      id="gratitude"
      className="relative overflow-hidden bg-[#001f2d] text-white"
    >
      <img
        src={backgroundImage}
        alt="Technical Department members serving together"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#001f2d]/90" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#001f2d]/60 via-transparent to-[#001f2d]" />

      <SectionWrapper className="relative z-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            <p className="mb-5 text-lg font-black uppercase tracking-[0.2em] text-[#ef3340]">
              Appreciation
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
              With Gratitude
            </h2>

            <div className="mx-auto mt-7 h-[3px] w-16 bg-[#ef3340]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-[#00344d]/80 p-6 shadow-2xl backdrop-blur-sm sm:p-10 lg:p-14"
          >
            <p className="text-lg leading-8 text-[#e5eef2] sm:text-xl sm:leading-9">
              Looking back, it is easy to see how much of this journey was
              made possible by the people who showed up, taught us, corrected
              us, encouraged us and sometimes simply stayed when things got
              difficult. Our department became more than just a place where
              we served. It became a place where we learned, grew, made
              mistakes, laughed, worked and created memories that we will
              carry with us for a very long time. For all of it, we are
              deeply grateful.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-black uppercase text-[#f1c75b]">
                  To Those Who Led Us
                </h3>

                <p className="mt-4 leading-8 text-[#c9dbe3]">
                  To our Chaplain, Technical Coordinator, Sound Coordinator,
                  executives and every unit head, thank you for giving
                  direction, trusting us with responsibility and being patient
                  with us as we learned. Leadership was not always easy, but
                  your willingness to guide us, correct us and sometimes give
                  us another chance made a difference.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase text-[#f1c75b]">
                  To Those Who Taught Us
                </h3>

                <p className="mt-4 leading-8 text-[#c9dbe3]">
                  Thank you for every training, every correction, every “try
                  it again” and every moment you took the time to explain
                  something we did not understand. Some lessons went beyond
                  cameras, sound, editing, technical setups or our individual
                  units. You taught us discipline, teamwork, commitment and
                  what it means to serve even when nobody is watching.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-10">
              <h3 className="text-xl font-black uppercase text-[#f1c75b]">
                To Everyone Who Served Alongside Us
              </h3>

              <p className="mt-4 leading-8 text-[#c9dbe3]">
                To the people whose names may not always appear at the front,
                but whose hands were always busy behind the scenes, we see
                you. To those who came early, stayed late, carried equipment,
                fixed problems, ran cables, captured moments, edited till
                late, managed things quietly and showed up even when you were
                tired—thank you. Every person mattered. Every contribution
                counted.
              </p>
            </div>

            <p className="mt-10 text-lg leading-8 text-[#e5eef2]">
              As the graduating class leaves, we take with us more than
              photographs and memories. We leave with friendships, stories,
              skills, lessons and a part of this department that will always
              remain with us.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#ef3340] pl-6 font-sans text-2xl font-semibold italic leading-relaxed text-[#f5ecdc] sm:text-3xl">
              “Every service, every setup, every late night, every camera,
              every sound check, every edit and every unseen moment became
              part of the story we now celebrate.”
            </blockquote>

            <div className="mt-12 space-y-2 text-center text-xl font-black uppercase tracking-[0.08em] text-white sm:text-2xl">
              <p>Thank you for serving.</p>
              <p>Thank you for believing.</p>
              <p className="text-[#ef3340]">
                Thank you for building with us.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  )
}

export default Gratitude