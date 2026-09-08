import type { Graduate } from '../../types/person'

interface GraduateCardProps {
  graduate: Graduate
}

function GraduateCard({ graduate }: GraduateCardProps) {
  return (
    <article className="flex flex-col items-center text-center">
      <img
        src={graduate.photoUrl}
        alt={graduate.name}
        className="h-40 w-40 rounded-full object-cover"
      />

      <h3 className="mt-4 text-lg font-semibold">
        {graduate.name}
      </h3>

      <p className="text-sm text-gray-500">
        {graduate.unit}
      </p>
    </article>
  )
}

export default GraduateCard