import type { Unit } from '../../types/unit'

interface UnitCardProps {
  unit: Unit
  number: number
}

function UnitCard({ unit, number }: UnitCardProps) {
  return (
    <article className="group overflow-hidden bg-[#f5ecdc] text-[#00344d]">
      <div className="relative overflow-hidden">
        <img
          src={unit.groupPhotoUrl}
          alt={`${unit.name} group`}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-0 top-0 bg-[#c90016] px-4 py-3 text-sm font-black text-white">
          {String(number).padStart(2, '0')}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-black uppercase tracking-[-0.03em] sm:text-3xl">
          {unit.name}
        </h3>

        <div className="my-5 h-[3px] w-12 bg-[#c90016]" />

        <p className="text-sm leading-7 text-[#46616e] sm:text-base">
          {unit.description}
        </p>

        <div className="mt-7 border-t border-[#c8d2d6] pt-5">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#c90016]">
            Unit Leadership
          </p>

          <div className="space-y-3">
            {unit.leaders.map((leader) => (
              <div
                key={`${leader.name}-${leader.role}`}
                className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center sm:gap-4"
              >
                <p className="text-sm font-bold">{leader.name}</p>

                <p className="text-xs text-[#657d88] sm:text-right">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default UnitCard