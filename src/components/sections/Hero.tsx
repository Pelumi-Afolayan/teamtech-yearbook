import { getCloudinaryUrl } from '../../lib/cloudinary'

function Hero() {
  const heroImage = getCloudinaryUrl('IMG_1584', {
    width: 2000,
  })

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="RUC Chapel of Power Technical Department"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm">
          RUC Chapel of Power
        </p>

        <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          <span className="block">Technical</span>
          <span className="block">Department</span>
        </h1>

        <div className="mx-auto mt-7 h-[2px] w-16 bg-[#c90016]" />

        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] sm:text-lg">
          Graduating Class of 2026
        </p>

        <p className="mt-3 font-sans text-2xl font-semibold italic text-[#f5ecdc] sm:text-3xl">
            Legacy of Lights
        </p>

        <a
          href="#our-story"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#c90016] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-white hover:text-[#00344d]"
        >
          Enter Yearbook
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}

export default Hero