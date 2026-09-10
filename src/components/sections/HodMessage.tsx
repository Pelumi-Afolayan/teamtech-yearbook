import SectionWrapper from '../layout/SectionWrapper'
import Reveal from '../ui/Reveal'
import { getCloudinaryUrl } from '../../lib/cloudinary'
import { hodMessage } from '../../data/hodMessage'

function HodMessage() {
  const hodPhoto = getCloudinaryUrl(hodMessage.photoPublicId, {
    width: 800,
    height: 1000,
    crop: 'fill',
  })

  return (
    <SectionWrapper
      id="hod-message"
      className="overflow-visible bg-[#00344d] text-white"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-24">
          <Reveal direction="left">
            <div>
              <p className="mb-5 text-lg font-black uppercase tracking-[0.18em] text-[#ef3340]">
                A Message from the HOD
              </p>

              <div className="relative">
                <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-[#ef3340]" />

                <img
                  src={hodPhoto}
                  alt={hodMessage.name}
                  className="relative z-10 aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-black uppercase">
                  {hodMessage.name}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#a9c6d3]">
                  {hodMessage.title}
                </p>

                <p className="mt-1 text-sm text-[#a9c6d3]">
                  RUC Chapel of Power
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.15}>
          <div>
            <blockquote className="border-l-4 border-[#ef3340] pl-6 font-sans text-3xl font-semibold italic leading-tight text-[#f5ecdc] sm:text-4xl">
              “{hodMessage.pullQuote}”
            </blockquote>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#d9e6eb] sm:text-lg">
              <p className="font-semibold text-white">
                Dear Members of the Technical Department,
              </p>

              {hodMessage.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 h-[3px] w-16 bg-[#ef3340]" />

            <p className="mt-6 font-sans text-2xl font-semibold italic text-[#f5ecdc]">
              Jesupelumi Afolayan
            </p>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  )
}

export default HodMessage