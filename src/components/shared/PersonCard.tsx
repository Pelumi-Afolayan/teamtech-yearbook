import type { Person } from '../../types/person'

interface PersonCardProps {
  person: Person
}

function PersonCard({ person }: PersonCardProps) {
  return (
    <article className="overflow-hidden bg-red-700 p-2 shadow-md">
      <img
        src={person.photoUrl}
        alt={person.name}
        className="aspect-[4/5] w-full object-cover object-top"
      />

      <div className="px-1 pb-1 pt-3 text-center text-white">
        <h3 className="text-sm font-extrabold uppercase leading-tight md:text-base">
          {person.name}
        </h3>

        <p className="mt-1 text-[10px] font-medium uppercase leading-tight md:text-xs">
          {person.position}
        </p>
      </div>
    </article>
  )
}

export default PersonCard