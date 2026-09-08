import type { Graduate } from '../../types/person'

interface GraduateCardProps {
  graduate: Graduate
  index: number
}

const cardColours = [
  'bg-[#c90016]',
  'bg-[#00344d]',
  'bg-[#2f7899]',
]

function GraduateCard({
  graduate,
  index,
}: GraduateCardProps) {
  const cardColour = cardColours[index % cardColours.length]

  return (
    <article className="group overflow-hidden shadow-sm">
      <div className="overflow-hidden bg-[#d9d9d9]">
        <img
          src={graduate.photoUrl}
          alt={graduate.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>

      <div
        className={`${cardColour} flex min-h-24 flex-col items-center justify-center px-3 py-4 text-center text-white`}
      >
        <h3 className="text-sm font-black uppercase leading-tight sm:text-base">
          {graduate.name}
        </h3>

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-xs">
          {graduate.unit}
        </p>
      </div>
    </article>
  )
}

export default GraduateCard