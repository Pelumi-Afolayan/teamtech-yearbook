import SectionWrapper from '../layout/SectionWrapper'
import Reveal from '../ui/Reveal'
import { getCloudinaryUrl } from '../../lib/cloudinary'

function OurStory() {
  const storyImage = getCloudinaryUrl('IMG_3291', {
    width: 1400,
  })

  return (
    <SectionWrapper
      id="our-story"
      className="overflow-hidden bg-[#f5ecdc] text-[#00344d]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <div>
            <p className="mb-5 text-lg font-black uppercase tracking-[0.18em] text-[#c90016] sm:text-xl">
              Our Story
            </p>

            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              More Than the Work Behind the Scenes
            </h2>

            <div className="my-8 h-[3px] w-16 bg-[#c90016]" />

            <p className="max-w-xl text-base leading-8 text-[#294b5c] sm:text-lg">
              Behind every service, every sound check, every camera frame and
              every moment shared beyond the chapel walls is a team committed
              to serving with excellence. We are more than the people behind
              the equipment—we are storytellers, problem-solvers and stewards
              of every moment entrusted to us. This is our story, our service
              and our legacy of lights.
            </p>

            <div className="mt-10 border-l-4 border-[#c90016] pl-6">
              <blockquote className="font-['Playfair_Display_Variable'] text-2xl font-medium italic leading-relaxed text-[#00344d] sm:text-3xl">
                “Whatever your hand finds to do, do it with all your might...”
              </blockquote>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[#c90016]">
                Ecclesiastes 9:10
              </p>
            </div>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6b7f89]">
                Department Motto
              </p>

              <p className="mt-2 text-xl font-bold text-[#00344d]">
                Serving with skill. Creating with purpose.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border-2 border-[#c90016] sm:-left-5 sm:-top-5" />

            <img
              src={storyImage}
              alt="Technical Department members working behind the scenes"
              className="relative z-10 aspect-[4/5] w-full object-cover"
            />

            <div className="absolute bottom-5 right-[-10px] z-20 bg-[#00344d] px-5 py-4 text-white sm:right-[-20px]">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Class Theme
              </p>

              <p className="mt-1 font-['Playfair_Display_Variable'] text-2xl font-semibold italic text-[#f5ecdc]">
                Legacy of Lights
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  )
}

export default OurStory