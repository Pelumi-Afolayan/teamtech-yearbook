import type { Person } from '../../types/person'

interface PersonCardProps {
  person: Person
}

function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={person.photoUrl}
        alt={person.name}
        className="w-40 h-40 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{person.name}</h3>
      <p className="text-sm text-gray-500">{person.position}</p>
    </div>
  )
}

export default PersonCard