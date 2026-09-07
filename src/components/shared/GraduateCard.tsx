import type { Graduate } from '../../types/person'

interface GraduateCardProps {
  graduate: Graduate
}

function GraduateCard({ graduate }: GraduateCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={graduate.photoUrl}
        alt={graduate.name}
        className="w-40 h-40 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{graduate.name}</h3>
      <p className="text-sm text-gray-500">{graduate.unit}</p>
    </div>
  )
}

export default GraduateCard